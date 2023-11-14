let listItems = document.querySelectorAll('.list-of-services__item');
let descriptionItem = document.querySelectorAll('.list-of-services-description');
let list = document.getElementsByClassName('list-of-services')[0];

list.addEventListener('click', function (event) {
    listItems.forEach(function (item) {
      item.classList.remove('services-active');
    });
    event.target.classList.add('services-active');
    descriptionItem.forEach(function (item) {
      item.classList.remove('services-description-active');
      if (event.target.getAttribute('data-name') === item.getAttribute('data-name')) {
        item.classList.add('services-description-active');
      }
    })
   
});

