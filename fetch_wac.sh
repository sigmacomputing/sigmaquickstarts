#!/usr/bin/env bash
set -euo pipefail

export PATH="/opt/homebrew/bin:/usr/local/bin:$HOME/.sigcli/bin:$PATH"
export SIGCLI_KEYRING_BACKEND=file

PROFILE="Sigma_QuickStarts"
OUTDIR="wac_exports"

# Accept GUID as argument or prompt interactively
if [ $# -ge 1 ]; then
  WORKBOOK_ID="${1//\"/}"
else
  read -rp "Paste workbook GUID: " WORKBOOK_ID
  WORKBOOK_ID="${WORKBOOK_ID//\"/}"
fi

if [ -z "$WORKBOOK_ID" ]; then
  echo "Error: no workbook GUID provided" >&2
  exit 1
fi

mkdir -p "$OUTDIR"

sigcli -p "$PROFILE" auth status

OUTPUT_FILE="$OUTDIR/${WORKBOOK_ID}.yaml"
echo "Fetching workbook-as-code for: $WORKBOOK_ID"

sigcli -p "$PROFILE" api workbooks spec get \
  --params "{\"workbookId\": \"$WORKBOOK_ID\"}" \
  --yaml \
  > "$OUTPUT_FILE"

echo "Saved to $OUTPUT_FILE"
