# 🚀 Quick Start: Google Search Console Setup

## ⚡ 5-Minute Setup Process

### 1️⃣ Get Your Verification Code (2 minutes)
1. Go to: https://search.google.com/search-console
2. Sign in with Google
3. Click "Add Property" → Select "URL prefix"
4. Enter: `https://digitalbot.ai`
5. Choose "HTML tag" verification method
6. Copy the code between quotes:
   ```
   <meta name="google-site-verification" content="COPY_THIS_CODE" />
   ```

### 2️⃣ Update Your Code (1 minute)
1. Open: `app/layout.tsx`
2. Find line 47: `google: "your-google-verification-code",`
3. Replace with your actual code
4. Save the file

### 3️⃣ Deploy (2 minutes)
```bash
git add app/layout.tsx
git commit -m "feat: Add Google Search Console verification"
git push origin master
```

Wait 1-2 minutes for deployment, then click "Verify" in Google Search Console.

---

## 📊 What's Already Done For You

✅ **Sitemap Created**: `public/sitemap.xml`
- All 12 pages included
- Proper priorities set
- Ready to submit

✅ **Robots.txt Added**: `public/robots.txt`
- Allows search engines
- Protects private areas
- References sitemap

✅ **SEO Metadata**: Already optimized in `app/layout.tsx`
- Title tags
- Meta descriptions
- Open Graph tags
- JSON-LD structured data

---

## 🎯 After Verification

### Submit Sitemap (30 seconds)
1. In GSC, go to "Sitemaps"
2. Add: `https://digitalbot.ai/sitemap.xml`
3. Click "Submit"

### Request Indexing (1 minute)
1. Go to "URL Inspection"
2. Enter: `https://digitalbot.ai`
3. Click "Request Indexing"

---

## 📈 Monitor Your Rankings

Check these in Google Search Console:
- **Performance** → See clicks and impressions for "AI Voice Agent"
- **Coverage** → Ensure all pages are indexed
- **Enhancements** → Monitor Core Web Vitals

---

## 🆘 Troubleshooting

**Verification Failed?**
- Wait 2-3 minutes after deployment
- Check that code is correct (no extra spaces)
- Try again

**Need the full guide?**
Read: `GOOGLE_SEARCH_CONSOLE_SETUP.md` in your repo

---

## ✅ Checklist

- [ ] Get verification code from Google
- [ ] Update `app/layout.tsx` line 47
- [ ] Commit and push changes
- [ ] Wait for deployment
- [ ] Click "Verify" in GSC
- [ ] Submit sitemap
- [ ] Request homepage indexing

**You're all set! Your AI Voice Agent SEO will be tracked in ~24 hours.** 🎉
