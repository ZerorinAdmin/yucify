# AI Call Analytics SaaS Landing Page (Community)

This is a code bundle for AI Call Analytics SaaS Landing Page (Community). The original project is available at https://www.figma.com/design/QA27uy1SxbRwLiZ4wF7udB/AI-Call-Analytics-SaaS-Landing-Page--Community-.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Waitlist / Google Sheets Integration

The "Join Early Access" modal saves email signups to Google Sheets via Google Apps Script. Ensure your Apps Script has a `doPost` function like:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.email, new Date()]);
  return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
}
```

Set `VITE_APPS_SCRIPT_URL` in `.env` to your Apps Script web app deployment URL.