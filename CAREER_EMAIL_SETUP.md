# Career Application Email Setup

## Overview

The careers page now sends email notifications to `rajat.saraswat.0409@gmail.com` when someone submits an application. Upon successful submission, users see the message: "Email sent successfully, we'll get back to you shortly"

## Setup Instructions

### 1. Generate a Gmail App Password

Since we're using Gmail's SMTP service, you need to create an App Password:

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Enable **2-Step Verification** if not already enabled
4. Scroll down to **App passwords** (under "2-Step Verification")
5. Click on **App passwords**
6. Select:
   - App: Mail
   - Device: Other (Custom name) - enter "Ginsei Website"
7. Click **Generate**
8. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

### 2. Add the Password to Environment Variables

1. Open the `.env.local` file in the root directory
2. Replace `your-app-password-here` with your generated app password:
   ```
   EMAIL_PASSWORD=your-16-character-password
   ```
3. Save the file

### 3. Restart the Development Server

```bash
npm run dev
```

## How It Works

1. User fills out the career application form
2. Form validates all required fields
3. On submit, data is sent to `/api/careers` endpoint
4. Server uses nodemailer to send email via Gmail SMTP
5. Success message displays: "Email sent successfully, we'll get back to you shortly"
6. Modal closes automatically after 3 seconds

## Email Contents

The email will include:

- Full Name
- Email Address
- College Name
- Role (Designer/Developer)
- Important Links (optional)
- Resume filename

## Troubleshooting

### Email not sending?

- Verify the `EMAIL_PASSWORD` in `.env.local` is correct
- Make sure 2-Step Verification is enabled on your Google account
- Check the console for error messages
- Ensure the app password hasn't been revoked

### Still having issues?

- Check that nodemailer is installed: `npm list nodemailer`
- Restart the dev server after changing `.env.local`
- Look at the terminal output for specific error messages

## Alternative Email Services

If you prefer not to use Gmail or need more reliability, consider:

1. **Resend** (recommended for production): https://resend.com
2. **SendGrid**: https://sendgrid.com
3. **Mailgun**: https://www.mailgun.com
4. **AWS SES**: https://aws.amazon.com/ses/

These services provide better deliverability and don't require app passwords.
