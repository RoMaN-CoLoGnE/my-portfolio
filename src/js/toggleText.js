document.addEventListener('DOMContentLoaded', function () {
  function setupToggleButton() {
    const toggleButton = document.getElementById('toggleButton');
    // const toggleItemAboutMob = document.getElementById('mob-about');
    // const toggleItemAboutDesc = document.getElementById('desc-about');
    const aboutText = document.querySelector('.about__text');

    let isExpanded = false;

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

    toggleButton.addEventListener('click', toggleAboutText);
    // toggleItemAboutMob.addEventListener('click', toggleAboutText);
    // toggleItemAboutDesc.addEventListener('click', toggleAboutText);
  }

  setupToggleButton();
});
