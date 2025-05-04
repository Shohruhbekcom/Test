// 1. Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // 2. (Optional) Mobile Menu Toggle – for future use
  // Example structure:
  // <div class="burger" id="burger">☰</div>
  // <ul class="nav-links" id="nav-links">...</ul>
  
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');
  
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  
  // 3. (Optional) Form validation (basic check)
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = form.querySelector('input[type="text"]');
      const email = form.querySelector('input[type="email"]');
      const message = form.querySelector('textarea');
  
      if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        alert('Bitte alle Felder ausfüllen.');
      }
    });
  }
  