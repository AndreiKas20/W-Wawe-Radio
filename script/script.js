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