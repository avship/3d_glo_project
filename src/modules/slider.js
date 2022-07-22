const slider = () => {
  console.log("slider");
  //portfolio-content
  //portfolio-item
  //portfolio-item-active
  const portfolioContent = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");

  let currentSlide = 0;

  const autoSlide = () => {
    slides[currentSlide].classList.remove("portfolio-item-active");
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    slides[currentSlide].classList.add("portfolio-item-active");
  };
  const startSlide = () => {
    setInterval(autoSlide, 2000);
  };
  const stopSlide = () => {};

  //startSlide();
};

export default slider;
