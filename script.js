// Customizing Tailwind theme
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Montserrat"', 'sans-serif'],
                serif: ['"Syncopate"', 'sans-serif'],
            },
            colors: {
                wood: {
                    50: '#f9f8f6',
                    100: '#f1ede9',
                    200: '#e3dcd5',
                    300: '#d0c3b8',
                    400: '#bba697',
                    500: '#a78b79',
                    600: '#957663',
                    700: '#7d6152',
                    800: '#675146',
                    900: '#2a221f', // Dark, almost charcoal/coffee
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Close mobile menu when a link is clicked
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('main-nav');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg', 'bg-wood-900/95');
                nav.classList.remove('bg-wood-900/0'); // If we wanted transparent start
            } else {
                nav.classList.remove('shadow-lg');
            }
        }
    });

    // Intersection Observer for scroll animations (reveal-on-scroll)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));
});
