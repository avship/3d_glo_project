import { animate } from "./helpers";
const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const popupClose = modal.querySelector(".popup-close");
  const popupContent = modal.querySelector(".popup-content");

  let idInterval;
  const animPopupContent = () => {
    idInterval = requestAnimationFrame(animPopupContent);

    if (parseInt(popupContent.style.top) < 20) {
      popupContent.style.top = `${parseInt(popupContent.style.top) + 2}%`;
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      popupContent.style.top = "-100%";
      modal.style.display = "block";
      if (document.documentElement.clientWidth >= 768) {
        // animPopupContent();
        const top = parseInt(popupContent.style.top);
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popupContent.style.top = `${
              top + (Math.abs(top) + 30) * progress
            }%`;
          },
        });
      } else {
        popupContent.style.top = "30%";
      }
    })
  );
  // popupClose.addEventListener("click", () => {
  //   modal.style.display = "none";
  // });
  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.closest(".popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};
export default modal;
