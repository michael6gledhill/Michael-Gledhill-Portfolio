// Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const toggleIcon = themeToggle.querySelector('.toggle-icon');
    const html = document.documentElement;
    
    // Check for saved theme or prefer-color-scheme
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

const projects = [
    {
        title: "Cadet Leadership Program",
        description: "As Cadet Commander, I lead the Heartland Composite Squadron's cadet corps. I oversee training programs, conduct leadership development, and mentor the next generation of aviation and emergency services professionals.",
        image: "Images/Profile_CAP.jpg",
        tags: ["Leadership", "Training", "Mentorship"],
        github: "https://michael6gledhill.github.io/",
        live: "https://michael6gledhill.github.io/"
    },
    {
        title: "Emergency Services Operations",
        description: "I coordinate and participate in Civil Air Patrol emergency services missions. Our squadron responds to search and rescue operations and provides aerial support for community emergencies.",
        image: "Images/SAREX.jpg",
        tags: ["Emergency Services", "SAR", "Operations"],
        github: "https://michael6gledhill.github.io/",
        live: "https://michael6gledhill.github.io/"
    },
    { 
        title: "Aerospace Education",
        description: "I develop and deliver aerospace education programs that inspire cadets to pursue aviation careers. These programs include flight principles, navigation, and aviation history.",
        image: "Images/ENC2.jpg",
        tags: ["Education", "Aviation", "STEM"],
        github: "https://michael6gledhill.github.io/",
        live: "https://michael6gledhill.github.io/"
    },
    {
        title: "Squadron Training & Development",
        description: "I manage comprehensive training programs including ground school, orientation flights, and advanced cadet certifications. Every cadet receives structured, progressive training.",
        image: "Images/SUPT1.jpg",
        tags: ["Training", "Development", "Certification"],
        github: "https://michael6gledhill.github.io/",
        live: "https://michael6gledhill.github.io/"
    },
    {
        title: "Cadet Orientation Flights",
        description: "I coordinate orientation flights that give cadets their first experience in flight. These flights are crucial for inspiring future pilots and aviation professionals.",
        image: "Images/Flight.jpg",
        tags: ["Aviation", "Flight", "Experience"],
        github: "https://michael6gledhill.github.io/",
        live: "https://michael6gledhill.github.io/"
    },
    {
        title: "Squadron Support & Administration",
        description: "I manage day-to-day squadron operations, coordinate meetings, maintain records, and ensure compliance with CAP regulations and standards.",
        image: "Images/SUPT2.jpg",
        tags: ["Administration", "Operations", "Compliance"],
        github: "https://michael6gledhill.github.io/",
        live: "https://michael6gledhill.github.io/"
    }
];

// Render projects dynamically
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer">Learn More</a>
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
    setupThemeToggle();
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
