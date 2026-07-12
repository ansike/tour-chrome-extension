#!/usr/bin/env bash
# scripts/release.sh — one-shot release builder for tour-helper
#
# Usage:
#   ./scripts/release.sh 0.1.30
#
# What it does:
#   1. Verifies the version argument matches package.json (refuses to proceed if mismatched)
#   2. Cleans any prior build/chrome-mv3-prod
#   3. Runs `npm run build` (plasmo build)
#   4. Packages build/chrome-mv3-prod into chrome-mv3-prod-<version>.zip at repo root
#   5. Computes SHA256 of the zip
#   6. Sanity-checks the zip's manifest (version field, host_permissions contents)
#   7. Optionally creates a git tag named v<version> (only if --tag flag passed)
#
# After running, check docs/release/v0.1.29-chrome-store/verification.md for the
# expected SHA256 — re-run this script and compare; if they differ, the source
# changed since the last verified build.

set -euo pipefail

VERSION="${1:-}"
TAG=0

# Parse flags
shift || true
while [[ $# -gt 0 ]]; do
  case "$1" in
    --tag) TAG=1; shift ;;
    *) echo "Unknown flag: $1" >&2; exit 2 ;;
  esac
done

if [[ -z "$VERSION" ]]; then
  echo "Usage: $0 <version> [--tag]" >&2
  echo "Example: $0 0.1.30 --tag" >&2
  exit 2
fi

# Confirm we're at repo root
REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

# Verify package.json version matches
PKG_VERSION=$(node -e "console.log(require('./package.json').version)" 2>/dev/null || echo "")
if [[ "$PKG_VERSION" != "$VERSION" ]]; then
  echo "ERROR: package.json version is '$PKG_VERSION', but you passed '$VERSION'." >&2
  echo "Run \`npm version $VERSION\` first or pass the version that matches package.json." >&2
  exit 1
fi

ZIP_NAME="chrome-mv3-prod-${VERSION}.zip"
BUILD_DIR="build/chrome-mv3-prod"

echo "==> Cleaning $BUILD_DIR"
rm -rf "$BUILD_DIR"

echo "==> Running npm run build"
npm run build

echo "==> Verifying build manifest contains version $VERSION"
BUILT_VERSION=$(node -e "console.log(require('./$BUILD_DIR/manifest.json').version)")
if [[ "$BUILT_VERSION" != "$VERSION" ]]; then
  echo "ERROR: built manifest version is '$BUILT_VERSION', expected '$VERSION'" >&2
  exit 1
fi

echo "==> Zipping $BUILD_DIR -> $ZIP_NAME"
( cd "$BUILD_DIR" && zip -r "../../$ZIP_NAME" . )

echo "==> Computing SHA256"
SHA256=$(shasum -a 256 "$ZIP_NAME" | awk '{print $1}')
echo "    $SHA256"

echo "==> Sanity-checking zip contents"
if ! unzip -p "$ZIP_NAME" manifest.json | grep -q "\"version\":\"$VERSION\""; then
  echo "ERROR: zip manifest does not contain version $VERSION" >&2
  exit 1
fi
if unzip -p "$ZIP_NAME" manifest.json | grep -q "askfuture"; then
  echo "ERROR: zip manifest still references askfuture.online (stale build?)" >&2
  exit 1
fi

echo "==> Done."
echo
echo "Release artifact: $ZIP_NAME"
echo "SHA256:          $SHA256"
echo

if [[ $TAG -eq 1 ]]; then
  TAG_NAME="v$VERSION"
  if git rev-parse "$TAG_NAME" >/dev/null 2>&1; then
    echo "Tag $TAG_NAME already exists — skipping (delete with: git tag -d $TAG_NAME)" >&2
  else
    git tag -a "$TAG_NAME" -m "Release $VERSION"
    echo "==> Created tag $TAG_NAME (push with: git push origin $TAG_NAME)"
  fi
fi