# Grade-hider
This extension only changes how grades are displayed in your own browser for Tecnocampus. It does not access or modify any server data.

Replace numeric grades with "Passed" / "Failed" on Tecnocampus grade pages,
so you can reduce anxiety while still seeing whether you passed.

## How it works
- Runs as a content script on: `https://aulavirtual.tecnocampus.cat/grade/report/user/index.php?id=...`
- Targets `td.column-grade` cells and replaces numeric grades with `Passed` or `Failed`.
- The original grade is stored in `data-original-grade` and is visible as the element `title` on hover.

## Files
- `manifest.json` — extension manifest (MV3)
- `content.js` — content script (logic)
- `icons/` — optional icons for the extension
- `README.md`, `LICENSE` — repo information

## Usage (development)
### Chrome
1. Open `chrome://extensions/` and enable *Developer mode*.
2. Click *Load unpacked* and select this repo folder.

### Firefox
1. Open `about:debugging#/runtime/this-firefox`.
2. Click *Load Temporary Add-on…* and choose `manifest.json`.

## Privacy & Safety
- This extension runs locally in your browser only. It does not transmit data anywhere.
- Do NOT store or commit any credentials or personal tokens in this repo.

