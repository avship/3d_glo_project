import timerModule from "./modules/timer";
import menuModule from "./modules/menu";
import modalModule from "./modules/modal";
import formValidation from "./modules/form-validation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timerModule("7 august 2022");
menuModule();
modalModule();
formValidation();
tabs();
slider({
  sliderClass: "portfolio-content",
  sliderItemsClass: "portfolio-item",
  sliderItemsClassActive: "portfolio-item-active",
  arrows: true,
  arrowLeftClass: "portfolio-btn prev",
  arrowRightClass: "portfolio-btn next",
  dots: true,
  dotsParams: {
    dotContainer: "portfolio-dots",
    dotItemClass: "dot",
    dotActiveClass: "dot-active",
  },
  debug: true,
  timerInterval: 2000,
});

calc(100);
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form3",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form2",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
