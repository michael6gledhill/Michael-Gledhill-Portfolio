// Projects data
const projects = [
    {
        title: "Photo Metadata App",
        description: "Extract and organize photo metadata with an intuitive interface. Manage and analyze image data efficiently.",
        emoji: "📸",
        tags: ["Python", "UI", "Data Processing"],
        github: "https://github.com/michael6gledhill",
        live: "https://michael6gledhill.github.io/"
    },
    {
        title: "CyberPatriot Runbook",
        description: "Comprehensive cybersecurity operations and hardening procedures. Documentation for security best practices.",
        emoji: "🔒",
        tags: ["Cybersecurity", "Documentation", "Security Hardening"],
        github: "https://github.com/michael6gledhill",
        live: "https://michael6gledhill.github.io/"
    },
    {
        title: "Personal Portfolio",
        description: "Professional portfolio showcasing leadership, aviation, and technical experience with modern web design.",
        emoji: "💼",
        tags: ["HTML5", "CSS3", "JavaScript"],
        github: "https://github.com/michael6gledhill/Michael-Gledhill-Portfolio",
        live: "https://michael6gledhill.github.io/Michael-Gledhill-Portfolio/"
    }
];

// Render projects dynamically
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">${project.emoji}</div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="${project.live}" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Mobile menu toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.style.display = 'none';
            });
        });
    }
}

// Handle contact form submission
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // You can integrate with a backend service or use a service like FormSubmit, Netlify Forms, etc.
            // For now, we'll just show a success message
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon!`);
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Smooth scroll behavior for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Add scroll animation for elements
function setupScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Active navigation link highlighting
function setupActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = 'var(--primary-color)';
            }
        });
    });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupMobileMenu();
    setupContactForm();
    setupSmoothScroll();
    setupScrollAnimation();
    setupActiveNavLink();
});

// Add some interactivity to skill tags
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'scale(1)';
        });
        
        tag.style.transition = 'transform 0.2s ease';
    });
});
