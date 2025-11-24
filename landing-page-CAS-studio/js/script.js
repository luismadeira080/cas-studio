// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to navigation on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Lazy loading images for performance
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img');
    images.forEach(img => imageObserver.observe(img));
}

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(section);
});

// Google Ads Conversion Tracking
function trackConversion(conversionLabel) {
    // Google Ads conversion tracking code will be inserted here
    // Example: gtag('event', 'conversion', {'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'});
    console.log('Conversion tracked:', conversionLabel);
}

// Track CTA button clicks
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        trackConversion('start_project_click');
        // Optional: Send event to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': 'Start Your Project'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.classList.remove('scrolled');
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');

        // Toggle the current item
        faqItem.classList.toggle('active');
        button.setAttribute('aria-expanded', !isActive);
    });
});

// Enquiry Form Functionality
const enquiryForm = document.getElementById('enquiryForm');

// Show/hide "Other" project description field
const otherProjectRadio = document.getElementById('otherProject');
const otherProjectDesc = document.getElementById('otherProjectDesc');

document.querySelectorAll('input[name="projectType"]').forEach(radio => {
    radio.addEventListener('change', () => {
        if (otherProjectRadio.checked) {
            otherProjectDesc.classList.add('active');
        } else {
            otherProjectDesc.classList.remove('active');
            otherProjectDesc.value = '';
        }
    });
});

// Limit priorities to 2 selections
const priorityCheckboxes = document.querySelectorAll('.priority-checkbox');
priorityCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCount = document.querySelectorAll('.priority-checkbox:checked').length;

        if (checkedCount > 2) {
            checkbox.checked = false;
            alert('Please select up to 2 priorities only.');
        }
    });
});

// Form submission handling
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(enquiryForm);
        const data = {};

        // Convert FormData to object
        for (let [key, value] of formData.entries()) {
            if (key === 'priorities') {
                if (!data[key]) data[key] = [];
                data[key].push(value);
            } else {
                data[key] = value;
            }
        }

        // Log form data (replace with actual submission logic)
        console.log('Form submitted:', data);

        // Track conversion
        trackConversion('enquiry_form_submit');

        // Optional: Send to Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'submit', {
                'event_category': 'Form',
                'event_label': 'Enquiry Form'
            });
        }

        // Show success message
        alert('Thank you for your enquiry! We will be in touch soon.');

        // Reset form
        enquiryForm.reset();
        otherProjectDesc.classList.remove('active');

        // TODO: Replace with actual form submission to your backend or email service
        // Example: fetch('/api/submit-enquiry', { method: 'POST', body: JSON.stringify(data) })
    });
}
