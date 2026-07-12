# Manifest Permissions Disclosure — v0.1.29

When filling the Dashboard's "Permissions" tab, copy the "Justification" column for each entry. Source: `package.json` → `manifest.*` blocks.

## host_permissions

| URL pattern | Justification (English) |
| --- | --- |
| `https://vacations.ctrip.com/*` | Core feature: the extension injects UI on the Ctrip vacations detail/edit pages to automate product creation, copy daily titles, and read product data. |
| `https://vbooking.ctrip.com/*` | Core feature: the extension injects UI on the Ctrip vendor booking pages to support product creation, payment-spot copy, hotel info copy, and order-side operations. |
| `https://online.ctrip.com/*` | Account info lookup: the extension reads the operator's Ctrip online-session account configuration to know which account is active. |
| `https://www.atdtour.com/*` | Backend API: the extension calls the operator's own backend (https://www.atdtour.com) for login authentication and batch audit reporting on product-transfer operations. |

## permissions

| Permission | Justification (English) |
| --- | --- |
| `storage` | Store the authentication token returned by the backend and minor user preferences locally via `chrome.storage.local`. |
| `scripting` | (auto-added by Plasmo MV3) required to inject content scripts declaratively into matched pages. |
| `sidePanel` | (auto-added by Plasmo MV3) required to open the extension's side panel UI on user action. |

## web_accessible_resources

| Resource | Justification (English) |
| --- | --- |
| `assets/products_export_20260224_0941.csv` | Pre-bundled CSV used by the ExportTab feature to actively download exported product data when the user clicks the export button. |

## Note on dev-only placeholders

`$EXTENSION_DEV_HOST_LOCALHOST` and `$EXTENSION_DEV_HOST_LOOPBACK` are referenced in the source `package.json` but are NOT present in the production-built `manifest.json`. Plasmo strips them during `plasmo build` because no values are defined for them in the production environment. No disclosure is needed for them.