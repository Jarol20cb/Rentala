document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const mainNav = document.querySelector('.main-nav ul');
  const header = document.querySelector('header');

  mobileMenuIcon.addEventListener('click', function() {
    mainNav.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
    if (!mobileMenuIcon.contains(event.target) && !mainNav.contains(event.target)) {
      mainNav.classList.remove('show');
    }
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('show');
    });
  });

  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });

  // Smooth scroll for menu links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});
