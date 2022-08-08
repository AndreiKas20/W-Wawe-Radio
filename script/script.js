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


var wi = window.innerWidth;
if (wi < 1300) { 
  if(wi < 1197) {
    const swiper = new Swiper('.swiper', {
      speed: 400,
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
        },
      slidesPerView: 2,
      spaceBetween: 30,
    
    });
  } else {
    const swiper = new Swiper('.swiper', {
      speed: 400,
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
        },
      slidesPerView: 3,
      spaceBetween: 170,
    
    });
  }
} else {
  const swiper = new Swiper('.swiper', {
    speed: 400,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
      },
    slidesPerView: 4,
    spaceBetween: 30,
  
  });
}



// 
// Блок входа
let enterBtn = document.querySelector('.head-container__btn-input');
let enterBlock = document.querySelector('.head-container__entrance-block');


enterBtn.addEventListener('click', function() {
  enterBlock.classList.toggle('head-container__entrance-block--active')
});

let escBlock = document.querySelector('.head-container__btn-esc-entr');

escBlock.addEventListener('click', function() {
  enterBlock.classList.remove('head-container__entrance-block--active');
});
// 
// Блок поиска
let serchBtn = document.querySelector('.head-container__btn-search');
let blockSearch = document.querySelector('.head-container__search-block')

serchBtn.addEventListener('click', function() {
blockSearch.classList.add('head-container__search-block--active')
})
let main = document.querySelector('.main-content');

main.addEventListener('click', function(e) {
  if (blockSearch.classList.value === 'head-container__search-block head-container__search-block--active') {
    let block = e.composedPath().includes(blockSearch);
    if (!block) {
      blockSearch.classList.remove('head-container__search-block--active')
  }
  }
})
// 

// Добавление двух элементов
let twoBlock = document.querySelectorAll('.section-podcast__item--no-active');
let btnAddBlock = document.querySelector('.section-podcast__btn');

btnAddBlock.addEventListener('click', function(){
  twoBlock.forEach(function(el){
    el.classList.remove("section-podcast__item--no-active");
  })
})
// 

// Кнопка паузы хедер
let btnPlay1 = document.querySelectorAll('.mus-left'); 

  btnPlay1.forEach(function(el) {
  let play = el.querySelector('.head-container__play');
  let pause = el.querySelector('.head-container__pause');

  el.addEventListener('click', function() {
    play.classList.toggle('head-container__play--no-active')
    pause.classList.toggle('head-container__pause--active')
  })
})
// 

// Кнопка паузы подкасты 
let btnPlayPodcast = document.querySelectorAll('.section-podcast__btn-play'); 

btnPlayPodcast.forEach(function(el) {
  let play = el.querySelector('.section-podcast__ico-play');
  let pause = el.querySelector('.section_podcast__ico-pause');

  el.addEventListener('click', function() {
    play.classList.toggle('section-podcast__ico-play--no-active')
    pause.classList.toggle('section_podcast__ico-pause--active')
  })
})
// Как сделать сброс?
// 

// Выбор по клику 

let tabsLink = document.querySelectorAll ('.section-guests__blogers-sub-item');
let tabsItem = document.querySelectorAll ('.section-guests__rightn-block');

tabsLink.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsLink.forEach(function(btn){ btn.classList.remove('section-guests__blogers-sub-item--active')});
    e.currentTarget.classList.add('section-guests__blogers-sub-item--active');

    tabsItem.forEach(function(element){ element.classList.remove('section-guests__rightn-block--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('section-guests__rightn-block--active');

  });
})

 
