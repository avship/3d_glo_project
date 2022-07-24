const slider = (params) => {
  let {
    sliderClass = null,
    sliderItemsClass = null,
    sliderItemsClassActive = "slide-active",
    arrows = false,
    arrowLeftClass = "slider-arrow-left",
    arrowRightClass = "slider-arrow-rught",
    dots = false,
    dotsParams: {
      dotContainer = "dot-container",
      dotItemClass = "item-dot",
      dotActiveClass = "active-dot",
    } = {},
    debug = false,
    timerInterval = 2000,
  } = params;

  //проверка обязательных параметров, без них невозможна работа
  const errors = [];
  if (!sliderClass) {
    errors.push("Не указан класс контейнера слайдера");
  }
  if (!sliderItemsClass) {
    errors.push("Не указано класс элемента слайдера");
  }
  if (errors.length) {
    debug ? console.log("Ошибки слайдера", errors) : "";
    return;
  }
  //Проверяю, не ввёл ли добрый пользователь мне сообщение, вместо цифр
  //в параметр задержка таймера
  //Если ввёл, то меняю принудительно на 2000
  //Если ввёл что-то типа 100px, то пусть мучается, работать будет
  isNaN(parseInt(timerInterval))
    ? (timerInterval = 2000)
    : (timerInterval = parseInt(timerInterval));

  //portfolio-content
  //portfolio-item
  //portfolio-item-active

  if (sliderClass.slice(0, 1) !== ".") {
    sliderClass = `.${sliderClass}`;
  }
  if (sliderItemsClass.slice(0, 1) !== ".") {
    sliderItemsClass = `.${sliderItemsClass}`;
  }

  if (dotContainer.slice(0, 1) !== ".") {
    dotContainer = `.${dotContainer}`;
  }
  if (dotItemClass.slice(0, 1) !== ".") {
    dotItemClass = `.${dotItemClass}`;
  }

  const sliderBlock = document.querySelector(sliderClass);
  if (sliderBlock === null) {
    errors.push(
      "В вёрстке отсутствует дом элемент, где будет располагаться слайдер"
    );
  }
  const slides = document.querySelectorAll(sliderItemsClass);
  if (!slides.length) {
    errors.push("Нет ни одного слайда на странице");
  }
  if (errors.length) {
    debug ? console.log("Ошибки слайдере", errors) : "";
    return;
  }

  //Проверки пройдены, теперь формирую слайдер
  const initDots = (portfolioDotsContainer) => {
    slides.forEach((elem, index) => {
      const dotElem = document.createElement("li");
      dotElem.classList.add(dotItemClass.slice(1));
      if (index === 0) {
        dotElem.classList.add("dot-active");
      }
      portfolioDotsContainer.appendChild(dotElem);
    });
  };

  let portfolioDotDom;
  let dotItems;
  if (dots) {
    portfolioDotDom = document.createElement("ul");
    //классы добавляю без точки
    portfolioDotDom.classList.add(dotContainer.slice(1));
    sliderBlock.appendChild(portfolioDotDom);
    initDots(portfolioDotDom);
    dotItems = document.querySelectorAll(dotItemClass);
  }

  //Если вдруг по какой-то причине точки не отрисовались, то
  //выключаю обработку точек
  if (!dotItems || !dotItems.length) {
    dots = false;
  }

  //Теперь нужно отрисовать стрелочки, если пользователь заказал их
  if (arrows) {
    [arrowLeftClass, arrowRightClass].forEach((arrowItemClass, arrowId) => {
      const curArrow = document.createElement("a");
      arrowItemClass.split(" ").forEach((itemClass) => {
        itemClass = itemClass.trim();

        if (itemClass) {
          if (itemClass.slice(0, 1) === ".") {
            itemClass = itemClass.slice(1);
          }
          curArrow.classList.add(itemClass);
        }
        //Пользователь может вводить какие угодно классы,
        //обязательно не в той последовательности, в какой я бы хотел
        //поэтому накидываю свой класс, по которому буду отлавливать
        //в делегировании событий. В css этого класса может не быть
        curArrow.classList.add("slider-btn-handler");
        arrowId === 0
          ? curArrow.classList.add("slider-btn-handler-prev")
          : curArrow.classList.add("slider-btn-handler-next");
      });

      sliderBlock.appendChild(curArrow);
    });
  }

  let currentSlide = 0;
  //   const timerInterval = 2000;
  let interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };
  const autoSlide = () => {
    prevSlide(slides, currentSlide, sliderItemsClassActive);
    dots ? prevSlide(dotItems, currentSlide, dotActiveClass) : "";
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, sliderItemsClassActive);
    dots ? nextSlide(dotItems, currentSlide, dotActiveClass) : "";
  };
  const startSlide = () => {
    interval = setInterval(autoSlide, timerInterval);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };

  startSlide();

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.matches(dotItemClass, ".slider-btn-handler")) {
      return;
    }
    arrows ? prevSlide(slides, currentSlide, sliderItemsClassActive) : "";
    dots ? prevSlide(dotItems, currentSlide, dotActiveClass) : "";

    //slider-btn-handler-prev и next дописывает js
    if (e.target.matches(".slider-btn-handler-next")) {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
    }
    if (e.target.matches("slider-btn-handler-prev")) {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
    }
    if (e.target.classList.contains(dotItemClass)) {
      dotItems.forEach((dot, index) => {
        if (dot === e.target) {
          currentSlide = index;
        }
      });
    }
    arrows ? nextSlide(slides, currentSlide, sliderItemsClassActive) : "";
    dots ? nextSlide(dotItems, currentSlide, dotActiveClass) : "";
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      //   console.log(
      //     e.target,
      //     dotItemClass,
      //     e.target.classList.contains("slider-btn-handler"),
      //     e.target.classList.contains(dotItemClass.slice(1))
      //   );
      if (
        e.target.classList.contains("slider-btn-handler") ||
        e.target.classList.contains(dotItemClass.slice(1))
      ) {
        dots ? prevSlide(dotItems, currentSlide, dotActiveClass) : "";
        stopSlide();
      }
    },
    true
  );
  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (
        e.target.classList.contains("slider-btn-handler") ||
        e.target.classList.contains(dotItemClass)
      ) {
        startSlide();
      }
    },
    true
  );
};

export default slider;
