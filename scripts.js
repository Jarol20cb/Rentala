document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mainNav = document.querySelector('.main-nav ul');
  
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
  });
  