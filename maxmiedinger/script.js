document.addEventListener('DOMContentLoaded', function() {
  const featureLetters = ['G', 'R', 'a'];
  let currentLetterIndex = 0;
  const letterDisplays = document.querySelectorAll('.giant-letter');
  
  letterDisplays.forEach(display => {
    display.addEventListener('click', function() {
      currentLetterIndex = (currentLetterIndex + 1) % featureLetters.length;
      letterDisplays.forEach(el => {
        el.textContent = featureLetters[currentLetterIndex];
      });
    });
  });
  
  const weightLetters = document.querySelectorAll('.weight-letter');
  const weights = ['300', 'normal', 'bold'];
  let currentWeightIndex = 1;
  
  function updateWeight() {
    weightLetters.forEach(letter => {
      letter.style.fontWeight = weights[currentWeightIndex];
    });
  }
  
  updateWeight();
  
  const weightContainer = document.querySelector('.weight-letters');
  weightContainer.addEventListener('click', function() {
    currentWeightIndex = (currentWeightIndex + 1) % weights.length;
    updateWeight();
  });
  
  const fadeElements = document.querySelectorAll('h1, h2, p, .title, .giant-letter, .weight-letter, .fade-in, .work-item');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    root: null,
    threshold: 0.15,
    rootMargin: '-50px'
  });
  
  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });

  const helveticaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('epic-reveal');
        entry.target.classList.add('visible');
        helveticaObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '-100px'
  });
  
  const helveticaTitle = document.querySelector('.text-reveal h1');
  const helveticaQuote = document.querySelector('.text-reveal p');
  
  if (helveticaTitle) helveticaObserver.observe(helveticaTitle);
  if (helveticaQuote) helveticaObserver.observe(helveticaQuote);
  
  const textRevealSection = document.querySelector('.text-reveal');
  if (textRevealSection) {
    const revealSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          setTimeout(() => {
            entry.target.classList.add('active');
          }, 300);
        } else {
          entry.target.classList.remove('active');
          setTimeout(() => {
            entry.target.classList.remove('in-view');
          }, 300);
        }
      });
    }, {
      threshold: 0.4
    });
    
    revealSectionObserver.observe(textRevealSection);
  }
});


// Add this code to the end of your script.js file, inside the DOMContentLoaded event listener

// Initialize new sections for animation
const gallerySections = document.querySelectorAll('.gallery-section h2, .gallery-section p, .logo-item, .public-item, .swiss-item');
gallerySections.forEach(element => {
  fadeObserver.observe(element);
});

// Add hover animation for Swiss design examples
const swissItems = document.querySelectorAll('.swiss-item');
swissItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.classList.add('hover');
  });
  
  item.addEventListener('mouseleave', function() {
    this.classList.remove('hover');
  });
});


