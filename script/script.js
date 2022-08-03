// Кастомный селект 
const element = document.querySelector('#select');
const choices = new Choices(element, {
  searchEnabled: false,
  addItems: true,
  itemSelectText: '',
});
// 

// Aккордион 
document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion__list', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  showMultiple: false
});
})
//   

// slide 
const swiper = new Swiper('.swiper', {
  speed: 400,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
    },
  slidesPerView: 4,
  spaceBetween: 30,

});
// 

let enterBtn = document.querySelector('.head-container__btn-input');
let enterBlock = document.querySelector('.head-container__entrance-block');


enterBtn.addEventListener('click', function() {
  enterBlock.classList.toggle('head-container__entrance-block--active')
});

let escBlock = document.querySelector('.head-container__btn-esc-entr');

escBlock.addEventListener('click', function() {
  enterBlock.classList.remove('head-container__entrance-block--active');
});

let serchBtn = document.querySelector('.head-container__btn-search');
let blockSearch = document.querySelector('.head-container__search-block')

serchBtn.addEventListener('click', function() {
  blockSearch.classList.add('head-container__search-block--active')
})

let body = document.querySelector('.head-container')
