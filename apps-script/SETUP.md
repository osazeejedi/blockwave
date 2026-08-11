# Blockwave Apply — Google Sheet + Apps Script Setup

Follow these steps once to connect the `/apply` form to your Google Sheet.

---

## Step 1 — Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Name it **"Blockwave Applications"** (or anything you like)
3. In **Row 1**, add these exact column headers (A → L):

| A | B | C | D | E | F | G | H | I | J | K | L |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Programme | First Name | Last Name | Email | Phone | Current Role | Experience Level | LinkedIn | Why This Programme | Goals | How Did You Hear |

> **Tip:** The Apps Script will auto-create the sheet tab named "Applications" with styled headers if it doesn't exist — so you can also skip this step and let it create it on the first submission.

---

## Step 2 — Add the Apps Script

1. From your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code in the editor
3. Copy the full contents of `apps-script/apply-handler.gs` and paste it in
4. Click **Save** (Ctrl/Cmd + S)

---

## Step 3 — Deploy as a Web App

1. Click **Deploy → New Deployment**
2. Click the gear icon ⚙ next to "Type" and select **Web App**
3. Set:
   - **Description:** Blockwave Apply Handler
   - **Execute as:** Me *(your Google account)*
   - **Who has access:** Anyone
4. Click **Deploy**
5. **Authorize** the permissions when prompted (the script needs access to Sheets and Gmail)
6. Copy the **Web App URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

---

## Step 4 — Add the URL to your environment

Open `.env.local` in the project root and paste in your URL:

```env
APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
```

Restart your dev server (`npm run dev`) after saving.

---

## Step 5 — Test it

1. Go to `http://localhost:3000/apply`
2. Fill in the form and submit
3. Check your Google Sheet — a new row should appear under the "Applications" tab
4. Check your Gmail — you should receive a notification email

---

## Re-deploying after changes

If you ever edit the Apps Script code:
1. Click **Deploy → Manage Deployments**
2. Click the pencil ✏ icon next to your deployment
3. Change Version to **"New Version"**
4. Click **Deploy**

> ⚠️ The Web App URL stays the same — you don't need to update `.env.local` again.

---

## Email Notifications

Emails are sent automatically to the Google account that owns the sheet (the account you used to deploy the script), using `MailApp.sendEmail()`. No SMTP setup required.

Each email includes:
- Applicant name, email, phone
- Programme applied for
- Experience level & current role
- LinkedIn URL
- Full "Why" and "Goals" responses
- Direct link to the Google Sheet

---

---

# Blockwave Contact — Google Sheet + Apps Script Setup

Follow these steps to connect the `/contact` form to the **same** Google Sheet (as a new "Contacts" tab).

---

## Step 1 — Add the Contact Handler Script

1. Open your existing **Blockwave Applications** Google Sheet
2. Go to **Extensions → Apps Script**
3. Click the **+** icon next to "Files" to create a **new script file**
4. Name it `contact-handler`
5. Delete any placeholder code in the new file
6. Copy the full contents of `apps-script/contact-handler.gs` and paste it in
7. Click **Save** (Ctrl/Cmd + S)

---

## Step 2 — Deploy as a New Web App

1. Click **Deploy → New Deployment**
2. Click the gear icon ⚙ next to "Type" and select **Web App**
3. Set:
   - **Description:** Blockwave Contact Handler
   - **Execute as:** Me *(your Google account)*
   - **Who has access:** Anyone
4. Click **Deploy**
5. **Authorize** the permissions when prompted
6. Copy the **Web App URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

> ⚠️ This is a **different URL** from the Apply handler — make sure to copy the new one.

---

## Step 3 — Add the URL to your environment

Open `.env.local` in the project root and paste the URL as `CONTACT_SCRIPT_URL`:

```env
CONTACT_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
```

Restart your dev server (`npm run dev`) after saving.

---

## Step 4 — Test it

1. Go to `http://localhost:3000/contact`
2. Fill in the form and click **Send Enquiry**
3. Check your Google Sheet — a new **"Contacts"** tab should appear with the entry
4. Check your Gmail — you should receive a notification email with the full enquiry details

---

## Contact Sheet Columns

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Inquiry Type | First Name | Last Name | Email | Phone | Company | Role | Subject | Message | How Did You Hear |

> **Tip:** The Apps Script auto-creates the "Contacts" tab with styled headers on the first submission.
