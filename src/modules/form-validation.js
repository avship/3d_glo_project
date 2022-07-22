const formValidation = () => {
  const digitsFilter = (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
  };
  const messageFilter = (e) => {
    console.log(e.target.value);
    e.target.value = e.target.value.replace(/[^А-Яа-яёЁ \-]/, "");
    console.log(e.target.value);
  };
  const emailInputChecker = (e) => {
    e.target.value = e.target.value.replace(/[^\w@\.\-\_\!\~\*]/, "");
  };
  const phoneInputChecker = (e) => {
    e.target.value = e.target.value.replace(/[^\d\-\(\)\+]/, "");
  };
  const messageClearer = (e) => {
    messageFilter(e);
    e.target.value = e.target.value.trim();
    e.target.value = e.target.value.replace(/ +/g, " ");
    e.target.value = e.target.value.replace(/\-+/g, "-");
    e.target.value =
      e.target.value.slice(0, 1).toUpperCase() + e.target.value.slice(1);
  };
  const calcInputs = document.querySelectorAll(".calc-block input");
  const form2Message = document.querySelector("#form2-message");
  const emailInputs = document.querySelectorAll(".form-email");
  const phoneInputs = document.querySelectorAll(".form-phone");
  const namesInputBlock = document.querySelectorAll(
    'input[placeholder="Ваше имя"]'
  );
  namesInputBlock.forEach((item) => {
    item.addEventListener("input", (e) => {
      messageFilter(e);
      e.target.value = e.target.value
        .split(" ")
        .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
        .join(" ");
    });
  });
  calcInputs.forEach((item) => {
    item.addEventListener("input", digitsFilter);
  });
  form2Message.addEventListener("input", messageFilter);
  form2Message.addEventListener("blur", messageClearer);
  emailInputs.forEach((item) => {
    item.addEventListener("input", emailInputChecker);
  });
  phoneInputs.forEach((item) => {
    item.addEventListener("input", phoneInputChecker);
    item.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(/\-+/g, "-");
      e.target.value = e.target.value.replace(/\(+/g, "(");
      e.target.value = e.target.value.replace(/\)+/g, ")");
      e.target.value = e.target.value.replace(/\++/g, "+");
    });
  });
};

export default formValidation;
