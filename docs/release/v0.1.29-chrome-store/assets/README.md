# Store Asset Specifications

Drop the actual image files into this directory. They are ignored by git (see `.gitignore`) — you keep them locally, and the upload to Chrome Web Store happens via the Dashboard, not via git.

## Required

| File | Size | Format | Notes |
| --- | --- | --- | --- |
| `icon-128.png` | 128×128 | PNG, no transparency | Store icon. If you only have `assets/icon.png` (512×512), downscale. |
| `screenshot-1.png` | 1280×800 or 640×400 | PNG or JPEG | First screenshot. |
| `screenshot-2.png` | 1280×800 or 640×400 | PNG or JPEG | Second screenshot. |
| `screenshot-3.png` | 1280×800 or 640×400 | PNG or JPEG | Third screenshot. CWS allows up to 5; 3 is the minimum recommended. |

## Optional

| File | Size | Notes |
| --- | --- | --- |
| `promo-small.png` | 440×280 | Small promotional tile. |
| `marquee.png` | 1400×560 | Featured promotional marquee (requires special CWS promotion approval). |

## Tips

- Show the extension's main features in action (popup, sidepanel, in-page UI).
- Avoid screenshotting sensitive customer data; use test accounts.
- Keep file sizes reasonable (< 1 MB each) — CWS accepts up to a few MB but smaller loads faster in the listing.
