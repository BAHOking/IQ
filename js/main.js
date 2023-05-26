let starTestBtns = document.querySelectorAll(".start-test");
let headerLogoBox = document.querySelector(".header__logo-box");
let headerLogoTitle = document.querySelector(".header__logo-title");
let tastBox = document.querySelector(".tast__box");
let percenti = document.querySelector(".test__percenti div");
let testItemsBox = document.querySelector(".test__items-box");
let testTitle = document.querySelector(".test__title");
let buttonNext = document.querySelector(".button__next");
let lastPage = document.querySelector(".last-page");
let lastPageButton = document.querySelector(".last-page__button");
let testStart = false;
let stepTest = 1;
let minutes = document.querySelector(".c22");
let seconds = document.querySelector(".c33");
let lastPageTimer;
let m = 9;
let s = 59;

let objListTest = {
  1: {
    percentiWidth: "16px",
    testTitle: "Ваш пол:",
    ArrLabelStyleInput: ["Мужчина", "Женщина"],
  },
  2: {
    percentiWidth: "25px",
    testTitle: "Укажите ваш возраст:",
    ArrLabelStyleInput: ["До 18", "От 18 до 28", "от 29 до 35", "От 36"],
  },
  3: {
    percentiWidth: "36px",
    testTitle: "Выберите лишнее:",
    ArrLabelStyleInput: ["Дом", "Шалаш", "Бунгало", "Скамейка", "Хижина"],
  },
  4: {
    percentiWidth: "76px",
    testTitle: "Продолжите числовой ряд: 18  20  24  32",
    ArrLabelStyleInput: [62, 48, 74, 57, 60, 77],
  },
  5: {
    percentiWidth: "93px",
    testTitle: "Выберите цвет, который сейчас наиболее Вам приятен:",
    ArrLabelStyleInput: [
      "rgba(168, 168, 168, 1)",
      "rgba(0, 0, 169, 1)",
      "rgba(0, 167, 1, 1)",
      "rgba(246, 1, 0, 1)",
      "rgba(253, 255, 25, 1)",
      "rgba(169, 84, 3, 1)",
      "rgba(0, 0, 0, 1)",
      "rgba(133, 0, 104, 1)",
      "rgba(70, 178, 172, 1)",
    ],
  },
  6: {
    percentiWidth: "103px",
    testTitle:
      "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
    ArrLabelStyleInput: [
      "rgba(168, 168, 168, 1)",
      "rgba(70, 178, 172, 1)",
      "rgba(169, 84, 3, 1)",
      "rgba(0, 167, 1, 1)",
      "rgba(0, 0, 0, 1)",
      "rgba(246, 1, 0, 1)",
      "rgba(133, 0, 104, 1)",
      "rgba(253, 255, 25, 1)",
      "rgba(0, 0, 169, 1)",
    ],
  },
  7: {
    percentiWidth: "128px",
    testTitle: "Какой из городов лишний?",
    ArrLabelStyleInput: [
      "Вашингтон",
      "Лондон",
      "Париж",
      "Нью-Йорк",
      "Москва",
      "Оттава",
    ],
  },
  8: {
    percentiWidth: "145px",
    testTitle: "Выберите правильную фигуру из четырёх пронумерованных.",
    ArrLabelStyleInput: [1, 2, 3, 4],
    img: "test08.jpg",
    imgAlt: "img",
    imgW: "185px",
    imgH: "235px",
    imgMar: "0 auto",
  },
  9: {
    percentiWidth: "150px",
    testTitle: "Вам привычнее и важнее:",
    ArrLabelStyleInput: [
      "Наслаждаться каждой минутой проведенного времени",
      "Быть устремленными мыслями в будущее",
      "Учитывать в ежедневной практике прошлый опыт",
    ],
  },
  10: {
    percentiWidth: "171px",
    testTitle:
      "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",
    ArrLabelStyleInput: [
      "Оно остроконечное",
      "Оно устойчиво",
      "Оно-находится в состоянии равновесия",
    ],
    img: "test10.jpg",
    imgAlt: "img",
    imgW: "173px",
    imgH: "115px",
    imgMar: "0 auto",
  },
  11: {
    percentiWidth: "184px",
    testTitle: "Вставьте подходящее число",
    ArrLabelStyleInput: [34, 36, 53, 44, 66, 42],
    img: "test11.jpg",
    imgAlt: "img",
    imgW: "228px",
    imgH: "207px",
    imgMar: "0 auto",
  },
  12: {
    percentiWidth: "100%",
    testTitle: "Обработка результатов",
    ArrLabelStyleInput: [],
    img: "Group.svg",
    imgAlt: "svg",
    imgW: "65px",
    imgH: "68.32px",
    imgMar: "0 auto",
    text:
      "Определение стиля мышления................. .................................................................",
  },
};

for (let elem of starTestBtns) {
  elem.addEventListener("click", function starTestBtnsClick() {
    testStart = true;

    headerLogoBox.classList.remove("show-hide");
    tastBox.classList.remove("show-hide");

    if (headerTop.classList.contains("show-hide")) {
      headerTop.classList.remove("show-hide");
    }

    sideMenu.classList.add("show-hide");
    headerContent.classList.add("show-hide");
    services.classList.add("show-hide");

    startTest();
  });
}

function startTest() {
  createTestPercenti();
  createTestTitle();
  removeImg();

  if (stepTest === 8 || stepTest === 10 || stepTest === 11 || stepTest === 12) {
    createTestImg();
  }

  createTest();
}

function createTestPercenti() {
  percenti.style.width = `${objListTest[stepTest].percentiWidth}`;
}

function createTestTitle() {
  testTitle.textContent = `${objListTest[stepTest].testTitle}`;
}

function createTest() {
  removeTest();
  createTestItems();
  checkedTest();
}

function createTestImg() {
  let img = document.createElement("img");
  img.src = `images/test/${objListTest[stepTest].img}`;
  img.alt = `${objListTest[stepTest].imgAlt}`;
  img.style.width = `${objListTest[stepTest].imgW}`;
  img.style.height = `${objListTest[stepTest].imgH}`;
  img.style.margin = `${objListTest[stepTest].imgMar}`;
  tastBox.insertBefore(img, testItemsBox);
}

function createTestItems() {
  if (testItemsBox.classList.contains("test__item-box--step-test-5-6")) {
    testItemsBox.classList.remove("test__item-box--step-test-5-6");
  }

  if (testItemsBox.classList.contains("test__item-box--step-test-8-11")) {
    testItemsBox.classList.remove("test__item-box--step-test-8-11");
    testItemsBox.classList.remove("test__item-box--step-test-11--border");
  }

  for (let i = 0; i < objListTest[stepTest].ArrLabelStyleInput.length; i++) {
    let itemBox = document.createElement("div");
    itemBox.classList.add("test__item-box");
    itemBox.classList.add("input__checkedTest");

    let input = document.createElement("input");
    input.classList.add("test__item-radio");
    input.type = "radio";
    input.name = "test-radio";
    input.id = `${i}`;

    let label = document.createElement("label");
    label.classList.add("test__item-label");
    label.setAttribute("for", i);
    label.textContent = `${objListTest[stepTest].ArrLabelStyleInput[i]}`;

    if (stepTest === 4 || stepTest === 7) {
      itemBox.classList.add("test__item-box--step-test-4-7");
      label.classList.add("test__item-label--step-test-9__item-4-7");
    }

    if (stepTest === 5 || stepTest === 6) {
      testItemsBox.classList.add("test__item-box--step-test-5-6");
      itemBox.classList.remove("test__item-box");
      itemBox.style.backgroundColor = `${objListTest[stepTest].ArrLabelStyleInput[i]}`;
      label.classList.remove("test__item-label");
      label.textContent = ``;
      label.classList.add("test__item-label--color");
    }

    if (stepTest === 8 || stepTest === 11) {
      testItemsBox.classList.add("test__item-box--step-test-8-11");
      itemBox.classList.remove("test__item-box");
      itemBox.classList.add("test__item-box--num");
      label.classList.remove("test__item-label");
      label.classList.add("test__item-label--num");
    }

    if (stepTest === 11) {
      testItemsBox.classList.add("test__item-box--step-test-11--border");
    }

    if (stepTest === 9) {
      itemBox.classList.add("test__item-box--step-test-9");
      label.classList.add("test__item-label--step-test-9");

      if (i > 0) {
        label.classList.add("test__item-label--step-test-9__item-2-3");
      }
    }

    if (stepTest === 10) {
      if (i > 1) {
        label.classList.add("test__item-label--step-test-10__item-3");
      }
    }
    itemBox.appendChild(input);
    itemBox.appendChild(label);
    testItemsBox.appendChild(itemBox);
  }

  if (stepTest === 12) {
    imgRotateFun();

    let p = document.createElement("p");
    p.textContent = objListTest[12].text;
    p.classList.add("test__item-box--step-test-12--text");
    testItemsBox.appendChild(p);

    buttonNext.style.display = "none";
  }
}

function imgRotateFun() {
  let i = 0;
  let imgRotate = document.querySelector(".tast__box img");

  if (imgRotate) {
    let arrDeg = [
      -30,
      -60,
      -90,
      -120,
      -150,
      -180,
      -210,
      -240,
      -270,
      -300,
      -330,
      -360,
      0,
    ];

    let timet = setInterval(function () {
      imgRotate.style.transform = `rotate(${arrDeg[i]}deg)`;
      i++;

      if (i >= arrDeg.length) {
        i = 0;
      }

      if (i >= 12) {
        clearInterval(timet);
        tastBox.classList.toggle("show-hide");

        let p = document.querySelector(".test__item-box--step-test-12--text");
        p.remove();

        lastPagefun();
      }
    }, 100);
  }
}

function lastPagefun() {
  lastPage.classList.toggle("show-hide");
  headerLogoTitle.classList.toggle("last-page__logo-title");
  headerLogoTitle.textContent = "Готово!";

  lastPageTimer10Fun();
}

function lastPageTimer10Fun() {
  lastPageTimer = setInterval(function () {
    s = s - 1;

    if (s < 0) {
      m--;
      s = 59;
    }

    if (m === 0 && s === 0) {
      clearInterval(lastPageTimer);
      alert("Пізно!");
      resetTest();
    }

    minutes.innerHTML = getZero(m);
    seconds.innerHTML = `:${getZero(s)}`;
  }, 1000);
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

function removeImg() {
  let tastBoxImg = document.querySelector(".tast__box img");
  if (tastBoxImg) {
    tastBoxImg.remove();
  }
}

function removeTest() {
  let removeItemBox = document.querySelectorAll(".input__checkedTest");
  for (let i = 0; i < removeItemBox.length; i++) {
    removeItemBox[i].remove();
  }
}

function checkedTest() {
  let checkedItemBox = document.querySelectorAll(".input__checkedTest");

  for (let i = 0; i < checkedItemBox.length; i++) {
    checkedItemBox[i].addEventListener("click", function clickCheckedTest() {
      buttonNext.disabled = false;
      buttonNext.style.backgroundColor = "#ffc700";
      buttonNext.style.color = "#0d0c11";
    });
  }
}

buttonNext.addEventListener("click", function buttonNextFunc() {
  buttonNext.disabled = true;
  buttonNext.style.backgroundColor = "#dadada";
  buttonNext.style.color = "#8e8e8e";

  stepTest++;
  startTest();
});

lastPageButton.addEventListener("click", function lastPageButtonFunc() {
  alert("Слава Україні!");
  resetTest();
});

function resetTest() {
  testStart = false;
  stepTest = 1;

  lastPage.classList.toggle("show-hide");

  clearInterval(lastPageTimer);
  m = 9;
  s = 59;
  minutes.innerHTML = getZero(m);
  seconds.innerHTML = `:${getZero(s)}`;

  sideMenu.classList.add("show-hide");

  headerLogoBox.classList.add("show-hide");
  headerLogoTitle.classList.remove("last-page__logo-title");
  headerLogoTitle.textContent = "тест на определение IQ";

  headerContent.classList.remove("show-hide");

  if (servicesMoreBtn.classList.contains("services__more-btn--rotate")) {
    servicesMoreBtn.classList.remove("services__more-btn--rotate");
  }

  services.classList.toggle("show-hide");
  servicesItemsBox.classList.add("show-hide");

  tastBox.classList.add("show-hide");

  buttonNext.style.display = "block";

  lastPage.classList.add("show-hide");
}
