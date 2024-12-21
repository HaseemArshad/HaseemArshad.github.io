// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth',
        });
      }
    });
  });
  
  // Hover Pulse Animation (Using Animate.css)
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('animate__pulse');
    });
  
    card.addEventListener('mouseleave', () => {
      card.classList.remove('animate__pulse');
    });
  });
  