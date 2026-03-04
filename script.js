// ==================== MENU DATA ====================
const menuData = [
    {
        name: 'Espresso',
        category: 'espresso',
        description: 'Pure, concentrated coffee shots',
        price: 3.50,
        icon: '☕',
        badge: 'Classic'
    },
    {
        name: 'Americano',
        category: 'espresso',
        description: 'Espresso with hot water',
        price: 4.00,
        icon: '☕',
        badge: 'Popular'
    },
    {
        name: 'Cappuccino',
        category: 'latte',
        description: 'Rich espresso with steamed milk',
        price: 5.00,
        icon: '🥛',
        badge: 'Classic'
    },
    {
        name: 'Latte',
        category: 'latte',
        description: 'Smooth espresso with velvety milk',
        price: 4.75,
        icon: '🥛',
        badge: 'Best Seller'
    },
    {
        name: 'Mocha',
        category: 'latte',
        description: 'Espresso with chocolate and milk',
        price: 5.50,
        icon: '🍫',
        badge: 'Best Seller'
    },
    {
        name: 'Macchiato',
        category: 'espresso',
        description: 'Espresso marked with milk foam',
        price: 4.50,
        icon: '☕',
        badge: null
    },
    {
        name: 'Cold Brew',
        category: 'specialty',
        description: 'Smooth, chilled coffee concentrate',
        price: 4.25,
        icon: '🧊',
        badge: 'Popular'
    },
    {
        name: 'Caramel Macchiato',
        category: 'specialty',
        description: 'Sweet caramel with espresso & milk',
        price: 5.75,
        icon: '✨',
        badge: 'Best Seller'
    },
    {
        name: 'Iced Latte',
        category: 'specialty',
        description: 'Creamy latte served over ice',
        price: 4.75,
        icon: '🧊',
        badge: 'Summer Pick'
    },
    {
        name: 'Cortado',
        category: 'espresso',
        description: 'Equal parts espresso and milk',
        price: 4.25,
        icon: '☕',
        badge: null
    },
    {
        name: 'Flat White',
        category: 'latte',
        description: 'Velvety espresso and microfoam',
        price: 5.25,
        icon: '🥛',
        badge: 'Popular'
    },
    {
        name: 'Affogato',
        category: 'specialty',
        description: 'Espresso poured over vanilla ice cream',
        price: 6.00,
        icon: '🍦',
        badge: 'Specialty'
    }
];

// ==================== HAMBURGER MENU ====================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// ==================== MENU RENDERING ====================
function renderMenu(filterCategory = 'all') {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    menuGrid.innerHTML = '';

    const filteredItems = filterCategory === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === filterCategory);

    filteredItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s both`;

        card.innerHTML = `
            <div class="menu-card-image">${item.icon}</div>
            <div class="menu-card-content">
                <h3 class="menu-card-title">${item.name}</h3>
                <p class="menu-card-description">${item.description}</p>
                <div>
                    <span class="menu-card-price">$${item.price.toFixed(2)}</span>
                    ${item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : ''}
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

// ==================== FILTER BUTTONS ====================
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        // Filter menu
        const filterValue = this.getAttribute('data-filter');
        renderMenu(filterValue);
    });
});

// Initial menu render
renderMenu();

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements that need scroll animation
document.querySelectorAll('.menu-card, .testimonial-card, .feature-item').forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
});

// ==================== EXPLORE BUTTON ====================
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', function() {
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ==================== ACTIVE NAV LINK ====================
window.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Simple validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }

        // Simulate form submission
        const button = contactForm.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Sending...';
        button.disabled = true;

        setTimeout(() => {
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            contactForm.reset();
            button.textContent = originalText;
            button.disabled = false;
        }, 1500);
    });
}

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideIn 0.4s ease-out;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.4s ease-out';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #8B4513, #D2691E);
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    font-size: 1.5rem;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== HOVER EFFECTS ====================
const menuCards = document.querySelectorAll('.menu-card');
menuCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== COUNTER ANIMATION ====================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    let increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', function(e) {
    // Press 'H' for home
    if (e.key.toLowerCase() === 'h') {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
    // Press 'M' for menu
    if (e.key.toLowerCase() === 'm') {
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    }
    // Press 'C' for contact
    if (e.key.toLowerCase() === 'c') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
});

// ==================== ANIMATIONS STYLESHEET ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .scroll-top-btn:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4) !important;
    }

    @media (max-width: 768px) {
        .scroll-top-btn {
            width: 45px !important;
            height: 45px !important;
            bottom: 20px !important;
            right: 20px !important;
        }
    }
`;
document.head.appendChild(style);

// ==================== PERFORMANCE OPTIMIZATION ====================
// Lazy load images when available
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== CONSOLE MESSAGE ====================
console.log('%c🎉 Welcome to BrewMaster Coffee Shop!', 'font-size: 20px; color: #D2691E; font-weight: bold;');
console.log('%cEnjoy our premium coffee selection and experience the finest artisan coffee.', 'font-size: 14px; color: #8B4513;');
