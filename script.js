// Updated Mobile menu and Hamburger animation toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    // Toggles the 'active' class on both the button (for icon) and nav (for menu)
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Auto-close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
