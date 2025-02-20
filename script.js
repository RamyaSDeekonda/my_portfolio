document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeButton = document.getElementById('themeButton');
    const body = document.body;

    themeButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                navList.classList.remove('show');
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        
        // Here you would typically send the form data to a server
        console.log('Form submitted with values:', formValues);
        alert('Thank you for your message! I will get back to you soon.');
        
        contactForm.reset();
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add stagger effect to child elements
                const children = entry.target.querySelectorAll('.service-card, .portfolio-item');
                children.forEach((child, index) => {
                    child.style.setProperty('--order', index + 1);
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}); 