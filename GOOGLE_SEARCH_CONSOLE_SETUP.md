# Google Search Console Setup Guide

## 📋 Complete Setup Instructions for DigitalBot.ai

### Step 1: Access Google Search Console

1. Go to: https://search.google.com/search-console
2. Sign in with your Google account
3. Click **"Add Property"** or **"Start now"**

---

### Step 2: Add Your Property

1. Select **"URL prefix"** property type
2. Enter your website URL: `https://digitalbot.ai`
3. Click **"Continue"**

---

### Step 3: Verify Ownership (HTML Meta Tag Method)

#### Google will provide a verification tag like this:
```html
<meta name="google-site-verification" content="abcdefgh1234567890EXAMPLE" />
```

#### Copy ONLY the content value (the long code after `content=`)

Example: If Google gives you:
```html
<meta name="google-site-verification" content="Xj7K_abc123xyz789DEF456" />
```

Copy only: `Xj7K_abc123xyz789DEF456`

---

### Step 4: Update Your Code

1. Open `app/layout.tsx`
2. Find this line (around line 47):
   ```typescript
   verification: {
     google: "your-google-verification-code",
   },
   ```

3. Replace `"your-google-verification-code"` with your actual code:
   ```typescript
   verification: {
     google: "Xj7K_abc123xyz789DEF456",  // Your actual code here
   },
   ```

---

### Step 5: Deploy and Verify

1. **Save the file**
2. **Commit and push to GitHub:**
   ```bash
   git add app/layout.tsx
   git commit -m "feat: Add Google Search Console verification code"
   git push origin master
   ```

3. **Deploy to production** (if using Vercel/Netlify, push triggers auto-deploy)

4. **Wait 1-2 minutes** for deployment to complete

5. **Return to Google Search Console** and click **"Verify"**

---

### Step 6: Submit Sitemap

Once verified, submit your sitemap to help Google index your pages faster:

1. In Google Search Console, go to **"Sitemaps"** (left sidebar)
2. Add sitemap URL: `https://digitalbot.ai/sitemap.xml`
3. Click **"Submit"**

---

### Step 7: Request Indexing for Key Pages

For immediate indexing of important pages:

1. Go to **"URL Inspection"** in the left sidebar
2. Enter URL: `https://digitalbot.ai`
3. Click **"Request Indexing"**
4. Repeat for other important pages:
   - `https://digitalbot.ai/about`
   - `https://digitalbot.ai/pricing`
   - `https://digitalbot.ai/services`

---

## 🎯 Important Pages to Index

Create this file: `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://digitalbot.ai/</loc>
    <lastmod>2025-10-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://digitalbot.ai/about</loc>
    <lastmod>2025-10-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://digitalbot.ai/services</loc>
    <lastmod>2025-10-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://digitalbot.ai/pricing</loc>
    <lastmod>2025-10-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://digitalbot.ai/contact</loc>
    <lastmod>2025-10-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

## 📊 Post-Setup Monitoring

### Week 1: Initial Setup
- ✅ Verify property ownership
- ✅ Submit sitemap
- ✅ Request indexing for homepage
- ✅ Check for crawl errors

### Week 2-4: Monitoring
- 📈 Track impressions and clicks
- 🔍 Monitor keyword rankings for "AI Voice Agent"
- 🔧 Fix any crawl errors
- 📱 Check mobile usability

### Monthly Tasks
- 📊 Review Search Performance report
- 🎯 Analyze top-performing queries
- 🔗 Check external links
- 🚀 Submit new content for indexing

---

## 🛠️ Troubleshooting

### Verification Failed?
1. Clear your browser cache
2. Wait 1-2 minutes after deployment
3. Check that the meta tag is in the `<head>` section
4. Try the DNS verification method instead

### Pages Not Indexing?
1. Check `robots.txt` is not blocking Google
2. Ensure pages are linked from the homepage
3. Submit URLs manually via URL Inspection tool
4. Check for crawl errors in Coverage report

---

## 📞 Need Help?

If you encounter issues:
1. Check Google Search Console Help: https://support.google.com/webmasters
2. Verify your meta tag is correct
3. Ensure your site is live and accessible
4. Wait 24-48 hours for Google to process

---

## ✅ Quick Checklist

- [ ] Google Search Console account created
- [ ] Property added (https://digitalbot.ai)
- [ ] Verification code obtained from Google
- [ ] Code added to `app/layout.tsx`
- [ ] Changes committed and pushed to GitHub
- [ ] Site deployed to production
- [ ] Ownership verified in GSC
- [ ] Sitemap created and submitted
- [ ] Homepage indexed
- [ ] Performance monitoring set up

---

**Once setup is complete, your AI Voice Agent optimizations will be tracked and visible in Google Search!** 🎉
