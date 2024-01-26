// document.addEventListener('DOMContentLoaded', function () {
//   function setupToggleButton() {
//     const toggleButton = document.getElementById('toggleButton');
//     const toggleItemAboutMob = document.getElementById('mob-about');
//     const toggleItemAboutDesc = document.getElementById('desc-about');
//     const aboutText = document.querySelector('.about__text');

//     let isExpanded = false;

//     function toggleAboutText() {
//       if (isExpanded) {
//         aboutText.classList.remove('expanded');
//         toggleButton.textContent = 'Weiterlesen';
//       } else {
//         aboutText.classList.add('expanded');
//         toggleButton.textContent = 'Schließen';
//       }

//       isExpanded = !isExpanded;
//     }

//     toggleButton.addEventListener('click', toggleAboutText);
//     toggleItemAboutMob.addEventListener('click', toggleAboutText);
//     toggleItemAboutDesc.addEventListener('click', toggleAboutText);
//   }

//   setupToggleButton();
// });

document.addEventListener("DOMContentLoaded", function () {

  // Die Funktion zum Scrollen zum Abschnitt "about"
  function scrollToAbout(event) {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }

  // Die Funktion zum Umschalten des "about" Texts
  function toggleAboutText() {
    if (isExpanded) {
      aboutText.classList.remove('expanded');
      toggleButton.textContent = 'Weiterlesen';
    } else {
      aboutText.classList.add('expanded');
      toggleButton.textContent = 'Schließen';
    }

    isExpanded = !isExpanded;
  }

  const mobAboutLink = document.getElementById("mob-about");
  const descAboutLink = document.getElementById("desc-about");
  const aboutSection = document.getElementById("about");
  const toggleButton = document.getElementById('toggleButton');
  const toggleItemAboutMob = document.getElementById('mob-about');
  const toggleItemAboutDesc = document.getElementById('desc-about');
  const aboutText = document.querySelector('.about__text');
  
  let isExpanded = false;

  if (mobAboutLink && descAboutLink && aboutSection) {
    mobAboutLink.addEventListener("click", scrollToAbout);
    descAboutLink.addEventListener("click", scrollToAbout);
  }

  if (toggleButton && toggleItemAboutMob && toggleItemAboutDesc) {
    toggleButton.addEventListener('click', toggleAboutText);
    toggleItemAboutMob.addEventListener('click', toggleAboutText);
    toggleItemAboutDesc.addEventListener('click', toggleAboutText);
  }
});
