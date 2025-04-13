// Initialize Particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    move: { enable: true, speed: 2.4, direction: 'none', random: true }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: 'repulse' } }
  }
});

// Profile Modal
const modal = document.getElementById('profile-modal');
const btn = document.getElementById('profile-btn');
const closeBtn = document.getElementById('close-modal');

btn.onclick = function() {
  modal.style.display = 'block';
};

closeBtn.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.sidebar-toggle');

toggle.onclick = function() {
  sidebar.classList.toggle('active');
};

// Active Navigation and Smooth Scroll Offset
const navLinks = document.querySelectorAll('.sidebar a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 50, // Offset for margin
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 80) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});
// Sidebar toggle functionality
document.querySelector('.sidebar-toggle').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
  adjustBackground(); // Adjust background when toggling
});

// Adjust background and text visibility
function adjustBackground() {
  const sidebar = document.getElementById('sidebar');
  const isMobile = window.innerWidth <= 768;
  const particles = document.getElementById('particles-js');

  if (isMobile && !sidebar.classList.contains('active')) {
    particles.style.opacity = 0.1; // Minimize background visibility
    particles.style.pointerEvents = 'none'; // Prevent interaction
  } else {
    particles.style.opacity = 0.5; // Restore default opacity
    particles.style.pointerEvents = 'auto';
  }
}

// Run on load, resize, and scroll
window.addEventListener('load', adjustBackground);
window.addEventListener('resize', adjustBackground);
window.addEventListener('scroll', adjustBackground); // Adjust on scroll

// particlesJS configuration
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#26A69A' },
    shape: { type: 'circle' }, // Ensure no text shapes
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, color: '#26A69A', opacity: 0.4 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' } }
  }
});
// particlesJS configuration (if not already set)
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#26A69A' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, color: '#26A69A', opacity: 0.4 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' } }
  }
});