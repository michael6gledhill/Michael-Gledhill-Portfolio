// Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const toggleIcon = themeToggle.querySelector('.toggle-icon');
    const html = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        toggleIcon.textContent = '◑';
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleIcon.textContent = newTheme === 'dark' ? '◑' : '◐';
    });
}

// Projects Data
const projects = [
    {
        title: "Cadet Leadership Program",
        description: "Lead 50+ cadets through comprehensive training in aviation, emergency services, and leadership development",
        image: "Images/Profile_CAP.jpg",
        tags: ["Leadership", "Training", "Development"],
    },
    {
        title: "Flight Operations",
        description: "Coordinate and oversee cadet orientation flights and aviation training programs",
        image: "Images/Flight.jpg",
        tags: ["Aviation", "Operations", "Safety"],
    },
    {
        title: "Search & Rescue Coordination",
        description: "Plan and execute search and rescue exercises (SAREX) and emergency response missions",
        image: "Images/SAREX.jpg",
        tags: ["Emergency Services", "SAR", "Operations"],
    },
    {
        title: "Pilot Development",
        description: "Mentoring cadet pilots through certification programs and advanced flight training",
        image: "Images/Flight.jpg",
        tags: ["Aviation", "Training", "Mentorship"],
    },
    {
        title: "Emergency Management",
        description: "Coordinating with regional emergency services and community crisis response",
        image: "Images/SAREX.jpg",
        tags: ["Emergency", "Coordination", "Community"],
    },
    {
        title: "Professional Development",
        description: "Staff training programs and professional military education for cadets",
        image: "Images/Profile_CAP.jpg",
        tags: ["Education", "Development", "Military"],
    },
];

// Render Projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-body">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-badge">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Smooth Scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// Contact Form
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    renderProjects();
    setupMobileMenu();
    setupSmoothScroll();
    setupContactForm();
    setupScrollAnimations();
});
