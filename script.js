/**
 * Portfolio JavaScript - Modern Version with Enhanced Features
 * Includes: Theme management, Animations, Form handling, and Navigation
 */

// ============================================
// WELCOME OVERLAY MANAGEMENT
// ============================================
function setupWelcomeOverlay() {
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    if (!welcomeOverlay) return;

    const hasVisited = localStorage.getItem('hasVisitedPortfolio');
    
    if (hasVisited) {
        welcomeOverlay.classList.add('hidden');
        return;
    }

    // Allow dismiss after 2 seconds
    const dismissTimer = setTimeout(enableDismiss, 2000);
    
    function enableDismiss() {
        document.addEventListener('scroll', dismissWelcome, { once: true });
        document.addEventListener('click', dismissWelcome, { once: true });
    }
    
    function dismissWelcome() {
        welcomeOverlay.classList.add('fade-out');
        localStorage.setItem('hasVisitedPortfolio', 'true');
        setTimeout(() => {
            welcomeOverlay.remove();
        }, 800);
    }
}

// ============================================
// THEME TOGGLE MANAGEMENT
// ============================================
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const toggleIcon = themeToggle.querySelector('.toggle-icon');
    const html = document.documentElement;
    
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    applyTheme(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });
    
    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (toggleIcon) {
            toggleIcon.textContent = theme === 'dark' ? '◑' : '◐';
        }
        // Dispatch custom event for other listeners
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }
}


// ============================================
// PROJECTS DATA AND RENDERING
// ============================================
const projects = [
    {
        title: "Cadet Leadership Program",
        description: "As Cadet Commander, I lead the Heartland Composite Squadron's cadet corps. I oversee training programs, conduct leadership development, and mentor the next generation of aviation and emergency services professionals.",
        image: "Images/Profile_CAP.jpg",
        tags: ["Leadership", "Training", "Mentorship"],
        category: "leadership"
    },
    {
        title: "Emergency Services Operations",
        description: "I coordinate and participate in Civil Air Patrol emergency services missions. Our squadron responds to search and rescue operations and provides aerial support for community emergencies.",
        image: "Images/SAREX.jpg",
        tags: ["Emergency Services", "SAR", "Operations"],
        category: "operations"
    },
    { 
        title: "Aerospace Education",
        description: "I develop and deliver aerospace education programs that inspire cadets to pursue aviation careers. These programs include flight principles, navigation, and aviation history.",
        image: "Images/ENC2.jpg",
        tags: ["Education", "Aviation", "STEM"],
        category: "education"
    },
    {
        title: "Squadron Training & Development",
        description: "I manage comprehensive training programs including ground school, orientation flights, and advanced cadet certifications. Every cadet receives structured, progressive training.",
        image: "Images/SUPT1.jpg",
        tags: ["Training", "Development", "Certification"],
        category: "training"
    },
    {
        title: "Cadet Orientation Flights",
        description: "I coordinate orientation flights that give cadets their first experience in flight. These flights are crucial for inspiring future pilots and aviation professionals.",
        image: "Images/Flight.jpg",
        tags: ["Aviation", "Flight", "Experience"],
        category: "aviation"
    },
    {
        title: "Squadron Support & Administration",
        description: "I manage day-to-day squadron operations, coordinate meetings, maintain records, and ensure compliance with CAP regulations and standards.",
        image: "Images/SUPT2.jpg",
        tags: ["Administration", "Operations", "Compliance"],
        category: "administration"
    }
];

function renderProjects(filterCategory = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    const filteredProjects = filterCategory === 'all' 
        ? projects 
        : projects.filter(p => p.category === filterCategory);

    projectsGrid.innerHTML = filteredProjects.map((project, index) => `
        <div class="project-card" style="animation-delay: ${index * 0.1}s;">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <p>View Details</p>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // Add click handlers for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });
}


// ============================================
// MOBILE MENU MANAGEMENT
// ============================================
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu, .nav-links');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header') && !e.target.closest('.nav-menu')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ============================================
// FORM HANDLING
// ============================================
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        try {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Validate form data
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            showNotification(`Thank you, ${name}! Your message has been received.`, 'success');
            contactForm.reset();
            
        } catch (error) {
            showNotification('An error occurred. Please try again.', 'error');
            console.error('Form submission error:', error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notification if present
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            
            if (href === '#' || !document.querySelector(href)) return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// ============================================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ============================================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .project-card, .skill-tag').forEach(element => {
        element.classList.add('fade-in-up');
        observer.observe(element);
    });
}

// ============================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ============================================
function setupActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"], .nav-links a[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) return;

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// SKILL TAG ANIMATIONS
// ============================================
function setupSkillTagInteractions() {
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.08) translateY(-2px)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
}

// ============================================
// PERFORMANCE: LAZY LOAD IMAGES
// ============================================
function setupLazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    setupWelcomeOverlay();
    setupThemeToggle();
    renderProjects();
    setupMobileMenu();
    setupContactForm();
    setupSmoothScroll();
    setupScrollAnimations();
    setupActiveNavLink();
    setupSkillTagInteractions();
    setupLazyLoadImages();
    
    // Dispatch custom event when page is fully initialized
    document.dispatchEvent(new CustomEvent('portfolioInitialized'));
});

// Handle visibility change for pause/resume animations
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations if user switches tabs
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations
        document.body.style.animationPlayState = 'running';
    }
});
