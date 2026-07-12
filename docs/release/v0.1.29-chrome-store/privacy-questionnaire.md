# Chrome Web Store Data Usage Questionnaire — v0.1.29

Chrome Web Store requires every extension to disclose data practices. Fill the Dashboard's "Privacy practices" → "Data usage" questionnaire using the answers below.

## Single-purpose check

The extension's single purpose is: **help travel-agency operators manage Ctrip tour products (create, edit, transfer, batch car-resource setup) via in-page automation.**

All features serve this single purpose. ✓

## Data types

| Question | Answer | Reason |
| --- | --- | --- |
| Personally identifiable info (PII) | **Yes** | Login returns a user-id-bearing token stored locally. |
| Health info | No | |
| Financial or payment info | No | |
| Authentication info | **Yes** | Token from backend login, stored in `chrome.storage.local`. |
| Personal communications | No | |
| Location | No | |
| Web history | No | |
| Website content (user activity) | **Yes** | DOM read on Ctrip and atdtour.com pages for in-page features. |

## Handling

| Question | Answer |
| --- | --- |
| Data sold to third parties | No |
| Data transferred to third parties | No |
| Data used for purposes unrelated to the extension's single purpose | No |

## Privacy policy URL

Use the raw GitHub URL for `PRIVACY.md` on the branch you'll publish from. If the publish branch is `product`:

```
https://raw.githubusercontent.com/ansike/tour-chrome-extension/product/PRIVACY.md
```

(If you publish from a different branch or fork, replace `ansike/tour-chrome-extension` and `product` accordingly.)
