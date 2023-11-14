let workList = document.getElementById('work-menu');
let workListItem = document.querySelectorAll('.our-amazing-work__list-item');
let imageBlock = document.querySelectorAll('.our-amazing-work-wrapper');
let workContainer = document.getElementsByClassName('our-amazing-work-images-container')[0];

//-------------------------Top list sort

workList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        workListItem.forEach(function (item) {
            item.classList.remove('work-active');
        });
        event.target.classList.add('work-active');
        imageBlock.forEach(function (item) {
            item.style.display = 'none';
            if (event.target.getAttribute('data-name') === item.getAttribute('data-name')) {
                item.style.display = 'flex';
            } else if (event.target.getAttribute('data-name') === 'work-all') {
                item.style.display = 'flex';
            }
        });
        if (event.target.getAttribute('data-name') !== 'work-all') {
            workContainer.style.width = "900px";
        } else {
            workContainer.style.width = "1150px";
        } 
    }

});

//------------------------------Button 

let workButton = document.getElementById('work-button');
workButton.addEventListener('click', function () {
    workButton.style.display = 'none';
    workContainer.insertAdjacentHTML('beforeend', HTML)

    imageBlock = document.querySelectorAll('.our-amazing-work-wrapper');
    let workActive = document.getElementsByClassName('work-active')[0];
    console.log(workActive);
    imageBlock.forEach(function (item) {
        item.style.display = 'none';
        if (item.getAttribute('data-name') === workActive.getAttribute('data-name')) {
            item.style.display = 'flex';
        } else if (workActive.getAttribute('data-name') === 'work-all') {
            item.style.display = 'flex';
        }
    })
});



let HTML = `
<div id="test" class="our-amazing-work-wrapper" data-name="work-graphic"><div class="work-hidden">
<div>
    <a href="#"><img class="work-hidden__icon" src="images/icon empty.png" alt=""></a>
    <a href="#"><img class="work-hidden__icon" src="images/icon.png" alt=""></a>
</div>
<h3>creative design</h3>
</div><img class="work-image" src="images/work/13.jpg" alt=""></div>
<div class="our-amazing-work-wrapper" data-name="work-graphic"><div class="work-hidden">
<div>
    <a href="#"><img class="work-hidden__icon" src="images/icon empty.png" alt=""></a>
    <a href="#"><img class="work-hidden__icon" src="images/icon.png" alt=""></a>
</div>
<h3>creative design</h3>
</div><img class="work-image" src="images/work/14.jpg" alt=""></div>
<div class="our-amazing-work-wrapper" data-name="work-graphic"><div class="work-hidden">
<div>
    <a href="#"><img class="work-hidden__icon" src="images/icon empty.png" alt=""></a>
    <a href="#"><img class="work-hidden__icon" src="images/icon.png" alt=""></a>
</div>
<h3>creative design</h3>
</div><img class="work-image" src="images/work/15.jpg" alt=""></div>
<div class="our-amazing-work-wrapper" data-name="work-web"><div class="work-hidden">
<div>
    <a href="#"><img class="work-hidden__icon" src="images/icon empty.png" alt=""></a>
    <a href="#"><img class="work-hidden__icon" src="images/icon.png" alt=""></a>
</div>
<h3>creative design</h3>
</div><img class="work-image" src="images/work/16.jpg" alt=""></div>
<div class="our-amazing-work-wrapper" data-name="work-web"><div class="work-hidden">
<div>
    <a href="#"><img class="work-hidden__icon" src="images/icon empty.png" alt=""></a>
    <a href="#"><img class="work-hidden__icon" src="images/icon.png" alt=""></a>
</div>
<h3>creative design</h3>
</div><img class="work-image" src="images/work/17.jpg" alt=""></div>
<div class="our-amazing-work-wrapper" data-name="work-web"><div class="work-hidden">
<div>
    <a href="#"><img class="work-hidden__icon" src="images/icon empty.png" alt=""></a>
    <a href="#"><img class="work-hidden__icon" src="images/icon.png" alt=""></a>
</div>
<h3>creative design</h3>
</div><img class="work-image" src="images/work/18.jpg" alt=""></div>
<div class="our-amazing-work-wrapper" data-name="work-landing"><div class="work-hidden">
<div>
    <a href="#"><img class="work-hidden__icon" src="images/icon empty.png" alt=""></a>
    <a href="#"><img class="work-hidden__icon" src="images/icon.png" alt=""></a>
</div>
<h3>creative design</h3>
</div><img class="work-image" src="images/work/19.jpg" alt=""></div>
<div class="our-amazing-work-wrapper" data-name="work-landing"><div class="work-hidden">
<div>
    <a href="#"><img class="work-hidden__icon" src="images/icon empty.png" alt=""></a>
    <a href="#"><img class="work-hidden__icon" src="images/icon.png" alt=""></a>
</div>
<h3>creative design</h3>
</div><img class="work-image" src="images/work/20.jpg" alt=""></div>
<div class="our-amazing-work-wrapper" data-name="work-landing"><div class="work-hidden">
<div>
    <a href="#"><img class="work-hidden__icon" src="images/icon empty.png" alt=""></a>
    <a href="#"><img class="work-hidden__icon" src="images/icon.png" alt=""></a>
</div>
<h3>creative design</h3>
</div><img class="work-image" src="images/work/21.jpg" alt=""></div>
<div class="our-amazing-work-wrapper" data-name="work-press"><div class="work-hidden">
<div>
    <a href="#"><img class="work-hidden__icon" src="images/icon empty.png" alt=""></a>
    <a href="#"><img class="work-hidden__icon" src="images/icon.png" alt=""></a>
</div>
<h3>creative design</h3>
</div><img class="work-image" src="images/work/22.jpg" alt=""></div>
<div class="our-amazing-work-wrapper" data-name="work-press"><div class="work-hidden">
<div>
    <a href="#"><img class="work-hidden__icon" src="images/icon empty.png" alt=""></a>
    <a href="#"><img class="work-hidden__icon" src="images/icon.png" alt=""></a>
</div>
<h3>creative design</h3>
</div><img class="work-image" src="images/work/23.jpg" alt=""></div>
<div class="our-amazing-work-wrapper" data-name="work-press"><div class="work-hidden">
<div>
    <a href="#"><img class="work-hidden__icon" src="images/icon empty.png" alt=""></a>
    <a href="#"><img class="work-hidden__icon" src="images/icon.png" alt=""></a>
</div>
<h3>creative design</h3>
</div><img class="work-image" src="images/work/24.jpg" alt=""></div>
`;

