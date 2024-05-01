const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

// клик по кнопкам с подсказками
for (let btn of infoBtns) {
  btn.addEventListener("click", showHint);
}

function showHint(e) {
  e.stopPropagation();

  for (let hint of infoHints) {
    hint.classList.add("none");
  }

  this.parentNode.querySelector(".info-hint").classList.toggle("none");
}

// закрываем подсказки при клике по всему документу
document.addEventListener("click", closeHints);

function closeHints() {
  for (let hint of infoHints) {
    hint.classList.add("none");
  }
}

//запрещаем всплытие события клика при клике на подсказки

for (let hint of infoHints) {
  hint.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

// Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 42,
  freeMode: true,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

// Tabs
const tabsBtn = document.querySelectorAll("[data-tab]");
const tabsProduct = document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtn) {
  btn.addEventListener("click", function () {
    for (let btn of tabsBtn) {
      btn.classList.remove("product__tabs-btn--active");
    }
    this.classList.add("product__tabs-btn--active");

    for (let product of tabsProduct) {
      if (this.dataset.tab === "all") {
        product.classList.remove("none");
      } else {
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove("none");
        } else {
          product.classList.add("none");
        }
      }
    }

    // update swiper
    swiper.update();
  });
}

// mobile nav
const mobileNavOpenBtn = document.querySelector("#open-mobile-nav-btn");
const mobileNavCloseBtn = document.querySelector("#close-mobile-nav-btn");
const mobileNav = document.querySelector("#mobile-nav");

mobileNavOpenBtn.onclick = function () {
  mobileNav.classList.add("mobile-nav-wrapper--open");
};

mobileNavCloseBtn.onclick = function () {
  mobileNav.classList.remove("mobile-nav-wrapper--open");
};
