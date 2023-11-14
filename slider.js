let sliderTop = document.querySelectorAll('.slider-active-top');
let sliderBottom = document.querySelectorAll('.slider__item');
let sliderButtonPrev = document.getElementById('previous-button');
let sliderButtonNext = document.getElementById('next-button');
let slider = document.querySelector('.slider');
let currentIndex;
let workDescription = document.querySelectorAll('.description');



//------------------------------CLICK

slider.addEventListener('click', function (event) {
  if (event.target.tagName === 'IMG') {
  sliderBottom.forEach(function (item) {
    item.classList.remove('slider-active');

  });
  event.target.classList.add('slider-active');
  sliderTop.forEach(function (item) {
    item.classList.remove('slider-show-element');
    if (event.target.getAttribute('data-name') === item.getAttribute('data-name')) {
      item.classList.add('slider-show-element');
      }
  });
};

animatedText();
});

//-------------------------BUTTON NEXT

sliderButtonNext.addEventListener('click', function () {
  sliderBottom.forEach(function (item, index) {
    if (item.classList.contains('slider-active')) {
      currentIndex = index;
    };
  });
  sliderBottom[currentIndex].classList.remove('slider-active');
  if (currentIndex >= sliderBottom.length -1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  sliderBottom[currentIndex].classList.add('slider-active');
  sliderTop.forEach(function (item) {
    item.classList.remove('slider-show-element');
    if (sliderBottom[currentIndex].getAttribute('data-name') === item.getAttribute('data-name')) {
      item.classList.add('slider-show-element');
    }
  });

animatedText();
});

//-------------------------BUTTON PREV

sliderButtonPrev.addEventListener('click', function () {
  sliderBottom.forEach(function (item, index) {
    if (item.classList.contains('slider-active')) {
      currentIndex = index;
    };
    
  });
  sliderBottom[currentIndex].classList.remove('slider-active');

  if (currentIndex <= 0) {
    currentIndex = sliderBottom.length -1;
  } else {
    currentIndex -= 1;
  }
  sliderBottom[currentIndex].classList.add('slider-active');
  sliderTop.forEach(function (item) {
    item.classList.remove('slider-show-element');
    if (sliderBottom[currentIndex].getAttribute('data-name') === item.getAttribute('data-name')) {
      item.classList.add('slider-show-element');
    }
  });
  
  animatedText();
});

//--------------------------ANIMATION

function animatedText() {
  workDescription.forEach(function animatedText (descItem) {
    let topActive = document.querySelector('.slider-show-element');
    if (descItem.getAttribute('data-name') === topActive.getAttribute('data-name')) {
      console.log(descItem);
  
      let index = 0;
      let textContent = descItem.textContent;
  
      function draw() {
        descItem.textContent = textContent.slice(0, index + 1);
        if (index < textContent.length - 1) {
          index += 1;
          setTimeout(draw, 50);
        }
      }
  
      draw();
    }
  });
};
