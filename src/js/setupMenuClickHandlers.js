// function setupMenuClickHandlers() {
//     const aboutMenuItem = document.querySelector('.topmenu__item a[href="#about"]');
//     const toggleButton = document.getElementById('toggleButton');
//     const aboutText = document.querySelector('.about__text');
//     const aboutSection = document.getElementById('about');
  
//     // Klick-Ereignislistener für "About Me" -Menüpunkt
//     aboutMenuItem.addEventListener('click', function (event) {
//       event.preventDefault(); // Verhindert das Standardverhalten des Links
  
//       // Scrollen zur "About" -Sektion
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
  
//       // Öffnen Sie den versteckten Text, wenn er nicht bereits geöffnet ist
//       if (!aboutText.classList.contains('expanded')) {
//         aboutText.classList.add('expanded');
//         toggleButton.textContent = 'Schließen';
//       }
//     });
//   }
  
//   setupMenuClickHandlers();
  