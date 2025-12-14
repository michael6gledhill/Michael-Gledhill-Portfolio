# CAP Cadet Portfolio Template

A professional, modern portfolio website template designed specifically for Civil Air Patrol (CAP) cadets and officers to showcase their leadership, achievements, training, and service. This template is fully customizable, mobile-responsive, and deploys seamlessly to GitHub Pages.

## 🎯 Overview

This project serves dual purposes:

1. **Ready-to-Deploy Portfolio**: A complete, production-ready website for showcasing CAP achievements
2. **Reusable Template**: Fork this repository to quickly create your own personalized CAP portfolio

### Key Features

- ✈️ **CAP-Specific Design**: Professional styling tailored for leadership and military excellence
- 📱 **Fully Responsive**: Mobile-first design that works beautifully on all devices
- ⚡ **High Performance**: Optimized for speed with lazy loading, no unnecessary dependencies
- 🎨 **Modern UI**: Card-based layouts, timeline visuals, subtle animations
- 🤖 **AI Assistant**: Client-side Q&A system powered by your profile data
- 🖼️ **Photo Gallery**: Responsive image grid with lightbox modal
- 📊 **Timeline Component**: Visual representation of promotions and leadership progression
- 🔍 **SEO Optimized**: Semantic HTML, accessibility-first design
- ✨ **Zero Backend Required**: Static site - deploy directly to GitHub Pages

## 📋 Sections Included

1. **Hero Section** - Name, rank, and leadership statement
2. **About** - Professional biography and CAP involvement
3. **Experience & Leadership** - Timeline of promotions and duty positions
4. **Awards & Certifications** - Achievement badges and recognition
5. **Activities & Service** - Encampments, emergency services, community work
6. **Photo Gallery** - Responsive image gallery with modal lightbox
7. **Skills & Competencies** - Leadership and technical skill showcase
8. **AI Ask Me Section** - Intelligent Q&A assistant for visitor questions

## 🚀 Quick Start

### Option 1: Fork This Repository (Recommended for Most Users)

1. **Fork the Repository**
   - Click the "Fork" button at the top-right of this repository
   - This creates your own copy under your GitHub account

2. **Enable GitHub Pages**
   - Go to your forked repository settings
   - Scroll to "Pages" section
   - Set Source to "Deploy from a branch"
   - Select main branch and /root directory
   - Save

3. **Customize Your Content**
   - Edit `data/profile.json` with your information
   - Replace placeholder images in `images/` folder
   - Commit and push changes
   - Your site will deploy automatically!

### Option 2: Clone Locally (For Development)

```bash
git clone https://github.com/YOUR-USERNAME/Michael-Gledhill-Portfolio.git
cd Michael-Gledhill-Portfolio
```

Open `index.html` in your browser or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server
```

Visit `http://localhost:8000`

## ✏️ Customization Guide

### Step 1: Edit Your Profile Data

Open `data/profile.json` and update all fields with your information:

```json
{
  "name": "Your Full Name",
  "rank": "Cadet Colonel",
  "branch": "Civil Air Patrol",
  "unit": "[Your Unit Number]",
  "bio": "Your professional biography...",
  "experience": [
    {
      "date": "2024 - Present",
      "title": "Your Position",
      "description": "Role description..."
    }
  ]
}
```

**Key Fields to Update:**

- `name` - Your full name
- `rank` - Current CAP rank
- `unit` - Your squadron/unit information
- `missionStatement` - Your leadership statement (displays in hero)
- `bio` - Professional biography (50-100 words)
- `capInvolvement` - Summary of CAP experience
- `experience` - Array of positions held (oldest to newest recommended)
- `awards` - Array of awards and certifications
- `activities` - Array of service activities, events, encampments
- `gallery` - Array of image objects with `src` and `caption`
- `skills` - Arrays of leadership and technical skills

### Step 2: Add Your Photos

1. **Hero Image** - Replace `images/hero-placeholder.jpg`
   - Recommended: 1920x1080px, professional/leadership themed
   - Can be: squadron photo, leadership event, or professional headshot

2. **About Section Image** - Replace `images/about-placeholder.jpg`
   - Recommended: 600x600px, professional portrait
   - Shows your commitment to CAP

3. **Gallery Images** - Add to `images/` folder
   - Recommended: 800x600px to 1200x900px
   - Name them: `gallery-1.jpg`, `gallery-2.jpg`, etc.
   - Update file paths in `profile.json` gallery array

**Image Optimization Tips:**
- Use JPEG for photos (better compression)
- Use PNG for graphics/logos
- Compress images before uploading (use TinyPNG or similar)
- Provide alt text in gallery captions for accessibility

### Step 3: Update Navigation and Branding

Current branding can be customized by editing:

1. **Logo Text** in `index.html` - Change "CAP Portfolio" to your unit name
2. **Color Scheme** in `css/styles.css`:
   - `--primary-color`: Main blue theme
   - `--secondary-color`: Accent orange
   - `--accent-gold`: Awards and highlights
   - Modify CSS variables at the top of styles.css

3. **Footer** in `index.html` - Add your GitHub URL and personal links

### Step 4: Customize the AI Assistant

The AI assistant in `js/ai-assistant.js` works out of the box with your profile data. To customize:

1. **Add More Question Patterns**
   ```javascript
   // In js/ai-assistant.js, add to qaPatterns object:
   myTopic: {
       keywords: ['keyword1', 'keyword2', 'keyword3'],
       generateResponse: (data) => {
           return "Your custom response here";
       }
   }
   ```

2. **Connect to External AI (Advanced)**
   - See the "Alternative: Connect to External AI API" section in `js/ai-assistant.js`
   - Example code provided for OpenAI API integration
   - Requires API key and backend proxy for security

3. **Modify Suggestion Buttons**
   - Edit the suggestion buttons in `index.html` section "AI Assistant Section"
   - Change `data-question` attribute to your custom questions

## 🔧 Advanced Customization

### Change Color Scheme

Edit the CSS variables in `css/styles.css` (lines 10-35):

```css
:root {
    --primary-color: #0052cc;        /* Change this blue */
    --secondary-color: #ff6b35;      /* Change this orange */
    --accent-gold: #ffd700;          /* Change this gold */
    /* ... and so on */
}
```

Recommended color combos:
- **Classic Blue**: Primary #0052cc, Secondary #ff6b35
- **Military**: Primary #1a3a52, Secondary #d4a574
- **Aerospace**: Primary #003d7a, Secondary #00a8e8

### Modify Timeline Layout

The timeline in `css/styles.css` alternates left-right on desktop. To change:

1. Remove the alternating pattern (make all left or all right)
2. Change timeline colors
3. Adjust spacing

### Add New Sections

To add a new section:

1. Add HTML in `index.html` with ID matching your section name
2. Add CSS styling in `css/styles.css`
3. Add JavaScript functions in `js/main.js` to populate data if needed
4. Reference in `nav-menu` links for navigation

Example:
```html
<section id="my-section" class="section">
    <div class="container">
        <div class="section-header">
            <h2>My Section</h2>
            <div class="underline"></div>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

## 📱 Mobile Responsiveness

The portfolio is designed mobile-first and tested on:
- iPhone SE (375px)
- iPhone 12 (390px)
- iPad (768px)
- Desktop (1200px+)

Breakpoints in CSS:
- `768px` - Tablet adjustments
- `480px` - Mobile phone adjustments

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push changes to `main` branch
2. GitHub automatically builds and deploys
3. Your site appears at: `https://YOUR-USERNAME.github.io/Michael-Gledhill-Portfolio/`

### Manual Deployment

1. Ensure repository settings have "GitHub Pages" enabled
2. Set source to "main branch"
3. GitHub Pages will automatically deploy your site

### Custom Domain

1. Go to repository Settings → Pages
2. Enter your custom domain
3. Create a CNAME file in root:
   ```
   your-custom-domain.com
   ```
4. Update DNS settings with your domain registrar

## 📊 Performance & Optimization

### Lighthouse Scores

Target metrics:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Optimization Features

- **Lazy Loading**: Images load as user scrolls
- **CSS Grid/Flexbox**: Efficient layout without heavy frameworks
- **Minimal Dependencies**: No npm packages required
- **Minified Assets**: Production-ready CSS and JS
- **Semantic HTML**: Better SEO and accessibility

### Further Optimization

1. Compress images more aggressively
2. Minify CSS/JS with build tools
3. Use WebP format for images (with JPEG fallback)
4. Enable Gzip compression on GitHub Pages (automatic)

## ♿ Accessibility

The portfolio meets WCAG 2.1 Level AA standards:

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratio compliance
- Focus indicators on all interactive elements
- Alt text on all images
- Respects `prefers-reduced-motion` setting

### Test Accessibility

1. Use browser DevTools accessibility inspector
2. Run through: https://www.webAIM.org/articles/screenreader_testing/
3. Test with keyboard navigation only
4. Check color contrast: https://webaim.org/resources/contrastchecker/

## 🔒 Security & Privacy

- **No Backend**: Eliminates server security risks
- **No Data Collection**: All data is static and visible in source
- **HTTPS**: GitHub Pages enforces SSL/TLS encryption
- **No Cookies**: No tracking or cookies required
- **Open Source**: Full transparency, community auditable

## 📚 Project Structure

```
Michael-Gledhill-Portfolio/
├── index.html              # Main page (7 sections + navigation)
├── css/
│   └── styles.css          # All styling (responsive, animations)
├── js/
│   ├── main.js             # Page population, gallery, navigation
│   └── ai-assistant.js     # AI Q&A system
├── data/
│   └── profile.json        # ⭐ EDIT THIS - Your profile data
├── images/
│   ├── hero-placeholder.jpg
│   ├── about-placeholder.jpg
│   └── gallery-*.jpg       # Add your photos here
├── README.md               # This file
└── .gitignore             # Git configuration
```

## 🛠️ Troubleshooting

### Images Not Showing

**Problem**: Placeholder images appear instead of your photos

**Solution**:
1. Check file paths in `profile.json` - must be exactly correct
2. Images must be in `images/` folder
3. Use relative paths: `images/my-photo.jpg`
4. Check file extensions are lowercase (.jpg not .JPG)

### Profile Data Not Loading

**Problem**: Website shows template text instead of your data

**Solution**:
1. Check browser console for errors (F12 → Console)
2. Verify `profile.json` is valid JSON (use online JSON validator)
3. Check file is at `data/profile.json` (correct path)
4. Hard refresh browser (Ctrl+Shift+R)

### Styling Looks Wrong

**Problem**: Colors or layout appear different

**Solution**:
1. Hard refresh browser cache (Ctrl+Shift+R)
2. Check CSS variables in `css/styles.css`
3. Verify no CSS file conflicts
4. Test in different browser (Chrome, Firefox, Safari)

### GitHub Pages Not Updating

**Problem**: Changes don't appear on live site

**Solution**:
1. Wait 1-2 minutes for GitHub to rebuild
2. Check Settings → Pages to see build status
3. Hard refresh your site (Ctrl+Shift+R)
4. Check main branch has latest commits

## 🎓 Learning Resources

- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Web Accessibility Fundamentals](https://www.w3.org/WAI/fundamentals/)

## 📄 License

This template is provided as-is for use by CAP cadets and officers. Feel free to fork, modify, and share!

## 🤝 Contributing

Found a bug or have improvements?

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

**For Issues or Questions**:

1. Check the Troubleshooting section above
2. Review the code comments (detailed explanations in HTML/CSS/JS)
3. Test your `profile.json` with a JSON validator
4. Check browser console for error messages

## 🎯 Next Steps for Users

1. ✅ Fork this repository
2. ✅ Enable GitHub Pages in settings
3. ✅ Edit `data/profile.json` with your information
4. ✅ Replace placeholder images in `images/` folder
5. ✅ Commit and push your changes
6. ✅ Visit your live site at `https://YOUR-USERNAME.github.io/Michael-Gledhill-Portfolio/`

## 🚀 Features Roadmap (Future Enhancements)

Potential additions (users can add themselves):

- Dark mode toggle
- Multiple language support
- Blog/news section
- Contact form (with backend)
- PDF resume download
- Social media integration
- 3D flight simulation showcase
- Achievement badges system
- Cadet mentorship directory

## 📝 Version History

- **v1.0** (December 2024) - Initial release
  - All 7 required sections
  - Responsive design
  - AI assistant with pattern matching
  - Photo gallery with lightbox
  - Timeline component
  - GitHub Pages ready

---

**Built with ❤️ for the Civil Air Patrol Community**

*Empowering cadets and officers to showcase their leadership, achievements, and service.*
