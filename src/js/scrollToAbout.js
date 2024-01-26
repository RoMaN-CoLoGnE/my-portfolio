document.addEventListener("DOMContentLoaded", function() {

    const mobAboutLink = document.getElementById("mob-about");
    const descAboutLink = document.getElementById("desc-about");
    
    const aboutSection = document.getElementById("about");
    
    if (mobAboutLink && descAboutLink && aboutSection) {
      
      function scrollToAbout(event) {
        event.preventDefault();
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
     
      mobAboutLink.addEventListener("click", scrollToAbout);
      
      descAboutLink.addEventListener("click", scrollToAbout);
    }

  });
  