# v0.1.29 Release Artifact Verification

Generated: 2026-07-12 (auto-run before submission)

## Zip Metadata

| Field | Value |
| --- | --- |
| File | `chrome-mv3-prod-0.1.29.zip` |
| Size | 2,814,431 bytes (2.81 MB) |
| File count inside zip | 21 |
| SHA256 | `09745d132a36a6af433aef31809374e201717a7028db513c59e831a13c3e72aa` |
| Created by | `npm run build` + `zip -r ...` on commit `3e51b0c` |

## Manifest Inside Zip (key fields)

```json
{
  "manifest_version": 3,
  "name": "Tour Helper",
  "version": "0.1.29",
  "author": "ansike. <ansike@qq.com>",
  "description": "A Tour Helper Extension.",
  "permissions": ["scripting", "sidePanel", "storage"],
  "host_permissions": [
    "https://vacations.ctrip.com/*",
    "https://vbooking.ctrip.com/*",
    "https://online.ctrip.com/*",
    "https://www.atdtour.com/*"
  ],
  "content_scripts": 5 entries (util + 4 feature scripts on Ctrip subdomains)
}
```

## Pre-Submit Checks

| Check | Expected | Actual |
| --- | --- | --- |
| version field | `0.1.29` | ✅ `0.1.29` |
| host_permissions contains `atdtour.com` | yes | ✅ |
| host_permissions contains `askfuture.online` | no | ✅ absent |
| host_permissions contains `EXTENSION_DEV_HOST_*` | no | ✅ absent (Plasmo strips these during build) |
| permissions contains `storage` | yes | ✅ |
| manifest_version | 3 | ✅ |
| `src/**` modified in this branch | no | ✅ untouched (`git diff dbb5060..HEAD -- src/` is empty) |

## How to Regenerate

```bash
rm -rf build/chrome-mv3-prod
npm run build
cd build/chrome-mv3-prod && zip -r ../../chrome-mv3-prod-0.1.29.zip . && cd ../..
shasum -a 256 chrome-mv3-prod-0.1.29.zip
```

After regenerating, re-check that the new SHA256 matches the one in this file. If not, **stop** — a changed SHA256 means source changed since the verification ran, and you should re-run the per-task review.

## How to Verify After Upload to CWS Dashboard

1. In the Dashboard, on the new version's "Package" tab, compare the uploaded SHA256 with the one above.
2. Cross-check the version shown in the Dashboard against `0.1.29`.
3. The Dashboard's "Permissions" list should show: storage, scripting, sidePanel + 4 host_permissions.