let servicesMoreBtn = document.querySelector(".services__more-btn");
let servicesItemsBox = document.querySelector(".services__items-box");

servicesMoreBtn.addEventListener("click", function showHideServices() {
  servicesItemsBox.classList.toggle("show-hide");
  servicesMoreBtn.classList.toggle("services__more-btn--rotate");
});
