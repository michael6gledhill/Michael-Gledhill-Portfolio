# Image Placeholder Guide

This directory should contain your portfolio images. Here's what you need:

## Required Images

### 1. Hero Image (`hero-placeholder.jpg`)
- **Purpose**: Full-width background image in hero section
- **Recommended Size**: 1920x1080px (16:9 ratio)
- **Suggested Content**: 
  - Professional squadron formation photo
  - Leadership event or ceremony
  - Cadet parade or color guard
  - Aviation/aerospace themed image
- **Tips**: 
  - Ensure high quality and professional appearance
  - Use images where you're visible if possible
  - Dark images work better (overlay text is more readable)

### 2. About Section Image (`about-placeholder.jpg`)
- **Purpose**: Profile image in about section
- **Recommended Size**: 600x600px (1:1 ratio, square)
- **Suggested Content**:
  - Professional portrait
  - You in uniform
  - Leadership position photo
- **Tips**:
  - Should be a clear, professional photo of you
  - Appropriate for military/professional setting
  - Good contrast and lighting

### 3. Gallery Images (`gallery-1.jpg` through `gallery-8.jpg`)
- **Purpose**: Photo grid showcasing CAP activities
- **Recommended Size**: 800x600px to 1200x900px
- **Suggested Content**:
  - Squadron formation photos
  - Leadership events or ceremonies
  - Team training exercises
  - Summer encampment moments
  - Drill competitions
  - Community service activities
  - Orientation flights
  - Cadet debrief or instruction
- **Tips**:
  - Mix candid shots with formal photos
  - Show variety of CAP activities
  - Ensure at least 2-3 photos show leadership
  - Use consistent style/tone

## How to Add Your Images

1. **Prepare Your Images**
   - Resize to recommended dimensions
   - Compress for web (use TinyPNG.com or similar)
   - Save as JPEG (.jpg) for photos
   - Use PNG only for graphics/logos

2. **Place Files in This Directory**
   - Copy images to `images/` folder
   - Name them exactly as specified (case-sensitive on Linux):
     - `hero-placeholder.jpg`
     - `about-placeholder.jpg`
     - `gallery-1.jpg`, `gallery-2.jpg`, etc.

3. **Update Profile Data**
   - If using different filenames, update `data/profile.json`
   - In gallery array, update `src` field:
     ```json
     "gallery": [
       {
         "src": "images/gallery-1.jpg",
         "caption": "My Caption Here"
       }
     ]
     ```

## Image Best Practices

### Optimization
- Aim for 100-200KB per image maximum
- Use compression tools:
  - TinyPNG.com (online)
  - ImageOptim (Mac)
  - FileOptimizer (Windows)
  - ImageMagick (command line)

### Quality
- Use high-resolution originals (3000x2000px+)
- Scale down to web size carefully
- Maintain aspect ratios
- Ensure all text is readable

### Accessibility
- Always provide descriptive captions
- Alt text should be clear and specific
- Avoid text embedded in images when possible

### Performance
- Modern browsers: JPEG 80-85% quality = excellent
- PNG for images with transparency only
- Consider WebP format for modern browsers (with JPEG fallback)

## Placeholder Behavior

If images are missing:
- `hero-placeholder.jpg` → Shows with blue gradient overlay
- `about-placeholder.jpg` → Shows with placeholder background
- `gallery-*.jpg` → Missing images show in grid (will appear broken)

The website will still be fully functional, but users should replace these as soon as possible for professional appearance.

## Example File Structure

```
images/
├── hero-placeholder.jpg          ← Replace with your hero image
├── about-placeholder.jpg         ← Replace with your profile photo
├── gallery-1.jpg                 ← Squadron formation
├── gallery-2.jpg                 ← Leadership ceremony
├── gallery-3.jpg                 ← Team training
├── gallery-4.jpg                 ← Summer encampment
├── gallery-5.jpg                 ← Drill competition
├── gallery-6.jpg                 ← Community service
├── gallery-7.jpg                 ← Orientation flight
└── gallery-8.jpg                 ← Squadron debrief
```

## Recommended Tools

**Image Compression:**
- TinyPNG.com (free, online)
- ImageOptim (Mac, free)
- PunyPNG (Windows, free)

**Image Editing:**
- Photoshop
- Figma
- Pixlr.com (free, online)
- GIMP (free, desktop)

**Resizing:**
- Canva (free with limits)
- Pixlr (free, online)
- ImageMagick (command line)

**Format Conversion:**
- CloudConvert.com
- Online-Convert.com
- ImageMagick

## Legal/Ethical Considerations

- Ensure you have rights to use all images
- Get permissions from other cadets in photos
- Follow your unit's photo policy
- Respect privacy of other individuals
- Follow military/CAP regulations on photography

---

**Need help?** See the README.md for complete customization guide.
