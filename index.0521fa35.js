!function(){document.addEventListener("DOMContentLoaded",(function(){var e,o;e=document.getElementById("hamburg"),o=document.getElementById("overlay"),document.querySelectorAll(".topmenu__item a").forEach((function(t){t.addEventListener("click",(function(){e.checked=!1,document.body.classList.remove("menu-open"),o&&(o.style.display="none")}))})),e.addEventListener("change",(function(){e.checked?(document.body.classList.add("menu-open"),o&&(o.style.display="block")):(document.body.classList.remove("menu-open"),o&&(o.style.display="none"))}))})),document.addEventListener("DOMContentLoaded",(function(){var e,o,t;e=document.getElementById("toggleButton"),o=document.querySelector(".about__text"),t=!1,e.addEventListener("click",(function(){t?(o.classList.remove("expanded"),e.textContent="Weiterlesen"):(o.classList.add("expanded"),e.textContent="Schließen"),t=!t}))})),document.addEventListener("DOMContentLoaded",(function(){new Swiper(".swiper",{effect:"cards",grabCursor:!0,perSlideOffset:20,perSlideRotate:2,initialSlide:2,speed:500,rotate:!0,slideShadows:!0,mousewheel:{invert:!1}})}));var e={header:document.querySelector(".header"),footer:document.querySelector(".footer"),scrollTop:document.querySelector("#scrollTop"),scrollDown:document.querySelector("#scrollDown")};function o(e){e?window.scroll({left:0,top:e.offsetTop,behavior:"smooth"}):console.log("Element to scroll to was not found")}function t(){var o=document.documentElement.clientHeight,t=document.documentElement.scrollHeight-o;window.scrollY>=t?e.scrollDown.classList.remove("scroll--show"):e.scrollDown.classList.add("scroll--show"),window.scrollY<=o/2?e.scrollTop.classList.remove("scroll--show"):e.scrollTop.classList.add("scroll--show"),window.scrollY>=t-10?e.scrollDown.style.display="none":e.scrollDown.style.display="block"}window.addEventListener("scroll",t),e.scrollTop.addEventListener("click",(function(){o(e.header)})),e.scrollDown.addEventListener("click",(function(){o(e.footer)})),t()}();
//# sourceMappingURL=index.0521fa35.js.map
