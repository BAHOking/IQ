let headerBtnMenu = document.querySelector(".header__btn-menu");
let sideMenu = document.querySelector(".side-menu");
let headerTop = document.querySelector(".header__top");
let headerContent = document.querySelector(".header__content");
let services = document.querySelector(".services");
let crossIcon = document.querySelector(".side-menu__svg-img");
let sideMenuLink = document.querySelector(".side-menu__link:nth-child(1)");
let sideServicesLink = document.querySelector(".side-menu__link:nth-child(2)");

headerBtnMenu.addEventListener("click", function showHideSideMenu() {
  sideMenu.classList.toggle("show-hide");
});

crossIcon.addEventListener("click", function showHideSideMenuCross() {
  sideMenu.classList.toggle("show-hide");
});

sideMenuLink.addEventListener("click", function showHideSideMenuSideMenuLink() {
  if (testStart === true) {
    if (confirm("Тест буде закритий! Продовжити?")) {
      resetTest();
    }
  } else {
    sideMenu.classList.toggle("show-hide");
  }
});

sideServicesLink.addEventListener(
  "click",
  function showHideSideMenuSideServicesLink() {
    if (testStart === true) {
      if (confirm("Тест буде закритий! Продовжити?")) {
        resetTest();

        if (servicesItemsBox.classList.contains("show-hide")) {
          servicesItemsBox.classList.remove("show-hide");
        }

        servicesMoreBtn.classList.toggle("services__more-btn--rotate");
      }
    } else {
      sideMenu.classList.toggle("show-hide");

      if (servicesItemsBox.classList.contains("show-hide")) {
        servicesItemsBox.classList.remove("show-hide");
      }

      servicesMoreBtn.classList.toggle("services__more-btn--rotate");
    }
  }
);
