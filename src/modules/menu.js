const menuModule = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const btnNext = document.querySelector("#next_section");

  const scrollToElem = (section) => {
    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  btnNext.addEventListener("click", (event) => {
    event.preventDefault();

    const sectionId = event.target.parentNode.getAttribute("href");
    const section = document.querySelector(sectionId);

    scrollToElem(section);
  });

  const openClose = (event) => {
    event.preventDefault();
    menu.classList.toggle("active-menu");
    if (event.path[0].tagName === "A") {
      const idSection = event.target.getAttribute("href");
      const section = document.querySelector(idSection);
      scrollToElem(section);
    }
  };

  menuBtn.addEventListener("click", openClose);
  closeBtn.addEventListener("click", openClose);

  menuItems.forEach((element) => {
    element.addEventListener("click", openClose);
  });
};
export default menuModule;
