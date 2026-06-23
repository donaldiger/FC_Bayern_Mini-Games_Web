// Loader
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.classList.add('fade-out');
  }, 1000);
});

// Header scroll effect
let lastScroll = window.scrollY;
let isScrollingUp = false;

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const currentScroll = window.scrollY;
  const bottom = document.documentElement.scrollHeight - window.innerHeight;

  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  if (currentScroll < lastScroll && currentScroll > 60 && currentScroll < bottom - 10) {
    header.classList.remove('hide');
    isScrollingUp = true;
  } else if (currentScroll > lastScroll && currentScroll > 60) {
    header.classList.add('hide');
    isScrollingUp = false;
  }

  lastScroll = currentScroll;
});

// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.slideshow-dots');
  let currentSlide = 0;
  const slideInterval = 4000; // 5 seconds
  
  // Create dots
  slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
    dotsContainer.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.dot');
  
  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }
  
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }
  
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }
  
  // Button events
  document.querySelector('.next-btn').addEventListener('click', nextSlide);
  document.querySelector('.prev-btn').addEventListener('click', prevSlide);
  
  // Start slideshow
  let slideTimer = setInterval(nextSlide, slideInterval);
  
  // Pause on hover
  const slideshow = document.querySelector('.slideshow-container');
  slideshow.addEventListener('mouseenter', () => {
    clearInterval(slideTimer);
  });
  
  slideshow.addEventListener('mouseleave', () => {
    slideTimer = setInterval(nextSlide, slideInterval);
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Animate elements when they come into view
const animateOnScroll = function() {
  const elements = document.querySelectorAll('.intro-card, .arena-image, .game-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 80) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
  document.querySelectorAll('.request-card').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
};

// Set initial state for animated elements
window.addEventListener('load', function() {
  const elements = document.querySelectorAll('.intro-card, .arena-image, .game-card');
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  document.querySelectorAll('.request-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
  });
  
  // Trigger once on load
  animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

document.getElementById('showStadiumBtn').addEventListener('click', () => {
  const section = document.getElementById('stadiumSection');
  const img     = document.getElementById('stadiumImage');
  const message = document.getElementById('stadiumMessage');

  section.classList.toggle('visible');

  if (section.classList.contains('visible')) {
    showStadiumBtn.textContent = "Hide stadium";
    message.style.display = 'block';
    setTimeout(() => {
      img.classList.add('visible');
    }, 50);
  } else {
    img.classList.remove('visible');
    showStadiumBtn.textContent = "Show Stadium";
    message.style.display = 'none';
  }
});
