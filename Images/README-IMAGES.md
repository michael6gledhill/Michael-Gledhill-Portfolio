# Images Guide

This directory contains all images used in your CAP Portfolio website.

## Directory Structure

```
images/
├── README-IMAGES.md (this file)
├── hero-image.jpg (your profile/squadron background image)
├── about-image.jpg (optional: additional about section image)
│
├── wing-logo.png (your wing insignia)
├── squadron-logo.png (your squadron insignia)
├── cap-crest.png (official CAP crest)
│
└── gallery/ (optional: for portfolio gallery photos)
    ├── photo-1.jpg
    ├── photo-2.jpg
    └── ...more photos
```

---

## Logo Section Images

The logo section displays three organizational logos at the top of your portfolio website. This section helps visitors immediately identify your organizational affiliation.

### Wing Logo ✓ CONFIGURED
- **File:** `kentucky-wing-logo.png`
- **Dimensions:** ~150px × 150px (scales responsively)
- **Format:** PNG with transparent background
- **Description:** Kentucky Wing official insignia
- **Source:** Civil Air Patrol - Kentucky Wing

### Squadron Logo ✓ CONFIGURED
- **File:** `hartland-composite-squadron.png`
- **Dimensions:** ~150px × 150px (scales responsively)
- **Format:** PNG with transparent background
- **Description:** Hartland Composite Squadron official patch
- **Source:** Civil Air Patrol - Hartland Composite Squadron

### CAP Crest (Official) ✓ CONFIGURED
- **File:** `cap-crest-official.png`
- **Dimensions:** ~180px × 180px (center logo is prominently displayed)
- **Format:** PNG with transparent background
- **Description:** Official Civil Air Patrol organizational crest
- **Official Source:** 
  - Civil Air Patrol Brand Guidelines: https://civilairpatrol.frontify.com/d/crhrf1Aw1Ci9
  - CAP Public Website: https://www.gocivilairpatrol.com
  - Contact: CAP National Headquarters (Public Affairs)

**Status:** All official logos are now integrated and configured!

---

## Hero Section Image

### Background Image
- **File:** `hero-image.jpg` (or `hero-image.png`)
- **Dimensions:** 
  - Minimum: 1200px wide × 600px tall
  - Recommended: 1600px wide × 900px tall (16:9 aspect ratio)
- **Format:** JPG for photos (better compression) or PNG for graphics
- **Description:** Your background image for the hero section
- **Suggestions:**
  - Professional squadron/unit photo
  - Aerospace-related imagery (aircraft, sky, training)
  - Leadership or cadet group photo
  - CAP activity in action (search and rescue, training, etc.)

**Tips:**
- Image will be overlaid with a semi-transparent dark overlay
- Make sure text is readable over your chosen image
- Use high-resolution images for better quality
- Consider vertical composition for mobile devices

---

## Gallery Images (Optional)

### Portfolio Gallery Photos
- **Location:** `images/gallery/` (create if needed)
- **File Format:** `photo-1.jpg`, `photo-2.jpg`, etc.
- **Dimensions:** 
  - Minimum: 800px × 600px
  - Recommended: 1200px × 900px
- **Format:** JPG (recommended for photos)
- **Max File Size:** 300-500 KB per image (for performance)

**Gallery Usage:**
- Display your accomplishments, training, events
- Include photos from encampments, competitions, service projects
- Show leadership in action
- Demonstrate CAP involvement

**Tips:**
- Gallery will display as a responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile)
- Clicking gallery images opens a lightbox modal
- All images should be in landscape orientation for best presentation
- Use descriptive captions in `profile.json` for each gallery image

---

## About Section Image (Optional)

### Additional About Image
- **File:** `about-image.jpg`
- **Dimensions:** 400px × 400px to 500px × 500px (square preferred)
- **Format:** JPG or PNG
- **Description:** Optional professional photo for about section
- **Suggestion:** Professional headshot or leadership portrait

---

## File Organization Best Practices

1. **Name Clearly:** Use descriptive names (`wing-logo.png` not `logo1.png`)
2. **Optimize Size:** Compress images without losing quality
3. **Use Consistent Formats:** 
   - Photos → JPG
   - Logos/Graphics → PNG (for transparency)
4. **Responsive Sizing:** Images scale automatically; use descriptive width/height ratios
5. **Keep It Organized:** Group related images in subdirectories (e.g., `gallery/`)

---

## How to Add/Update Images

### 1. Replace Placeholder Logos
1. Delete `wing-logo-placeholder.png`, `squadron-logo-placeholder.png`, `cap-crest-placeholder.png`
2. Add your actual logo files:
   - `wing-logo.png`
   - `squadron-logo.png`
   - `cap-crest.png`
3. Update `data/profile.json`:
   ```json
   "logos": {
     "wingLogo": "images/wing-logo.png",
     "squadronLogo": "images/squadron-logo.png",
     "capCrest": "images/cap-crest.png"
   }
   ```

### 2. Add Hero Image
1. Place your image in `images/` directory
2. Update `index.html` background image (search for `hero` section style)
   OR update via CSS in `css/styles.css`
3. Recommend: Name it `hero-image.jpg` for consistency

### 3. Add Gallery Images
1. Create `images/gallery/` folder if it doesn't exist
2. Add your photos as `photo-1.jpg`, `photo-2.jpg`, etc.
3. Update `data/profile.json` with gallery entries:
   ```json
   "gallery": [
     {
       "src": "images/gallery/photo-1.jpg",
       "caption": "Leadership Training Exercise"
     }
   ]
   ```

---

## Image Optimization Tools

For better performance, optimize images before uploading:

- **Online Tools:**
  - TinyPNG: https://tinypng.com (great for JPG/PNG)
  - ImageOptim: https://imageoptim.com (Mac)
  - FileOptimizer: http://nikkhokkho.sourceforge.net/ (Windows)

- **Recommended Settings:**
  - Logos/Graphics (PNG): 50-150 KB
  - Photos (JPG): 50-200 KB per image
  - Hero image: 100-300 KB

---

## CAP Brand Guidelines Reference

For official guidance on CAP logos and branding:

- **Main Resource:** https://civilairpatrol.frontify.com/d/crhrf1Aw1Ci9/brand-guide-logos
- **CAP National Website:** https://www.gocivilairpatrol.com
- **Permission & Usage:** Contact CAP Public Affairs for logo usage guidelines

---

## Troubleshooting

**Images Not Showing?**
- Check file path in `data/profile.json` matches actual file names
- Ensure file extensions are correct (`.jpg`, `.png`, not `.JPG`, `.PNG`)
- Verify images are in the `images/` directory
- Open browser console (F12) to check for 404 errors

**Images Look Blurry?**
- Replace with higher resolution versions
- Ensure image dimensions match recommendations
- Check browser zoom level (should be 100%)

**Logos Look Stretched?**
- Verify image aspect ratio is correct
- CSS constrains aspect ratio; images should not be distorted
- Re-save logo with correct proportions

**Performance Issues?**
- Reduce image file sizes using optimization tools
- Limit gallery to 8-12 images maximum
- Use JPG format for photographs, PNG for logos

---

## Image Checklist

- [ ] Wing logo (150×150px PNG)
- [ ] Squadron logo (150×150px PNG)
- [ ] CAP crest (180×180px PNG) - official version
- [ ] Hero background image (1600×900px JPG)
- [ ] Gallery photos (800×600px+ JPG) - optional
- [ ] About section image (400-500px square) - optional
- [ ] All image paths updated in `profile.json`
- [ ] No placeholder images remaining in production
- [ ] All file sizes optimized

---

## Next Steps

1. **Obtain Your Logos:**
   - Contact Wing/Squadron for official logos
   - Download official CAP crest from brand guidelines
   
2. **Add Images:**
   - Replace placeholders with actual files
   - Update file paths in `profile.json`
   
3. **Test:**
   - View on desktop, tablet, and mobile
   - Ensure logos display correctly
   - Verify image quality and alignment

4. **Deploy:**
   - Commit image files to Git
   - Push to GitHub
   - Verify images display on GitHub Pages

---

**Questions?** Refer to the main [README.md](../README.md) or [CUSTOMIZATION-GUIDE.md](../docs/CUSTOMIZATION-GUIDE.md) for more help.
