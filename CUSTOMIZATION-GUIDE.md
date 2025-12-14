# CAP Portfolio - Customization Guide

This document provides detailed step-by-step instructions for customizing this portfolio template for your specific profile.

## Table of Contents

1. [Quick Start (5 minutes)](#quick-start-5-minutes)
2. [Data Configuration](#data-configuration)
3. [Image Customization](#image-customization)
4. [Styling & Branding](#styling--branding)
5. [Advanced Customization](#advanced-customization)
6. [Testing & Validation](#testing--validation)
7. [Deployment Checklist](#deployment-checklist)

---

## Quick Start (5 minutes)

### Minimum changes required to go live:

1. **Edit `data/profile.json`**
   - Change `name` to your name
   - Change `rank` to your rank
   - Change `unit` to your unit information
   - Fill in `missionStatement` (your leadership quote)

2. **Replace Images**
   - `images/hero-placeholder.jpg` → Your best photo
   - `images/about-placeholder.jpg` → Your portrait
   - `images/gallery-*.jpg` → Your activity photos (8 recommended)

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Settings → Pages → Deploy from branch (main) → Save

**Site will be live in 1-2 minutes at:**
`https://YOUR-USERNAME.github.io/Michael-Gledhill-Portfolio/`

---

## Data Configuration

### Step 1: Edit profile.json

Open `data/profile.json` in your text editor. This is the main file that controls all content.

#### Personal Information

```json
{
  "name": "Captain Michael Gledhill",
  "rank": "Cadet Colonel",
  "branch": "Civil Air Patrol",
  "unit": "Composite Squadron 42 (CA)",
  "missionStatement": "Developing tomorrow's aerospace leaders through integrity and service"
}
```

**Fields:**
- `name`: Your full name (displays in hero, title, footer)
- `rank`: Your current CAP rank
- `branch`: Always "Civil Air Patrol" unless in a different organization
- `unit`: Your squadron number and name
- `missionStatement`: Your leadership philosophy (50 characters max for best display)

#### Biography Sections

```json
{
  "bio": "As a dedicated Civil Air Patrol cadet...",
  "capInvolvement": "I have been actively involved in CAP..."
}
```

**Guidelines:**
- `bio`: 100-150 words, professional tone
- `capInvolvement`: 50-100 words, highlight years of service and key achievements

#### Experience Array

Add your promotions and leadership roles (chronological order, oldest first):

```json
"experience": [
  {
    "date": "2020 - 2021",
    "title": "Cadet Airman Basic",
    "description": "Joined CAP and began my journey in aerospace education."
  },
  {
    "date": "2021 - 2022",
    "title": "Element Leader",
    "description": "Led an element of 4 cadets. Mentored junior cadets..."
  }
]
```

**Best Practices:**
- Include year range or just year (e.g., "2024" or "2023-2024")
- Titles should be official CAP rank/position
- Descriptions should highlight responsibilities and impact
- Include at least 3-5 entries for comprehensive timeline

#### Awards Array

Add all awards, certifications, and recognition:

```json
"awards": [
  {
    "icon": "🏆",
    "title": "Leadership Excellence Award",
    "date": "2024",
    "description": "Awarded for outstanding leadership and cadet development."
  }
]
```

**Tips:**
- `icon`: Use emoji (military 🎖️, trophy 🏆, ribbon 🎀, medal 🥇, star ⭐)
- `date`: Year awarded (YYYY format)
- `description`: 1-2 sentences explaining significance
- Aim for 4-6 awards (quality over quantity)

#### Activities Array

Document your service and participation:

```json
"activities": [
  {
    "type": "Encampment",
    "title": "Summer Encampment 2024",
    "date": "June 2024",
    "description": "Week-long regional encampment..."
  }
]
```

**Activity Types:**
- "Encampment" - Summer camps or regional events
- "Emergency Services" - SAR, disaster relief
- "Community Service" - Volunteer work
- "Competition" - Drill, academics, sports
- "Flight Activity" - Orientation flights, flight training
- "Leadership Training" - Officer schools, specialized courses

**Best Practices:**
- Include 5-8 activities showing variety
- Use actual dates (Month Year format)
- Descriptions should mention impact/learning
- Mix different activity types

#### Gallery Array

Images that appear in the photo gallery:

```json
"gallery": [
  {
    "src": "images/gallery-1.jpg",
    "caption": "Squadron Formation"
  }
]
```

**Configuration:**
- `src`: Exact path to image file (must match filename exactly)
- `caption`: Short description (20 characters max for best fit)
- Order affects gallery display order
- Minimum 4, recommended 6-8 images

#### Skills Arrays

```json
"skills": {
  "leadership": [
    "Team Leadership",
    "Strategic Planning",
    "Decision Making"
  ],
  "technical": [
    "Aeronautics",
    "Emergency Procedures",
    "Mission Planning"
  ]
}
```

**Tips:**
- List 8-12 leadership skills (most important first)
- List 5-8 technical skills
- Use industry-standard terminology
- Match actual competencies you possess

### Step 2: Validate Your JSON

Before pushing to GitHub, validate your JSON:

1. **Copy your `profile.json` content**
2. **Visit**: https://jsonlint.com/
3. **Paste** your JSON
4. **Click** "Validate JSON"
5. **Fix any errors** if shown

Common JSON errors:
- Missing commas between array items
- Mismatched quotes
- Trailing commas before closing bracket
- Unescaped special characters

---

## Image Customization

### Image Requirements Summary

| Image | Size | Format | Purpose |
|-------|------|--------|---------|
| hero-placeholder.jpg | 1920x1080 | JPEG | Background in hero section |
| about-placeholder.jpg | 600x600 | JPEG | Profile photo in about section |
| gallery-1.jpg through gallery-8.jpg | 800x600+ | JPEG | Photo grid |

### Step-by-Step Image Setup

#### 1. Prepare Your Images

```bash
# Example on Windows using ImageMagick (if installed)
convert original.jpg -resize 1920x1080 hero-placeholder.jpg
convert profile.jpg -resize 600x600 about-placeholder.jpg
convert activity.jpg -resize 800x600 gallery-1.jpg
```

#### 2. Optimize File Size

**Using TinyPNG.com:**
1. Visit https://tinypng.com
2. Drag and drop your image
3. Download optimized version
4. Save to `images/` folder

**Target file sizes:**
- Hero image: 100-200KB
- About image: 50-80KB
- Gallery images: 50-100KB each

#### 3. Name Files Correctly

Place files in `images/` folder with exact names:
```
images/
├── hero-placeholder.jpg      (your hero image)
├── about-placeholder.jpg     (your profile photo)
├── gallery-1.jpg             (activity photo 1)
├── gallery-2.jpg             (activity photo 2)
├── gallery-3.jpg             (activity photo 3)
├── gallery-4.jpg             (activity photo 4)
├── gallery-5.jpg             (activity photo 5)
├── gallery-6.jpg             (activity photo 6)
├── gallery-7.jpg             (activity photo 7)
└── gallery-8.jpg             (activity photo 8)
```

#### 4. Update Gallery Captions

In `profile.json`, update gallery array captions:

```json
"gallery": [
  {
    "src": "images/gallery-1.jpg",
    "caption": "Squadron Formation 2024"
  },
  {
    "src": "images/gallery-2.jpg",
    "caption": "Leadership Ceremony"
  }
]
```

### Image Best Practices

**Quality:**
- Start with high-resolution originals
- Preserve detail when resizing
- Avoid heavy compression artifacts
- Test on mobile devices

**Content:**
- Show variety of leadership situations
- Include people when possible
- Mix formal and candid shots
- Ensure consistent professional tone

**Accessibility:**
- Provide descriptive captions
- Avoid text-heavy images
- Use high contrast
- Ensure readability on small screens

### Troubleshooting Images

**Images don't appear:**
- Check exact filename spelling (case-sensitive)
- Verify correct file extension (.jpg, not .JPG)
- Ensure file paths in JSON match actual files
- Hard refresh browser (Ctrl+Shift+R)

**Images look stretched:**
- Check original aspect ratio
- Resize to exact recommended dimensions
- Don't force aspect ratios

**Images are too large:**
- Compress more aggressively
- Use TinyPNG or similar tool
- Target 50-150KB per image

---

## Styling & Branding

### Change Color Scheme

Edit `css/styles.css` - Find the `:root` section (top of file):

```css
:root {
    --primary-color: #0052cc;        /* Main blue */
    --primary-light: #0066ff;        /* Lighter blue */
    --primary-dark: #003d99;         /* Darker blue */
    --secondary-color: #ff6b35;      /* Accent orange */
    --accent-gold: #ffd700;          /* Gold awards */
}
```

#### Recommended Color Schemes

**Classic CAP Blue:**
```css
--primary-color: #0052cc;
--secondary-color: #ff6b35;
--accent-gold: #ffd700;
```

**Military Formal:**
```css
--primary-color: #1a3a52;      /* Navy */
--secondary-color: #d4a574;    /* Bronze */
--accent-gold: #c9a961;        /* Gold */
```

**Aerospace Modern:**
```css
--primary-color: #003d7a;      /* Deep blue */
--secondary-color: #00a8e8;    /* Cyan */
--accent-gold: #ffc107;        /* Amber */
```

**Patriotic:**
```css
--primary-color: #1e40af;      /* Dark blue */
--secondary-color: #dc2626;    /* Red */
--accent-gold: #fbbf24;        /* Gold */
```

#### Test Your Colors

1. Find a color palette tool:
   - https://coolors.co
   - https://colorhunt.co
   - https://www.colordot.it

2. Test combinations for contrast:
   - https://webaim.org/resources/contrastchecker/

3. Update CSS variables
4. Hard refresh to see changes (Ctrl+Shift+R)

### Change Logo/Branding Text

In `index.html`, find and edit:

```html
<a href="#" class="logo">CAP Portfolio</a>
```

Change to:
```html
<a href="#" class="logo">Your Unit Name</a>
```

Or with unit number:
```html
<a href="#" class="logo">CS-42 Portfolio</a>
```

### Customize Typography

In `css/styles.css`, modify font choices:

```css
--font-primary: 'Inter', sans-serif;     /* Main text font */
--font-display: 'Poppins', sans-serif;   /* Headings font */
```

**Google Fonts options:**

Instead of 'Poppins', try:
- 'Playfair Display' (elegant)
- 'Montserrat' (modern)
- 'Roboto' (clean)
- 'Lato' (friendly)

Instead of 'Inter', try:
- 'Roboto' (modern)
- 'Open Sans' (readable)
- 'Source Sans Pro' (professional)
- 'IBM Plex Sans' (technical)

### Adjust Spacing

Modify section padding in `css/styles.css`:

```css
.section {
    padding: var(--spacing-3xl) 0;  /* Change from 4rem to your value */
}
```

Common spacing values: `1rem`, `1.5rem`, `2rem`, `3rem`, `4rem`

---

## Advanced Customization

### Add a New Section

1. **Add HTML in `index.html`:**

```html
<section id="my-section" class="section section-alt">
    <div class="container">
        <div class="section-header">
            <h2>My New Section</h2>
            <div class="underline"></div>
        </div>
        <!-- Your content here -->
        <div id="my-content"></div>
    </div>
</section>
```

2. **Add to Navigation:**

Find `<ul class="nav-menu">` and add:
```html
<li><a href="#my-section">My Section</a></li>
```

3. **Add CSS in `css/styles.css`:**

```css
#my-section {
    /* Your custom styles */
}
```

4. **Add JavaScript in `js/main.js`:**

Add a function to populate your section:
```javascript
function populateMySection() {
    const container = document.getElementById('my-content');
    // Populate from profileData
}

// Call in populatePage()
populateMySection();
```

5. **Add Data to `profile.json`:**

Add a new field:
```json
"mySection": [
    {
        "title": "Item 1",
        "description": "Details..."
    }
]
```

### Connect to External AI API

In `js/ai-assistant.js`, find the commented section:

```javascript
/**
 * Alternative: Connect to External AI API
 */
```

Uncomment and modify:

**For OpenAI API:**

```javascript
async function queryExternalAI(query, profileData) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY_HERE`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: 'system',
                content: `You are helpful AI answering about ${profileData.name}'s CAP experience.`,
                role: 'user',
                content: query
            }],
            max_tokens: 200
        })
    });
    
    const data = await response.json();
    return data.choices[0].message.content;
}
```

**Security Note:** Never put API keys in client-side code in production. Use a backend proxy.

### Modify Timeline Layout

For single-side timeline (all left), in `css/styles.css`:

```css
.timeline-item:nth-child(odd) .timeline-content,
.timeline-item:nth-child(even) .timeline-content {
    width: 90%;
    margin-left: 50px;
    margin-right: 0;
    text-align: left;
}
```

### Add Dark Mode

Add to `css/styles.css`:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --bg-light: #2a2a2a;
        --neutral-white: #1a1a1a;
        --neutral-dark: #ffffff;
    }
}
```

Or add toggle button in HTML and JavaScript to control manually.

---

## Testing & Validation

### Pre-Launch Checklist

- [ ] All images are in `images/` folder
- [ ] `profile.json` is valid (use JSONLint)
- [ ] All JSON image paths match actual filenames
- [ ] Name, rank, unit are correct
- [ ] All text is proofread
- [ ] Images look good on mobile

### Browser Testing

Test on multiple browsers:
- Chrome
- Firefox
- Safari
- Edge

### Mobile Testing

Test on actual devices or DevTools:
- iPhone (375px width)
- iPad (768px width)
- Android (360px width)

### Performance Testing

Use Google PageSpeed Insights:
1. Deploy to GitHub Pages
2. Visit: https://pagespeed.web.dev/
3. Enter your URL
4. Aim for 90+ score
5. Follow suggestions

### Accessibility Testing

Use WAVE tool:
1. Visit: https://wave.webaim.org/
2. Enter your URL
3. Check for errors/warnings
4. Verify keyboard navigation works

### SEO Validation

Verify with Lighthouse:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit
4. Check SEO score (aim for 95+)

---

## Deployment Checklist

### Before Pushing to GitHub

- [ ] All content reviewed for accuracy
- [ ] Images optimized and correct size
- [ ] No placeholder text remains
- [ ] JSON validated
- [ ] Links tested locally
- [ ] Mobile layout tested
- [ ] Images appear correctly

### Deployment Steps

1. **Commit Changes**
```bash
cd Michael-Gledhill-Portfolio
git add .
git commit -m "Final portfolio customization"
git push origin main
```

2. **Verify on GitHub**
   - Check repository on GitHub.com
   - Ensure all files are visible

3. **Enable/Verify GitHub Pages**
   - Settings → Pages
   - Source: main branch, /root
   - Custom domain (optional)
   - Save

4. **Wait for Deployment**
   - Takes 1-2 minutes
   - Check Actions tab for build status

5. **Visit Your Site**
   - URL: https://YOUR-USERNAME.github.io/Michael-Gledhill-Portfolio/
   - Hard refresh (Ctrl+Shift+R)
   - Test all sections

### Post-Launch

- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Test all interactive features (gallery, AI)
- [ ] Share with friends/family
- [ ] Update resume/LinkedIn with link

---

## Common Issues & Solutions

### Images Not Showing

**Problem**: Placeholder images appear instead of yours

**Solution**:
1. Verify exact filename in `profile.json`
2. Check filename matches exactly (case-sensitive)
3. Ensure file is in `images/` folder
4. Hard refresh browser (Ctrl+Shift+R)
5. Check console for errors (F12)

### Profile Data Not Loading

**Problem**: Website shows template text

**Solution**:
1. Validate JSON at JSONLint.com
2. Check file path: `data/profile.json`
3. Ensure JSON syntax is correct
4. Hard refresh (Ctrl+Shift+R)
5. Check console errors (F12)

### Layout Looks Wrong

**Problem**: Sections don't display correctly

**Solution**:
1. Hard refresh (Ctrl+Shift+R)
2. Try different browser
3. Check mobile responsiveness
4. Verify CSS file loaded (DevTools → Network)

### Changes Don't Appear on Live Site

**Problem**: Pushed updates not visible

**Solution**:
1. Wait 2-3 minutes for build
2. Check Actions tab for build status
3. Hard refresh (Ctrl+Shift+R)
4. Clear browser cache
5. Try incognito window

---

## Need More Help?

See **README.md** for:
- Project structure overview
- Feature descriptions
- GitHub Pages deployment guide
- Additional troubleshooting

---

**You've got this! Your portfolio will be amazing.** ✈️
