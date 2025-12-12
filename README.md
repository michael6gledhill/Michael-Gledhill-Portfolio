# Michael Gledhill's Portfolio

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript.

**[🚀 View Live Portfolio](https://michael6gledhill.github.io/Michael-Gledhill-Portfolio/)**

## Features

- **Fully Responsive Design** - Works great on desktop, tablet, and mobile devices
- **Modern Glassmorphism UI** - Frosted glass effect with smooth animations
- **Dark/Light Theme** - Toggle between dark and light modes
- **Interactive Elements** - Hover effects, smooth scrolling, and dynamic content
- **Civil Air Patrol Focus** - Showcase your CAP experience with photos
- **Skills Section** - Categorized skills and technologies
- **Contact Form** - Get in touch with visitors
- **Social Links** - Connect on multiple platforms
- **Auto-Deploy** - GitHub Actions auto-deploys on every push
- **GitHub Pages Ready** - Deploy directly to GitHub Pages

## Quick Start

1. Clone this repository
2. Customize the content in `index.html`
3. Update social links and contact information
4. Replace project information with your own projects
5. Push to GitHub

## Deployment

### GitHub Pages Auto-Deployment ✅

This portfolio uses **GitHub Actions** for automatic deployment to GitHub Pages.

**Setup Instructions:**

1. **Go to your repository settings:**
   - Navigate to https://github.com/michael6gledhill/Michael-Gledhill-Portfolio/settings

2. **Enable GitHub Pages:**
   - Click **Pages** in the left sidebar
   - Under "Build and deployment"
   - Select **"Deploy from a branch"**
   - Branch: `main`
   - Folder: `/ (root)`
   - Click **Save**

3. **View your deployment:**
   - Go to the **Actions** tab
   - Watch the workflow run
   - Once complete (green checkmark), your site is live!

**Live URL:** `https://michael6gledhill.github.io/Michael-Gledhill-Portfolio/`

### How Auto-Deployment Works

- Every time you push to `main`, GitHub Actions automatically:
  1. Checks out your code
  2. Uploads it to GitHub Pages
  3. Deploys your site (takes ~1-2 minutes)
  4. You can monitor progress in the **Actions** tab

**Workflow File:** `.github/workflows/deploy.yml`

## Customization

### Update Your Information
- Edit the hero section with your name and title
- Update the about section with your bio
- Add your social media links in the contact section

### Modify Projects
- Open `script.js` and update the `projects` array with your projects
- Each project needs: title, description, image, tags, github link

### Change Colors
- Edit the CSS variables in `styles.css` `:root` section
- Customize primary, secondary, and accent colors

### Toggle Dark/Light Theme
- Click the 🌙/☀️ button in the top-right corner
- Your preference is saved to browser storage

## Files Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── Images/                  # Your portfolio images
├── index.html               # Main HTML file
├── styles.css               # Styling with glassmorphism
├── script.js                # JavaScript functionality
├── README.md                # This file
└── .nojekyll                # Tells GitHub Pages to serve as-is
```

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Gradients, Backdrop Blur)
- Vanilla JavaScript
- Responsive Design
- CSS Animations & Transitions
- GitHub Actions for CI/CD

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Design Features

- **Glassmorphism**: Modern frosted glass effect with backdrop blur
- **Smooth Animations**: Fade-in, hover, and scroll animations
- **Theme System**: Dark/light mode with localStorage persistence
- **Responsive**: Works perfectly on all device sizes
- **Accessible**: Semantic HTML and keyboard navigation

## License

Feel free to use this template for your own portfolio!

## Contact

Have questions? Reach out on social media or email!

Have questions? Reach out on social media or email!
