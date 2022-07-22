const tabs = () => {
  const tabContent = document.querySelectorAll(".service-tab");
  const tabs = document.querySelectorAll(".service-header-tab");
  const serviceHeader = document.querySelector(".service-header");
  serviceHeader.addEventListener("click", (e) => {
    if (e.target.closest(".service-header-tab")) {
      const elem = e.target.closest(".service-header-tab");
      tabs.forEach((item, index) => {
        if (item === elem) {
          item.classList.add("active");
          tabContent[index].classList.remove("d-none");
        } else {
          item.classList.remove("active");
          tabContent[index].classList.add("d-none");
        }
      });
    }
  });
};

export default tabs;
