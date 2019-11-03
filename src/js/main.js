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
  accordion.style.height = accordion.firstElementChild.offsetHeight + 'px'
});

function toggleAccordion(el){
  // loop through each accordion and toggle .active
  accordionContentPanes.forEach(function(accordion) {
    var selected = accordion.previousElementSibling === el.target,
      current = accordion.parentElement.classList.contains('active');

    if (selected && !current) {
      openAccordion(accordion);
    } else {
      closeAccordion(accordion);
    }
  });

  function closeAccordion(acc){
    removeClass(acc.parentElement, 'active');
    acc.parentElement.style.height = acc.previousElementSibling.offsetHeight + 'px';
  }
  function openAccordion(acc){
    addClass(acc.parentElement, 'active');
    acc.parentElement.style.height = acc.parentElement.offsetHeight + acc.offsetHeight + 10 + 'px';
  }
}