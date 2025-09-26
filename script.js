// Smooth scrolling and navigation
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventL`);
document.head.appendChild(style);

// Universal modal close button handler
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-close') || e.target.innerHTML === '×') {
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Project modal functionality
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.modal-close');

    // Project data
    const projectData = {
        'health-record': {
            title: 'Enhanced Health Record Management System',
            content: `
                <div class="project-details">
                    <div class="project-overview">
                        <h4>Project Overview</h4>
                        <p>Led a team in developing an Enhanced Web-Based Health Record Management System using Multi-Factor Authentication for Bureau of Health Record Management and Reporting Region III.</p>
                    </div>
                    
                    <div class="project-features">
                        <h4>Key Features</h4>
                        <ul>
                            <li>Multi-factor authentication (2FA) system</li>
                            <li>Secure patient data management</li>
                            <li>Role-based access control</li>
                            <li>Real-time data synchronization</li>
                            <li>Comprehensive reporting system</li>
                            <li>HIPAA compliant security measures</li>
                        </ul>
                    </div>
                    
                    <div class="project-technologies">
                        <h4>Technologies Used</h4>
                        <div class="tech-stack">
                            <span class="tech-tag">PHP</span>
                            <span class="tech-tag">MySQL</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">HTML/CSS</span>
                            <span class="tech-tag">Bootstrap</span>
                            <span class="tech-tag">AJAX</span>
                        </div>
                    </div>
                    
                    <div class="project-responsibilities">
                        <h4>My Responsibilities</h4>
                        <ul>
                            <li>Project management and team coordination</li>
                            <li>Backend development and database design</li>
                            <li>Security implementation and testing</li>
                            <li>Documentation and project presentation</li>
                        </ul>
                    </div>
                    
                    <div class="project-timeline">
                        <h4>Timeline</h4>
                        <p><strong>Duration:</strong> 6 months (2025)</p>
                        <p><strong>Team Size:</strong> 4 developers</p>
                        <p><strong>Role:</strong> Project Manager & Full Stack Developer</p>
                    </div>
                </div>
            `
        },
        'korean-mart': {
            title: 'Korean Mart Web Application',
            content: `
                <div class="project-details">
                    <div class="project-overview">
                        <h4>Project Overview</h4>
                        <p>Developed a multi-role e-commerce system with Super Admin, Admin, and Customer access levels. Features comprehensive transaction management, account handling, and CRUD operations for items.</p>
                    </div>
                    
                    <div class="project-features">
                        <h4>Key Features</h4>
                        <ul>
                            <li>Multi-role user management system</li>
                            <li>Transaction viewing and management</li>
                            <li>Account management with CRUD operations</li>
                            <li>Inventory management system</li>
                            <li>Secure checkout with OTP verification</li>
                            <li>Real-time order tracking</li>
                            <li>Comprehensive admin dashboard</li>
                        </ul>
                    </div>
                    
                    <div class="project-technologies">
                        <h4>Technologies Used</h4>
                        <div class="tech-stack">
                            <span class="tech-tag">PHP</span>
                            <span class="tech-tag">MySQL</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Bootstrap</span>
                            <span class="tech-tag">jQuery</span>
                            <span class="tech-tag">AJAX</span>
                        </div>
                    </div>
                    
                    <div class="project-achievements">
                        <h4>Key Achievements</h4>
                        <ul>
                            <li>Implemented secure OTP verification system</li>
                            <li>Created intuitive admin dashboard</li>
                            <li>Developed comprehensive inventory management</li>
                            <li>Achieved 99% uptime during testing phase</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'mobile-health': {
            title: 'Mobile Health Record Management App',
            content: `
                <div class="project-details">
                    <div class="project-overview">
                        <h4>Project Overview</h4>
                        <p>Created a cross-platform mobile application counterpart for the Health Record Management System. Features mobile access to records with biometric login, 2FA, OTP verification, and an AI-powered chat assistant.</p>
                    </div>
                    
                    <div class="project-features">
                        <h4>Key Features</h4>
                        <ul>
                            <li>Biometric authentication (fingerprint/face)</li>
                            <li>Two-factor authentication</li>
                            <li>OTP verification system</li>
                            <li>Data encryption and secure storage</li>
                            <li>AI-powered chat assistant for health queries</li>
                            <li>Offline data synchronization</li>
                            <li>Real-time notifications</li>
                            <li>Cross-platform compatibility</li>
                        </ul>
                    </div>
                    
                    <div class="project-technologies">
                        <h4>Technologies Used</h4>
                        <div class="tech-stack">
                            <span class="tech-tag">Flutter</span>
                            <span class="tech-tag">Dart</span>
                            <span class="tech-tag">Firebase</span>
                            <span class="tech-tag">SQLite</span>
                            <span class="tech-tag">REST APIs</span>
                            <span class="tech-tag">AI/ML Integration</span>
                        </div>
                    </div>
                    
                    <div class="project-highlights">
                        <h4>Technical Highlights</h4>
                        <ul>
                            <li>Integrated AI chatbot for patient assistance</li>
                            <li>Implemented end-to-end encryption</li>
                            <li>Developed offline-first architecture</li>
                            <li>Created intuitive mobile UI/UX design</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'pos-system': {
            title: 'Samgyupsal POS & Inventory System',
            content: `
                <div class="project-details">
                    <div class="project-overview">
                        <h4>Project Overview</h4>
                        <p>Developed a comprehensive point-of-sale and inventory management system tailored for a Korean barbecue restaurant. Features sales tracking, order management, inventory monitoring, and automated reporting.</p>
                    </div>
                    
                    <div class="project-features">
                        <h4>Key Features</h4>
                        <ul>
                            <li>Real-time sales tracking and reporting</li>
                            <li>Order management with kitchen display</li>
                            <li>Inventory monitoring with low-stock alerts</li>
                            <li>Automated stock updates and reporting</li>
                            <li>Customer management system</li>
                            <li>Daily, weekly, and monthly sales reports</li>
                            <li>Receipt printing and digital receipts</li>
                            <li>Multi-payment method support</li>
                        </ul>
                    </div>
                    
                    <div class="project-technologies">
                        <h4>Technologies Used</h4>
                        <div class="tech-stack">
                            <span class="tech-tag">Java</span>
                            <span class="tech-tag">MySQL</span>
                            <span class="tech-tag">JavaFX</span>
                            <span class="tech-tag">JDBC</span>
                            <span class="tech-tag">JasperReports</span>
                        </div>
                    </div>
                    
                    <div class="project-impact">
                        <h4>Business Impact</h4>
                        <ul>
                            <li>Reduced order processing time by 40%</li>
                            <li>Improved inventory accuracy by 95%</li>
                            <li>Automated reporting saved 10 hours/week</li>
                            <li>Enhanced customer service efficiency</li>
                        </ul>
                    </div>
                </div>
            `
        },

    };

    // Project card click handlers
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectKey = this.getAttribute('data-project');
            const project = projectData[projectKey];
            
            if (project) {
                modalTitle.textContent = project.title;
                modalContent.innerHTML = project.content;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Modal close handlers
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Handle all modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modal.classList.contains('active')) {
                closeModal();
            }
        }
    });

    // Contact form handling with EmailJS
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Simple form validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Send email using EmailJS
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // EmailJS send function
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'magcayangjonel25@gmail.com'
        }).then(function(response) {
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
            contactForm.reset();
        }, function(error) {
            console.error('EmailJS error:', error);
            // Fallback: mailto link
            const mailtoLink = `mailto:magcayangjonel25@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent('Name: ' + formData.name + '\nEmail: ' + formData.email + '\n\nMessage:\n' + formData.message)}`;
            window.location.href = mailtoLink;
            showNotification('Opening your email client...', 'info');
        }).finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    });

    // Download resume functionality - removed old handler

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    document.querySelectorAll('.project-card, .certificate-card, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Loading animation
    window.addEventListener('load', function() {
        const loadingElements = document.querySelectorAll('.fade-in-up');
        loadingElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Typing effect for hero title (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Add hover effects for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Skills animation on scroll
    function animateSkills() {
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.opacity = '1';
                tag.style.transform = 'scale(1)';
            }, index * 50);
        });
    }

    // Trigger skills animation when resume section is in view
    const resumeSection = document.querySelector('#resume');
    if (resumeSection) {
        const resumeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    resumeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        resumeObserver.observe(resumeSection);
    }
});

// CSS animations for skill tags
document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8)';
        tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;

        // Set colors based on type
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#3b82f6'
        };
        notification.style.backgroundColor = colors[type] || colors.info;

        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }

    // Slideshow functionality
    window.changeSlide = function(button, direction) {
        const slideshow = button.closest('.project-slideshow');
        const slides = slideshow.querySelectorAll('.slide');
        const dots = slideshow.querySelectorAll('.slideshow-dot');
        const currentActive = slideshow.querySelector('.slide.active');
        const currentIndex = Array.from(slides).indexOf(currentActive);
        
        let newIndex = currentIndex + direction;
        if (newIndex >= slides.length) newIndex = 0;
        if (newIndex < 0) newIndex = slides.length - 1;
        
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to new slide and dot
        slides[newIndex].classList.add('active');
        dots[newIndex].classList.add('active');
    };

    window.currentSlide = function(dot, slideNumber) {
        const slideshow = dot.closest('.project-slideshow');
        const slides = slideshow.querySelectorAll('.slide');
        const dots = slideshow.querySelectorAll('.slideshow-dot');
        
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to selected slide and dot
        slides[slideNumber - 1].classList.add('active');
        dots[slideNumber - 1].classList.add('active');
    };

    // Auto slideshow (optional)
    function startAutoSlideshow() {
        const slideshows = document.querySelectorAll('.project-slideshow');
        
        slideshows.forEach(slideshow => {
            let autoSlideInterval;
            
            function startAuto() {
                autoSlideInterval = setInterval(() => {
                    const nextBtn = slideshow.querySelector('.slideshow-next');
                    if (nextBtn) changeSlide(nextBtn, 1);
                }, 5000);
            }
            
            function stopAuto() {
                clearInterval(autoSlideInterval);
            }
            
            // Start auto slideshow
            startAuto();
            
            // Pause on hover
            slideshow.addEventListener('mouseenter', stopAuto);
            slideshow.addEventListener('mouseleave', startAuto);
        });
    }
    
    // Initialize auto slideshow
    startAutoSlideshow();

    // Certificate data
    const certificateData = {
        'artificial-intelligence': {
            name: 'Artificial Intelligence Fundamentals',
            issuer: 'Professional Development',
            date: '2025',
            image: 'images/certificates/artificial-intelligence.jpg'
        },
        'cyber-security': {
            name: 'Cybersecurity Fundamentals',
            issuer: 'Professional Development',
            date: '2025',
            image: 'images/certificates/cyber-security.jpg'
        },
        'ileap-intellectual-property': {
            name: 'iLEAP Intellectual Property',
            issuer: 'iLEAP Program',
            date: '2025',
            image: 'images/certificates/ileap-intellectual-property.jpg'
        },
        'microsoft-ai': {
            name: 'Microsoft Artificial Intelligence Course (Azure AI Fundamentals)',
            issuer: 'Microsoft',
            date: '2025',
            image: 'images/certificates/microsoft-ai.jpg'
        },
        'network-troubleshooting': {
            name: 'Network Addressing and Basic Troubleshooting',
            issuer: 'Cisco Networking Academy',
            date: '2025',
            image: 'images/certificates/network-troubleshooting.jpg'
        },
        'salesforce': {
            name: 'Salesforce Supported Virtual Internship Program 2025',
            issuer: 'Salesforce',
            date: '2025',
            image: 'images/certificates/salesforce.jpg'
        }
    };

    // Certificate modal functions
    window.openCertificateModal = function(certificateId) {
        const certificate = certificateData[certificateId];
        if (!certificate) return;

        const modal = document.getElementById('certificateModal');
        const modalImage = document.getElementById('certificateModalImage');
        const modalName = document.getElementById('certificateModalName');
        const modalIssuer = document.getElementById('certificateModalIssuer');
        const modalDate = document.getElementById('certificateModalDate');

        modalImage.src = certificate.image;
        modalImage.alt = certificate.name;
        modalName.textContent = certificate.name;
        modalIssuer.textContent = certificate.issuer;
        modalDate.textContent = certificate.date;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeCertificateModal = function() {
        const modal = document.getElementById('certificateModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    // Close certificate modal when clicking outside
    const certificateModal = document.getElementById('certificateModal');
    if (certificateModal) {
        certificateModal.addEventListener('click', function(e) {
            if (e.target === certificateModal) {
                closeCertificateModal();
            }
        });
    }

    // Close certificate modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const certificateModal = document.getElementById('certificateModal');
            if (certificateModal && certificateModal.classList.contains('active')) {
                closeCertificateModal();
            }
        }
    });

    // Add this CSS for the active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #000000 !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }    .project-details h4 {
        color: #000000;
        font-size: 1.25rem;
        margin: 1.5rem 0 1rem 0;
        font-weight: 600;
    }
    
    .project-details h5 {
        color: #000000;
        font-size: 1.1rem;
        margin: 1rem 0 0.5rem 0;
        font-weight: 600;
    }
    
    .project-details h6 {
        color: #333333;
        font-size: 1rem;
        margin: 0.5rem 0 0.25rem 0;
        font-weight: 600;
    }
    
    .project-details ul {
        margin-left: 1.5rem;
        margin-bottom: 1rem;
    }
    
    .project-details li {
        margin-bottom: 0.5rem;
        line-height: 1.6;
    }
    
    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
    
    .tech-tag {
        background: #e0e0e0;
        color: #000000;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.875rem;
        font-weight: 500;
    }
    
    .design-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }
    
    .design-category {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 8px;
        border-left: 4px solid #000000;
    }
    
    .app-showcase {
        margin-top: 1rem;
    }
    
    .app-design {
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: #f5f5f5;
        border-radius: 8px;
    }
    
    .process-steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }
    
    .step {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
    }
`;
document.head.appendChild(style);

});

// Universal modal close button handler
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-close') || e.target.innerHTML === '×') {
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Resume Download Functionality - Ensure download works
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadResume');
    
    if (downloadBtn) {
        // Force download functionality
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent any default behavior
            
            // Create a new download link to avoid any caching issues
            const link = document.createElement('a');
            link.href = 'assets/Jonel_Magcayang_Resume.pdf?' + new Date().getTime(); // Add timestamp to avoid cache
            link.download = 'Jonel_Magcayang_Resume.pdf';
            link.style.display = 'none';
            
            // Add to DOM, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show notification if available
            if (typeof showNotification !== 'undefined') {
                showNotification('Resume download started!', 'success');
            }
        });
    }
});