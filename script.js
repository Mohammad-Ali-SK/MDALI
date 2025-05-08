// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('.navbar-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Project filter button highlight
const filterBtns = document.querySelectorAll('.projects-filter .btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    // For demo: no actual filtering
  });
});

// Education accordion functionality
const educationItems = document.querySelectorAll('.education-item');
const educationHeaders = document.querySelectorAll('.education-header, .toggle-btn');

educationHeaders.forEach((header, index) => {
  header.addEventListener('click', function() {
    // Get the parent education item
    const parentItem = this.closest('.education-item');
    
    // Toggle active class on the clicked item
    const isActive = parentItem.classList.contains('active');
    
    // Close all items first
    educationItems.forEach(item => {
      item.classList.remove('active');
    });
    
    // If the clicked item wasn't active, make it active
    if (!isActive) {
      parentItem.classList.add('active');
    }
  });
});

// Contact form demo handler

// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//   contactForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Thank you for your message! (Demo only)');
//     contactForm.reset();
//   });
// }