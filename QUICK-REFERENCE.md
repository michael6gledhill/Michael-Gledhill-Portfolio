# CAP Portfolio - Quick Reference Card

## 🚀 30-Second Setup

1. Edit `data/profile.json` - Change name, rank, bio
2. Add images to `images/` folder
3. Push to GitHub: `git add . && git commit -m "Setup" && git push`
4. Enable Pages in Settings → Pages → Deploy from main
5. Visit: `https://YOUR-USERNAME.github.io/Michael-Gledhill-Portfolio/`

---

## 📋 What to Edit

### Must Edit
- [ ] `data/profile.json` - Your profile data
- [ ] `images/hero-placeholder.jpg` - Your main photo
- [ ] `images/about-placeholder.jpg` - Your portrait
- [ ] `images/gallery-*.jpg` - 8 activity photos

### Should Edit
- [ ] `index.html` - Change logo text "CAP Portfolio" to your unit name
- [ ] `css/styles.css` - Customize color scheme (optional)

### Don't Need to Edit
- `js/main.js` - Automatically uses your profile data
- `js/ai-assistant.js` - Works with your data
- `css/styles.css` - Works as-is unless customizing colors

---

## 📝 profile.json Fields

```json
{
  "name": "Your Name",
  "rank": "Cadet Colonel",
  "unit": "Squadron 42",
  "missionStatement": "Your leadership quote",
  "bio": "Your biography (100-150 words)",
  "capInvolvement": "Your CAP history (50-100 words)",
  
  "experience": [
    { "date": "YYYY", "title": "Position", "description": "Details" }
  ],
  
  "awards": [
    { "icon": "🏆", "title": "Award", "date": "YYYY", "description": "Details" }
  ],
  
  "activities": [
    { "type": "Encampment", "title": "Activity", "date": "Month YYYY", "description": "Details" }
  ],
  
  "gallery": [
    { "src": "images/gallery-1.jpg", "caption": "Photo Description" }
  ],
  
  "skills": {
    "leadership": ["Skill1", "Skill2"],
    "technical": ["Skill1", "Skill2"]
  }
}
```

---

## 🖼️ Image Files Needed

| File | Size | Type |
|------|------|------|
| `hero-placeholder.jpg` | 1920x1080 | JPEG |
| `about-placeholder.jpg` | 600x600 | JPEG |
| `gallery-1.jpg` to `gallery-8.jpg` | 800x600 | JPEG |

**Total Images**: 10 files
**Total Size**: ~1-2 MB (compressed)

---

## 🎨 Color Customization

Edit `css/styles.css` (lines 10-20):

```css
--primary-color: #0052cc;       /* Blue */
--secondary-color: #ff6b35;     /* Orange */
--accent-gold: #ffd700;         /* Gold */
```

**Quick Presets**:
- Military: `#1a3a52` + `#d4a574`
- Aerospace: `#003d7a` + `#00a8e8`
- Patriotic: `#1e40af` + `#dc2626`

---

## ✅ Validation Checklist

Before deploying:

- [ ] JSON valid (https://jsonlint.com/)
- [ ] All images in `images/` folder
- [ ] All filenames match JSON paths (case-sensitive)
- [ ] Image files are `.jpg` (not `.JPG` or `.jpeg`)
- [ ] Profile name/rank are correct
- [ ] All text is proofread
- [ ] No placeholder text remains

---

## 🐛 Troubleshooting Quick Fixes

| Issue | Fix |
|-------|-----|
| Images don't show | Check filename in JSON, hard refresh (Ctrl+Shift+R) |
| Profile data missing | Validate JSON at JSONLint.com |
| Site not live | Enable Pages in Settings |
| Changes not visible | Wait 2 min, hard refresh |
| Layout broken | Hard refresh (Ctrl+Shift+R) |
| Gallery broken | Check image paths in JSON |

---

## 📦 File Structure

```
Portfolio/
├── index.html                 ← Main page
├── css/styles.css            ← All styling
├── js/main.js                ← Page logic
├── js/ai-assistant.js        ← Q&A system
├── data/profile.json         ← ⭐ EDIT THIS
├── images/
│   ├── hero-placeholder.jpg  ← Add your hero
│   ├── about-placeholder.jpg ← Add your photo
│   └── gallery-*.jpg         ← Add 8 photos
├── README.md                 ← Full guide
├── CUSTOMIZATION-GUIDE.md    ← Detailed guide
└── DEPLOYMENT.md             ← GitHub Pages guide
```

---

## 🚀 GitHub Deployment Commands

```bash
# Check status
git status

# Stage all changes
git add .

# Commit changes
git commit -m "Update portfolio with my info"

# Push to GitHub
git push origin main

# ✓ Site will deploy automatically!
```

---

## 🔗 Important Links

- **Your Site**: https://YOUR-USERNAME.github.io/Michael-Gledhill-Portfolio/
- **GitHub Settings**: https://github.com/YOUR-USERNAME/Michael-Gledhill-Portfolio/settings
- **GitHub Pages**: https://github.com/YOUR-USERNAME/Michael-Gledhill-Portfolio/settings/pages
- **Test JSON**: https://jsonlint.com/
- **Compress Images**: https://tinypng.com/
- **Color Palette**: https://coolors.co/

---

## 📞 Getting Help

1. **Full Documentation**: See `README.md`
2. **Customization Details**: See `CUSTOMIZATION-GUIDE.md`
3. **Deployment Help**: See `DEPLOYMENT.md`
4. **Image Setup**: See `images/README-IMAGES.md`

---

## ⚡ Pro Tips

1. **Compress images** before uploading (TinyPNG)
2. **Use descriptive captions** in gallery
3. **Keep bios concise** (100-150 words max)
4. **Include 5-8 awards** for best presentation
5. **Mix photo types** (formal + candid)
6. **Test on mobile** before sharing
7. **Update regularly** - Keep content fresh!

---

## 🎯 Success Checklist

- [ ] Portfolio deployed on GitHub Pages
- [ ] All images displaying correctly
- [ ] AI assistant responding to questions
- [ ] Gallery modal opening with keyboard nav
- [ ] Mobile layout responsive
- [ ] All sections have content
- [ ] No broken links
- [ ] Shared with others!

---

**You've got this! Your CAP portfolio is ready to showcase your leadership.** ✈️

For detailed help, see the full README.md
