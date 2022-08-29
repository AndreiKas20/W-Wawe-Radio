// Кастомный селект
const element = document.querySelector('#select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
});
//

// Aккордион
document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion('.accordion-list', {
    duration: 700,
    elementClass: 'accordion-item',
    triggerClass: 'accordion-top',
    panelClass: 'accordion-bottom',
    showMultiple: false
  });
})
//

const swiper = new Swiper('.swiper', {
          speed: 400,
          navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
          },
          breakpoints: {
            300: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            459: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            459: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            769: {
              slidesPerView: 2.6,
              spaceBetween: 20,
            },
           1022: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1197: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 30,
            }
          }

        });

//
const modal = new GraphModal();
// Блок входа
let enterBtn = document.querySelector('.head-container__btn-input');

enterBtn.addEventListener('click', () => {
	new GraphModal().open('second');
});

// Блок поиска
let serchBtn = document.querySelector('.head-container__btn-search');
let blockSearch = document.querySelector('.head-container__search-block')

serchBtn.addEventListener('click', function () {
  blockSearch.classList.add('head-container__search-block--active')
})
let main = document.querySelector('.main-content');

main.addEventListener('click', function (e) {
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
let fourBlock = document.querySelectorAll('.low-no-active')

btnAddBlock.addEventListener('click', function () {
  twoBlock.forEach(function (el) {
    el.classList.remove("section-podcast__item--no-active");
  });
  fourBlock.forEach(function (el) {
    el.classList.remove("low-no-active");
  })
})
//

// Кнопка паузы хедер
let btnPlay1 = document.querySelectorAll('.mus-left');

btnPlay1.forEach(function (el) {
  let play = el.querySelector('.head-container__play');
  let pause = el.querySelector('.head-container__pause');

  el.addEventListener('click', function () {
    play.classList.toggle('head-container__play--no-active')
    pause.classList.toggle('head-container__pause--active')
  })
})
//

// Кнопка паузы подкасты
let btnPlayPodcast = document.querySelectorAll('.section-podcast__btn-play');

btnPlayPodcast.forEach(function (el) {
  let play = el.querySelector('.section-podcast__ico-play');
  let pause = el.querySelector('.section-podcast__ico-pause');

  el.addEventListener('click', function () {
    play.classList.toggle('section-podcast__ico-play--no-active')
    pause.classList.toggle('section-podcast__ico-pause--active')
  })
})
//

// Выбор по клику

let tabsLink = document.querySelectorAll('.section-guests__blogers-sub-item');
let tabsItem = document.querySelectorAll('.section-guests__rightn-block');

tabsLink.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsLink.forEach(function (btn) { btn.classList.remove('section-guests__blogers-sub-item--active') });
    e.currentTarget.classList.add('section-guests__blogers-sub-item--active');

    tabsItem.forEach(function (element) { element.classList.remove('section-guests__rightn-block--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('section-guests__rightn-block--active');

  });
})
//
// Бургер
let burger = document.querySelector(".head-container__burger");
let menu = document.querySelector(".head-container__nav-burger");
let menuLinks = menu.querySelectorAll(".head-container__link-burger");

burger.addEventListener("click",
  function () {
    burger.classList.toggle("head-container__burger--active");

    menu.classList.toggle("head-container__nav-burger--active");
  })

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {

    burger.classList.remove("head-container__burger--active");

    menu.classList.remove("head-container__nav-burger--active");

  })
})
//

// Что в эфире
let whatAirBtn = document.querySelector('.head-container__what-air-block-600');
let blockWhatAir = document.querySelector('.head-container__what-air-open');

whatAirBtn.addEventListener('click', function () {
  blockWhatAir.classList.toggle('head-container__what-air-open--active');
  whatAirBtn.classList.toggle('head-container__what-air-block-600--active');
})
//

// Валидация формы
new JustValidate('.section-about-us__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 40
    },
    mail: {
      required: true,
      email: true
    },
    text: {
      required: true,
      minLength: 10,
    },
    check: {
      required: true,
    },
  },

  messages: {
    name: {
      required: 'Вы не ввели  имя',
      minLength: 'Имя короткое',
      maxLength: 'Имя длиннное'
    },
    mail: {
      required: 'Вы не ввели e-mail',
      email: 'e-mail введен не верно',
    },
    text: {
      required: 'Вы не ввели текст',
      minLength: 'Текст слишком короткий'
    },
    check: {
      required: 'Вы не подтвердили согласие'
    }
  }
});

new JustValidate('.head-container__entr-form', {
  rules: {
    password: {
      required: true,
      password: true
    },
    text: {
      required: true,
      minLength: 3,
    },
  },

  messages: {
    password: {
      required: 'Вы не ввели  пароль',
      password: 'Пароль простой'
    },
    text: {
      required: 'Вы не ввели логин',
      minLength: 'Логин слишком короткий'
    },
  }
});


