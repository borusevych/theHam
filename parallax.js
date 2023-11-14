document.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const parallaxLayer = document.querySelector('.parallax-layer');
    parallaxLayer.style.transform = `translateY(${scrollTop * 0.5}px)`;
  });


