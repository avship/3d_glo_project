import { animate } from "./helpers";
const calc = (pricePerMeter = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = calcBlock.querySelector("select");
  const calcSquare = calcBlock.querySelector(".calc-square");
  const calcCount = calcBlock.querySelector(".calc-count");
  const calcDay = calcBlock.querySelector(".calc-day");
  const total = calcBlock.querySelector("#total");
  //console.log(calcBlock, calcType, calcSquare, calcCount, calcDay, total);
  const countCalc = () => {
    if (!calcType.selectedIndex || !calcSquare.value) {
      total.textContent = 0;
      return;
    }
    if (calcDay.value === "0") {
      calcDay.value = "";
    }
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;

    console.log();
    let calcCountValue = 1;
    let calcDayValue = 1;
    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }
    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }
    let totalValue =
      pricePerMeter *
      calcTypeValue *
      calcSquareValue *
      calcCountValue *
      calcDayValue;

    const prevVal = +total.textContent;
    // const toVal = Math.round(progress * totalValue);
    // let
    animate({
      duration: 2000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        total.textContent = Math.round(progress * totalValue);
        //document.body.textContent = Math.floor(progress * 100) + "%";
      },
    });
    total.textContent = Math.round(totalValue);
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
};

export default calc;
