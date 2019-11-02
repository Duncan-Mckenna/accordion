function addClass(el, theClass) {
  el.classList.add(theClass);
}

function removeClass(el, theClass) {
  el.classList.remove(theClass);
}

function toggleClass(el, theClass) {
  if (el.classList.contains(theClass)){
    el.classList.remove(theClass);
  } else { 
    el.classList.add(theClass);
  }
}




const accordionItems = document.querySelectorAll('.accordion'), 
  accordionContentPanes = document.querySelectorAll('.accordion__body');


accordionItems.forEach(function(accordion) {
  const accordionFirstEl = accordion.firstElementChild;
  accordionFirstEl.addEventListener('click', toggleAccordion);
});

function toggleAccordion(el){
  accordionContentPanes.forEach(function(accordion) {
    if (accordion.previousElementSibling === el.target) {
      toggleClass(accordion.parentElement, 'active');
    } else {
      removeClass(accordion.parentElement, 'active');
    }
  });
}