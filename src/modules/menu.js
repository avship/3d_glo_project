const menuModule = () => {
  const menu = document.querySelector("menu");

  const scrollToElem = (section) => {
    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const openClose = (event) => {
    event.preventDefault();
    menu.classList.toggle("active-menu");
    if (event.path[0].tagName === "A") {
      const idSection = event.target.getAttribute("href");
      const section = document.querySelector(idSection);
      scrollToElem(section);
    }
  };
  const toggleMenu = (e) => {
    if (e.target.closest(".close-btn") || e.target.closest(".menu")) {
      menu.classList.toggle("active-menu");
    } else if (e.target.closest("menu") && e.target.tagName === "A") {
      openClose(e);
    } else if (e.target.closest("#next_section")) {
      e.preventDefault();
      scrollToElem(e.target.closest("#next_section"));
    } else if (
      !e.target.closest("menu") &&
      menu.classList.contains("active-menu")
    ) {
      menu.classList.remove("active-menu");
    }
  };

  document.body.addEventListener("click", (e) => {
    toggleMenu(e);
  });
};
export default menuModule;
