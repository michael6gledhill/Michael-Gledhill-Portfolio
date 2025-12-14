/**
 * MAIN.JS - Portfolio Functionality
 * 
 * This file handles:
 * - Loading profile data from profile.json
 * - Populating all dynamic sections (experience, awards, activities, gallery, skills)
 * - Mobile navigation toggle
 * - Gallery modal/lightbox functionality
 * - Scroll animations and lazy loading
 */

// ============================================
// PROFILE DATA LOADING
// ============================================

let profileData = null;

/**
 * Load and parse profile.json
 * This function fetches the JSON data and makes it available globally
 */
async function loadProfileData() {
    try {
        const response = await fetch('data/profile.json');
        if (!response.ok) {
            throw new Error('Failed to load profile data');
        }
        profileData = await response.json();
        console.log('Profile data loaded successfully:', profileData);
        populatePage();
    } catch (error) {
        console.error('Error loading profile data:', error);
        // Fallback to basic template if data doesn't load
        displayFallbackContent();
    }
}

/**
 * Display fallback content if profile.json doesn't load
 */
function displayFallbackContent() {
    console.warn('Using template defaults. Please configure data/profile.json');
    document.getElementById('hero-name').textContent = 'Your Name';
    document.getElementById('hero-rank').textContent = 'Cadet / Rank';
}

/**
 * Populate all page sections with profile data
 */
function populatePage() {
    // Hero Section
    document.getElementById('hero-name').textContent = profileData.name || 'Your Name';
    document.getElementById('hero-rank').textContent = `${profileData.rank} ${profileData.branch || ''}`;
    document.getElementById('hero-statement').textContent = profileData.missionStatement || 'Leadership • Excellence • Service';
    
    // Update page title
    document.title = `${profileData.name} - CAP Portfolio`;
    
    // About Section
    document.getElementById('about-bio').textContent = profileData.bio || '[EDIT THIS]';
    document.getElementById('about-mission').textContent = profileData.capInvolvement || '[EDIT THIS]';
    
    // Populate logos
    populateLogos();
    
    // Populate dynamic sections
    populateTimeline();
    populateAwards();
    populateActivities();
    populateGallery();
    populateSkills();
    populateContact();
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// ============================================
// LOGOS (WING, SQUADRON, CAP CREST)
// ============================================

/**
 * Populate logo section with organizational logos
 */
function populateLogos() {
    if (!profileData.logos) {
        console.warn('No logos data in profile.json');
        return;
    }
    
    // Set wing logo
    const wingLogoEl = document.getElementById('wing-logo');
    if (wingLogoEl && profileData.logos.wingLogo) {
        wingLogoEl.src = profileData.logos.wingLogo;
    }
    
    // Set CAP crest
    const capCrestEl = document.getElementById('cap-crest');
    if (capCrestEl && profileData.logos.capCrest) {
        capCrestEl.src = profileData.logos.capCrest;
    }
    
    // Set squadron logo
    const squadronLogoEl = document.getElementById('squadron-logo');
    if (squadronLogoEl && profileData.logos.squadronLogo) {
        squadronLogoEl.src = profileData.logos.squadronLogo;
    }
}

// ============================================
// TIMELINE (EXPERIENCE & LEADERSHIP)
// ============================================

/**
 * Populate the experience timeline with leadership roles and promotions
 */
function populateTimeline() {
    const timelineContainer = document.getElementById('timeline');
    timelineContainer.innerHTML = '';
    
    if (!profileData.experience || profileData.experience.length === 0) {
        timelineContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--neutral-gray);">No experience data. Add entries to profile.json</p>';
        return;
    }
    
    profileData.experience.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">${item.date || ''}</div>
                <h3 class="timeline-title">${item.title || 'Position'}</h3>
                <p class="timeline-description">${item.description || ''}</p>
            </div>
        `;
        timelineContainer.appendChild(timelineItem);
    });
}

// ============================================
// AWARDS & CERTIFICATIONS
// ============================================

/**
 * Populate awards grid with achievement data
 */
function populateAwards() {
    const awardsGrid = document.getElementById('awards-grid');
    awardsGrid.innerHTML = '';
    
    if (!profileData.awards || profileData.awards.length === 0) {
        awardsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--neutral-gray);">No awards data. Add entries to profile.json</p>';
        return;
    }
    
    profileData.awards.forEach((award) => {
        const awardCard = document.createElement('div');
        awardCard.className = 'award-card';
        awardCard.innerHTML = `
            <div class="award-icon">${award.icon || '🏆'}</div>
            <h3 class="award-title">${award.title || 'Award'}</h3>
            <div class="award-date">${award.date || ''}</div>
            <p class="award-description">${award.description || ''}</p>
        `;
        awardsGrid.appendChild(awardCard);
    });
}

// ============================================
// ACTIVITIES & SERVICE
// ============================================

/**
 * Populate activities grid with encampments, service, and competitions
 */
function populateActivities() {
    const activitiesGrid = document.getElementById('activities-grid');
    activitiesGrid.innerHTML = '';
    
    if (!profileData.activities || profileData.activities.length === 0) {
        activitiesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--neutral-gray);">No activities data. Add entries to profile.json</p>';
        return;
    }
    
    profileData.activities.forEach((activity) => {
        const activityCard = document.createElement('div');
        activityCard.className = 'activity-card';
        activityCard.innerHTML = `
            <span class="activity-type">${activity.type || 'Activity'}</span>
            <h3 class="activity-title">${activity.title || 'Activity'}</h3>
            <div class="activity-date">${activity.date || ''}</div>
            <p class="activity-description">${activity.description || ''}</p>
        `;
        activitiesGrid.appendChild(activityCard);
    });
}

// ============================================
// PHOTO GALLERY
// ============================================

let currentGalleryIndex = 0;

/**
 * Populate photo gallery grid with lazy loading
 */
function populateGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = '';
    
    if (!profileData.gallery || profileData.gallery.length === 0) {
        galleryGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--neutral-gray);">No gallery data. Add entries to profile.json</p>';
        return;
    }
    
    profileData.gallery.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-index', index);
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.caption || 'Gallery image'}" loading="lazy">
            <div class="gallery-item-overlay">
                <span>+</span>
            </div>
        `;
        galleryItem.addEventListener('click', () => openGalleryModal(index));
        galleryGrid.appendChild(galleryItem);
    });
}

/**
 * Open gallery modal/lightbox
 * @param {number} index - Index of image to display
 */
function openGalleryModal(index) {
    currentGalleryIndex = index;
    const modal = document.getElementById('gallery-modal');
    const image = profileData.gallery[index];
    
    document.getElementById('modal-image').src = image.src;
    document.getElementById('modal-image').alt = image.caption || 'Gallery image';
    document.getElementById('modal-caption').textContent = image.caption || '';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

/**
 * Close gallery modal
 */
function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

/**
 * Navigate to previous image in gallery
 */
function previousGalleryImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + profileData.gallery.length) % profileData.gallery.length;
    openGalleryModal(currentGalleryIndex);
}

/**
 * Navigate to next image in gallery
 */
function nextGalleryImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % profileData.gallery.length;
    openGalleryModal(currentGalleryIndex);
}

// ============================================
// SKILLS & COMPETENCIES
// ============================================

/**
 * Populate skills section with leadership and technical skills
 */
function populateSkills() {
    const leadershipTags = document.getElementById('leadership-tags');
    const technicalTags = document.getElementById('technical-tags');
    
    leadershipTags.innerHTML = '';
    technicalTags.innerHTML = '';
    
    if (profileData.skills) {
        // Leadership Skills
        if (profileData.skills.leadership && profileData.skills.leadership.length > 0) {
            profileData.skills.leadership.forEach((skill) => {
                const tag = document.createElement('span');
                tag.className = 'skill-tag';
                tag.textContent = skill;
                leadershipTags.appendChild(tag);
            });
        } else {
            leadershipTags.innerHTML = '<p style="color: var(--neutral-gray);">Add leadership skills to profile.json</p>';
        }
        
        // Technical Skills
        if (profileData.skills.technical && profileData.skills.technical.length > 0) {
            profileData.skills.technical.forEach((skill) => {
                const tag = document.createElement('span');
                tag.className = 'skill-tag skill-tag-secondary';
                tag.textContent = skill;
                technicalTags.appendChild(tag);
            });
        } else {
            technicalTags.innerHTML = '<p style="color: var(--neutral-gray);">Add technical skills to profile.json</p>';
        }
    }
}

// ============================================
// CONTACT INFORMATION
// ============================================

/**
 * Populate contact links with data from profile.json
 * Formats contact information for email, phone, LinkedIn, and GitHub
 */
function populateContact() {
    if (!profileData.contact) {
        console.warn('No contact data in profile.json');
        return;
    }
    
    // Email Link
    const emailLink = document.getElementById('contact-email');
    if (emailLink && profileData.contact.email) {
        emailLink.href = `mailto:${profileData.contact.email}`;
        emailLink.title = `Email: ${profileData.contact.email}`;
    }
    
    // Phone Link
    const phoneLink = document.getElementById('contact-phone');
    if (phoneLink && profileData.contact.phone) {
        // Format phone number for tel: protocol by removing non-digits
        const phoneDigits = profileData.contact.phone.replace(/\D/g, '');
        phoneLink.href = `tel:+1${phoneDigits}`;
        phoneLink.title = `Call: ${profileData.contact.phone}`;
    }
    
    // LinkedIn Link
    const linkedInLink = document.getElementById('contact-linkedin');
    if (linkedInLink && profileData.contact.linkedin) {
        linkedInLink.href = profileData.contact.linkedin;
        linkedInLink.target = '_blank';
        linkedInLink.rel = 'noopener noreferrer';
        linkedInLink.title = 'Visit LinkedIn Profile';
    }
    
    // GitHub Link
    const githubLink = document.getElementById('contact-github');
    if (githubLink && profileData.contact.github) {
        githubLink.href = profileData.contact.github;
        githubLink.target = '_blank';
        githubLink.rel = 'noopener noreferrer';
        githubLink.title = 'Visit GitHub Profile';
    }
}

// ============================================
// MOBILE NAVIGATION
// ============================================

/**
 * Toggle mobile navigation menu
 */
function toggleMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}

/**
 * Close mobile menu when a link is clicked
 */
function closeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Load profile data
    loadProfileData();
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu on nav link click
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Gallery modal controls
    const galleryModal = document.getElementById('gallery-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalPrev = document.querySelector('.modal-prev');
    const modalNext = document.querySelector('.modal-next');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeGalleryModal);
    }
    
    if (modalPrev) {
        modalPrev.addEventListener('click', previousGalleryImage);
    }
    
    if (modalNext) {
        modalNext.addEventListener('click', nextGalleryImage);
    }
    
    if (galleryModal) {
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) {
                closeGalleryModal();
            }
        });
    }
    
    // Keyboard navigation for gallery modal
    document.addEventListener('keydown', (e) => {
        if (!galleryModal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeGalleryModal();
                break;
            case 'ArrowLeft':
                previousGalleryImage();
                break;
            case 'ArrowRight':
                nextGalleryImage();
                break;
        }
    });
    
    // Scroll animations - add class to elements as they enter viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe timeline items and award cards
    document.querySelectorAll('.timeline-item, .award-card, .activity-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

/**
 * Lazy load images - can be enhanced further with actual lazy loading libraries
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
