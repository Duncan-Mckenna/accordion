"use strict";function addClass(e,t){e.classList.add(t)}function removeClass(e,t){e.classList.remove(t)}function toggleClass(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)}if(document.querySelector(".accordion")){var toggleAccordion=function(o){accordionContentPanes.forEach(function(e){var t=e.previousElementSibling===o.target,n=e.parentElement.classList.contains("active");t&&!n?function(e){addClass(e.parentElement,"active"),e.parentElement.style.height=e.parentElement.offsetHeight+e.offsetHeight+10+"px"}(e):function(e){removeClass(e.parentElement,"active"),e.parentElement.style.height=e.previousElementSibling.offsetHeight+"px"}(e)})},accordionItems=document.querySelectorAll(".accordion"),accordionContentPanes=document.querySelectorAll(".accordion__body");accordionItems.forEach(function(e){var t=e.firstElementChild;t.addEventListener("click",toggleAccordion),t.addEventListener("keyup",function(e){e.preventDefault(),13===e.keyCode&&toggleAccordion(e)}),e.style.height=e.firstElementChild.offsetHeight+"px"})}