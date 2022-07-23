const slider = () => {
  console.log("slider");
  //portfolio-content
  //portfolio-item
  //portfolio-item-active
  const sliderBlock = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  const timerInterval = 2000;
  let interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };
  const autoSlide = () => {
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
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
    console.log(e.target);
    if (!e.target.matches(".dot", ".portfolio-btn")) {
      return;
    }
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    if (e.target.matches("#arrow-right")) {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
    } else if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (dot === e.target) {
          currentSlide = index;
        }
      });
    }
    console.log(currentSlide);
    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot", ".portfolio-btn")) {
        stopSlide();
      }
    },
    true
  );
  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot", ".portfolio-btn")) {
        startSlide();
      }
    },
    true
  );
};

export default slider;
