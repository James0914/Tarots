    document.addEventListener("DOMContentLoaded", function() {
      var galleryContainer = document.getElementById("gallery-container");
      var galleryPhotos = document.getElementsByClassName("gallery-photo");

      function checkVisibility() {
        for (var i = 0; i < galleryPhotos.length; i++) {
          var photo = galleryPhotos[i];
          var rect = photo.getBoundingClientRect();

          // Check if photo is at least 50% visible in the viewport
          if (rect.top < window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            photo.classList.add("visible");
          } else {
            photo.classList.remove("visible");
          }
        }
      }

      // Initially check visibility on page load
      checkVisibility();

      // Check visibility on scroll
      galleryContainer.addEventListener("scroll", checkVisibility);
    });