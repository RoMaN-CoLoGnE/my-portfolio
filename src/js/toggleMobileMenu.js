document.addEventListener('DOMContentLoaded', function () {
  function toggleMobileMenu() {
    const hamburgCheckbox = document.getElementById("hamburg");
    const overlay = document.getElementById("overlay");
    const menuItems = document.querySelectorAll(".topmenu__item a");

    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", function () {
        hamburgCheckbox.checked = false;
        document.body.classList.remove("menu-open");
        if (overlay) {
          overlay.style.display = "none";
        }
      });
    });

    hamburgCheckbox.addEventListener("change", function () {
      if (hamburgCheckbox.checked) {
        document.body.classList.add("menu-open");
        if (overlay) {
          overlay.style.display = "block";
        }
      } else {
        document.body.classList.remove("menu-open");
        if (overlay) {
          overlay.style.display = "none";
        }
      }
    });
  }

  toggleMobileMenu();
});

