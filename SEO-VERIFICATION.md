# SEO Verification Checklist

## Quick Verification Steps

### 1. Check Sitemap (✓ WORKING)
Visit: http://localhost:3000/sitemap.xml
Should show XML with all pages:
- Homepage: /
- About: /about
- Resume: /resume
- Case Studies: /case-study/fifa, /case-study/rov, /case-study/solace, /case-study/ubs, /case-study/looma, /case-study/porsche

### 2. Check Robots.txt
Visit: http://localhost:3000/robots.txt
Should include: `Sitemap: https://kavyaray.com/sitemap.xml`

### 3. Verify Metadata on Each Page
Open browser DevTools → Elements → Check `<head>` section for:
- `<meta property="og:title" />`
- `<meta property="og:description" />`
- `<meta property="og:url" />`
- `<meta property="og:type" />`
- `<meta name="twitter:card" content="summary_large_image" />`
- `<link rel="canonical" />`

### 4. Verify Structured Data (Homepage)
View source on homepage and search for:
- `<script type="application/ld+json">` (should appear twice)
- Should contain Person schema
- Should contain WebSite schema

### 5. Test Build
```bash
npm run build
```
Should complete without errors.

### 6. Before Deploying
1. Create `.env.local` file with:
   ```
   NEXT_PUBLIC_GA_ID=your-actual-ga-id
   ```
2. Update Google verification in `app/layout.tsx`

### 7. After Deploying
- Submit sitemap to Google Search Console
- Test social previews on Facebook, Twitter, LinkedIn
- Run Lighthouse audit
- Verify Analytics tracking

## Tools to Use

**Lighthouse:**
```bash
npx lighthouse https://kavyaray.com --only-categories=seo --view
```

**Test Structured Data:**
https://validator.schema.org/

**Test Open Graph:**
https://developers.facebook.com/tools/debug/

**Page Speed:**
https://pagespeed.web.dev/
