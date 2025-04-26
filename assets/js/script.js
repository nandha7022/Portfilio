// Typing Animation
var typed = new Typed('#typed', {
    strings: ['Data Analyst', 'Storyteller through Data', 'SQL | Python | Power BI Expert'],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });
  
  // Particles.js Init (only for index.html)
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#64ffda" },
        shape: { type: "circle", stroke: { width: 0, color: "#000" }},
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#64ffda", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 3, direction: "none", out_mode: "out" }
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }},
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 }}
      },
      retina_detect: true
    });
  }
  
  // Preloader
  window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    preloader.style.transition = 'opacity 0.5s ease';
  });
  
  // Portfolio Filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      const category = button.getAttribute('data-category');
      projectItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      themeToggle.textContent = "🌚";
    } else {
      themeToggle.textContent = "🌞";
    }
  });
  