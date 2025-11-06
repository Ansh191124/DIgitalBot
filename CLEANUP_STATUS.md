# 410 Malware Cleanup - Quick Reference

## ✅ What's Been Deployed

1. **middleware.ts** - Automatically returns HTTP 410 for spam URLs
2. **app/not-found.tsx** - Proper 404 page with noindex meta
3. **public/robots.txt** - Blocks WordPress & spam patterns
4. **GOOGLE_SEARCH_CONSOLE_CLEANUP.md** - Full cleanup guide

## 🧪 Testing After Deployment

Wait 2-3 minutes for Vercel to deploy, then test:

```bash
# Test numeric URL (should return 410)
curl -I https://www.digitalbot.ai/79827225389.htm

# Test numeric-only URL (should return 410)
curl -I https://www.digitalbot.ai/94255708

# Test WordPress path (should return 410)
curl -I https://www.digitalbot.ai/wp-admin/

# Test valid page (should return 200)
curl -I https://www.digitalbot.ai/services
```

### Expected Response for Spam URLs:
```
HTTP/2 410
x-robots-tag: noindex, nofollow
cache-control: public, max-age=31536000
```

### If Still Showing 200:
- Check Vercel deployment status: https://vercel.com/[your-project]/deployments
- Clear cache: Redeploy or wait for cache TTL
- Verify middleware.ts is in root directory (not in /app)

## 📋 Next Steps (Do These in Google Search Console)

### Immediate Actions:

1. **Verify Fix is Live**
   - Wait 5-10 minutes for deployment
   - Test URLs above - confirm 410 status
   
2. **Submit Bulk Removal Requests**
   - Go to: https://search.google.com/search-console/removals
   - Remove by prefix patterns:
     ```
     https://www.digitalbot.ai/wp-content/
     https://www.digitalbot.ai/wp-admin/
     https://www.digitalbot.ai/wp-includes/
     https://www.digitalbot.ai/wp-json/
     https://www.digitalbot.ai/administrator/
     ```
   - Each request can remove thousands of URLs

3. **Update Sitemap**
   - Go to: https://search.google.com/search-console/sitemaps
   - Submit: `https://www.digitalbot.ai/sitemap.xml`
   - This tells Google which pages ARE legitimate

4. **Monitor Progress**
   - Check weekly: https://search.google.com/search-console/coverage
   - Look for "Not found (404)" count to decrease
   - 410 pages removed faster than 404 (days vs months)

## 📊 Expected Timeline

| Milestone | Time |
|-----------|------|
| Deployment completes | 2-5 minutes |
| Google discovers 410s | 1-7 days |
| Bulk removal takes effect | 1-3 days |
| 50% cleanup | 2-4 weeks |
| 90% cleanup | 4-8 weeks |
| Full cleanup (172K URLs) | 8-12 weeks |

## 🔍 Monitoring Commands

```bash
# Check how many spam URLs are still cached
curl -s https://www.digitalbot.ai/sitemap.xml | grep -o '<loc>.*</loc>' | wc -l
# Should show ~15-20 (your legitimate pages)

# Verify robots.txt is blocking spam
curl https://www.digitalbot.ai/robots.txt | grep "Disallow.*wp-"

# Test random spam URL
curl -I https://www.digitalbot.ai/$((RANDOM * 1000)).htm
```

## ⚠️ Important Notes

- **Don't panic if count increases temporarily** - Google is discovering old URLs
- **410 is better than 404** - Signals permanent removal (faster cleanup)
- **Be patient** - 172K URLs will take weeks to fully clean
- **Weekly checks are enough** - Don't obsess over daily changes

## 🆘 If Issues Persist After 2 Weeks

1. Verify middleware is deployed:
   ```bash
   curl -I https://www.digitalbot.ai/test123.htm
   # Should show: HTTP/2 410
   ```

2. Check Vercel logs for errors:
   - https://vercel.com/[your-project]/logs

3. Contact support:
   - Google Search Console Help
   - Include: Site URL, 410 response screenshot, removal request IDs

---

**Deployed:** November 6, 2025  
**Status:** ✅ Code pushed to GitHub, awaiting Vercel deployment  
**Next Check:** Test URLs in 5 minutes, then submit GSC removal requests
