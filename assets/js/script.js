'use strict';

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}


const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const fullname = document.querySelector('input[name="fullname"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  window.location.href = `mailto:b.bugara.kontakt@gmail.com?subject=Wiadomość od ${fullname}&body=Nazwa/Imię: ${fullname}%0AEmail: ${email}%0AWiadomość: ${message}`;
});


//modal

document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('project-modal');
  var span = document.getElementsByClassName('close')[0];

  span.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

  var links = document.querySelectorAll('a.open-modal');
  links.forEach(function(link) {
    link.onclick = function(event) {
      event.preventDefault();

      var title = this.dataset.title;
      var description = this.dataset.description;
      var mainImageSrc = this.querySelector('.main-img').src;
      var galleryImages = JSON.parse(this.dataset.gallery);

      var modalTitle = modal.querySelector('.modal-title');
      var modalDescription = modal.querySelector('.modal-description');
      var modalMainImage = modal.querySelector('.main-image');
      var modalGallery = modal.querySelector('.gallery');

      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modalMainImage.src = mainImageSrc;
      modalMainImage.alt = title;

      modalGallery.innerHTML = '';

      // Dynamically add gallery images
      galleryImages.forEach(function(src) {
        var img = document.createElement('img');
        img.src = src;
        img.alt = title + ' Gallery Image';
        img.onclick = function() {
          modalMainImage.src = this.src;
          modalMainImage.alt = this.alt;
        };
        modalGallery.appendChild(img);
      });

      modal.style.display = 'block';
    };
  });
});

