// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}, { passive: true });

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('open');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
});

// Close menu when a link is clicked
document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            navbar.classList.remove('active');
            menuToggle.classList.remove('open');
            document.body.style.overflow = '';
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

// ===== DROPDOWN FOR MOBILE =====
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', function (e) {
        if (window.innerWidth <= 900) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// ===== ACTIVE NAV LINK =====
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
        }
    });
}, { root: null, rootMargin: '0px', threshold: 0.12 });

document.querySelectorAll('.service-container, .scroll-reveal-item').forEach((el, i) => {
    el.style.setProperty('--animation-delay', `${i * 0.15}s`);
    observer.observe(el);
});

// ===== CLOSE MENU ON OUTSIDE CLICK =====
document.addEventListener('click', (e) => {
    if (navbar.classList.contains('active') &&
        !navbar.contains(e.target) &&
        !menuToggle.contains(e.target)) {
        navbar.classList.remove('active');
        menuToggle.classList.remove('open');
        document.body.style.overflow = '';
        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
});
