# GitHub Pages Configuration Guide

This file explains how this portfolio is configured for GitHub Pages deployment.

## Current Configuration

### Deployment Method
- **Static Site**: Pure HTML, CSS, JavaScript (no build step required)
- **Platform**: GitHub Pages
- **Source Branch**: main
- **Source Directory**: / (root)

### Why This Setup?

1. **No Build Process**: Eliminates complexity, faster deployment
2. **Version Control**: Git tracks all changes automatically
3. **Free Hosting**: GitHub Pages is completely free
4. **Security**: Static site means no backend vulnerabilities
5. **Reliability**: GitHub's infrastructure is robust and reliable

## How to Enable GitHub Pages

### Step 1: Ensure You Have Admin Access

- You must own the repository or have admin permissions
- Fork creates a repository you own

### Step 2: Go to Repository Settings

1. On GitHub.com, go to your repository
2. Click the **Settings** tab
3. Scroll left sidebar to **Pages**

### Step 3: Configure Pages Settings

1. **Source**: Select "Deploy from a branch"
2. **Branch**: Select "main"
3. **Folder**: Select "/ (root)"
4. Click **Save**


### Step 4: Wait for Deployment

- GitHub will build and deploy automatically
- Takes 1-2 minutes typically
- Check **Actions** tab to see build status
- Green checkmark = successful deployment

### Step 5: View Your Site

Your site will be available at:
```
https://YOUR-USERNAME.github.io/Michael-Gledhill-Portfolio/
```

Or if you set a custom domain:
```
https://your-custom-domain.com/
```

## Troubleshooting GitHub Pages

### Site Not Appearing

**Problem**: After enabling Pages, site doesn't appear

**Checklist**:
1. ✓ Is Pages enabled in Settings?
2. ✓ Is main branch selected?
3. ✓ Is root (/) selected as source?
4. ✓ Are there any build errors in Actions tab?
5. ✓ Did you wait 2+ minutes?
6. ✓ Have you hard refreshed (Ctrl+Shift+R)?

### Changes Not Updating

**Problem**: Pushed changes don't appear on live site

**Solution**:
1. Check Actions tab - wait for green checkmark
2. Hard refresh (Ctrl+Shift+R)
3. Try incognito window (Ctrl+Shift+N)
4. Clear browser cache

### Build Failures

**Problem**: Red X in Actions tab, "Failed to deploy"

**Common Causes**:
- Invalid file paths (case-sensitive on GitHub)
- Broken JSON in profile.json
- Missing required files
- Invalid HTML/CSS syntax

**Solution**:
1. Check error message in Actions details
2. Fix the issue locally
3. Commit and push again

## File Structure for GitHub Pages

For GitHub Pages to work correctly, ensure:

```
Michael-Gledhill-Portfolio/  (root of repository)
├── index.html               (must be at root level)
├── css/
│   └── styles.css          (CSS must be correct path)
├── js/
│   ├── main.js
│   └── ai-assistant.js
├── data/
│   └── profile.json
├── images/
│   ├── hero-placeholder.jpg
│   ├── about-placeholder.jpg
│   └── gallery-*.jpg
├── README.md
├── CUSTOMIZATION-GUIDE.md
└── .gitignore
```

## Custom Domain Setup (Optional)

### Using a Custom Domain

If you have your own domain (e.g., mycap.com):

1. **Register Domain**: GoDaddy, Namecheap, etc.

2. **Configure DNS**:
   - Point domain to GitHub Pages
   - Add CNAME record: `YOUR-USERNAME.github.io`
   - Or A records: GitHub's IP addresses

3. **Add CNAME File**:
   - Create file `CNAME` in root directory
   - Content: `mycap.com`
   - Commit and push

4. **Enable HTTPS**:
   - After 15-20 minutes, enable HTTPS in Settings → Pages
   - GitHub provides free SSL certificate

### Example CNAME Configuration

```
# File: CNAME (no extension)
mycap.com
```

## Performance Optimization for GitHub Pages

### Automatic Optimizations

GitHub Pages automatically:
- Serves with gzip compression
- Enforces HTTPS
- Caches assets
- Uses CDN

### Manual Optimizations

1. **Image Compression**:
   - Use TinyPNG.com before uploading
   - Target 50-150KB per image

2. **CSS Minification**:
   - Current CSS is ~30KB (already optimized)

3. **JavaScript Optimization**:
   - Current JS is ~25KB (already optimized)

4. **Browser Caching**:
   - GitHub Pages sets cache headers automatically

### Check Performance

1. Visit: https://pagespeed.web.dev/
2. Enter your portfolio URL
3. Check performance metrics
4. Target scores: 90+ for all metrics

## GitHub Pages Limitations

Things that DON'T work with static GitHub Pages:

- ❌ Backend code (Node.js, Python, PHP, etc.)
- ❌ Database queries
- ❌ Server-side authentication
- ❌ Email forms (must use third-party service)
- ❌ Payment processing

Workarounds:
- Use FormSubmit.co for contact forms
- Use Firebase for databases
- Use Auth0 for authentication
- Static content only ✓

## Security Considerations

### What's Secure

✓ HTTPS encryption (automatic)
✓ No backend = no server vulnerabilities
✓ No database = no data breach risk
✓ Static files = predictable, auditable

### What to Protect

- Keep personal email private
- Don't commit API keys to git
- Use GitHub Secrets if needed
- Don't store sensitive data in JavaScript

### Best Practices

1. **Never commit API keys**:
   ```javascript
   // ❌ Don't do this
   const apiKey = "sk-1234567890";
   
   // ✓ Do this (use environment variables in build)
   const apiKey = process.env.API_KEY;
   ```

2. **Use .gitignore** for sensitive files:
   ```
   .env
   .env.local
   secrets.json
   ```

3. **Be mindful of personal data** in portfolio:
   - Phone numbers: ❌ Don't include
   - Email: ✓ OK to include
   - Full address: ❌ Risky
   - Social media: ✓ OK with links

## Monitoring & Maintenance

### GitHub Actions Workflow

GitHub Pages uses GitHub Actions to deploy:

1. **Trigger**: When you push to main branch
2. **Build**: GitHub checks for build errors
3. **Deploy**: Site goes live if build succeeds
4. **Time**: Usually 1-2 minutes

### Monitoring Deployment

1. Go to **Actions** tab in repository
2. See workflow runs
3. Click on run to see details
4. Green ✓ = successful
5. Red ✗ = failed

### Automatic Updates

Every time you push to main:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Site will automatically rebuild and deploy!

## Keeping Your Repository Updated

### Pull Latest Changes

If you forked this template and want updates:

```bash
# Add upstream remote
git remote add upstream https://github.com/michael6gledhill/Michael-Gledhill-Portfolio.git

# Fetch updates
git fetch upstream

# Merge into your main branch
git merge upstream/main

# Push to your repository
git push origin main
```

## Advanced Deployment Options

### Alternative: Deploy to Vercel

Vercel can also host GitHub Pages:
1. Visit vercel.com
2. Connect GitHub repository
3. Deploy (1 click)
4. Automatic deploys on push

### Alternative: Deploy to Netlify

Netlify also hosts static sites:
1. Visit netlify.com
2. Connect GitHub repository
3. Deploy (1 click)
4. Automatic deploys on push

## Troubleshooting Checklist

| Problem | Solution |
|---------|----------|
| Site not live | Check Pages enabled in Settings |
| Images broken | Verify file paths, case-sensitive |
| CSS not loading | Check file path, hard refresh |
| JSON not parsing | Validate with JSONLint.com |
| 404 errors | Check index.html at root |
| Slow loading | Compress images more |
| Changes not appearing | Hard refresh, check Actions |

## References

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

---

**Ready to deploy? Follow the "How to Enable GitHub Pages" section above!** 🚀
