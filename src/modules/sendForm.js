const sendForm = ({ formId, someElem = [] }) => {
  const form = document.querySelector(`#${formId}`);

  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо, наш менеджер встретится с вами";

  const validatePhone = (phoneInput) => {
    let flag = true;
    const tmp = phoneInput.value.trim().replace(/[^\d]/g, "");
    if (
      phoneInput.value.slice(0, 1) === "+" ||
      phoneInput.value.slice(0, 1) === "8"
    ) {
      if (tmp.length < 10) {
        phoneInput.classList.add("error");
        flag = false;
      } else {
        phoneInput.classList.remove("error");
      }
    } else {
      if (tmp.length < 6) {
        phoneInput.classList.add("error");
        flag = false;
      } else {
        phoneInput.classList.remove("error");
      }
    }
    return flag;
  };
  const validateEmail = (emailInput) => {
    let flag = true;
    let pattern =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (
      !pattern.test(String(emailInput.value).toLowerCase()) ||
      emailInput.value === ""
    ) {
      emailInput.classList.add("error");
      flag = false;
    } else {
      emailInput.classList.remove("error");
    }
    return flag;
  };
  const validateName = (nameInput) => {
    let flag = true;
    if (nameInput.value.length < 2) {
      nameInput.classList.add("error");
      flag = false;
    }
    if (nameInput.value.length >= 2) {
      nameInput.classList.remove("error");
    }
    return flag;
  };

  const validate = (list) => {
    let success = true;

    const nameInp = form.querySelector('input[name="user_name"]');
    const emailInp = form.querySelector('input[name="user_email"]');
    const phoneInp = form.querySelector('input[name="user_phone"]');

    //console.log(nameInp, emailInp, phoneInp);
    if (
      !validateName(nameInp) ||
      !validateEmail(emailInp) ||
      !validatePhone(phoneInp)
    ) {
      success = false;
    }
    return success;
  };
  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };
  const toggleError = (testInput) => {
    if (
      testInput.getAttribute("name") === "user_name" &&
      !testInput.classList.contains("not-sent")
    ) {
      validateName(testInput);
    }
    if (
      testInput.getAttribute("name") === "user_email" &&
      !testInput.classList.contains("not-sent")
    ) {
      validateEmail(testInput);
    }
    if (
      testInput.getAttribute("name") === "user_phone" &&
      !testInput.classList.contains("not-sent")
    ) {
      validatePhone(testInput);
    }
    // if (
    //   testInput.getAttribute("name") === "user_message" &&
    //   !testInput.classList.contains("not-sent")
    // ) {
    //   if (!testInput.value.length) {
    //     testInput.classList.add("error");
    //   } else {
    //     testInput.classList.remove("error");
    //   }
    // }
  };
  const submitForm = () => {
    const listElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};
    statusBlock.style.color = "#FFF";
    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      if (val.trim() !== "") {
        formBody[key] = val;
      }
    });
    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (element) {
        if (
          elem.type === "block" &&
          element.textContent.trim() !== "" &&
          element.textContent.trim() !== "0"
        ) {
          formBody[elem.id] = element.textContent.trim();
        }
        if (
          elem.type === "input" &&
          element.value.trim() !== "" &&
          element.value.trim() !== "0"
        ) {
          formBody[elem.id] = element.value.trim();
        }
      }
    });
    if (validate(listElements)) {
      sendData(formBody)
        .then((data) => {
          console.log(data);
          listElements.forEach((input) => {
            input.value = "";
          });
          if (form.closest(".popup")) {
            statusBlock.style.color = "#FFF";
          }
          statusBlock.textContent = successText;
          setTimeout(() => {
            statusBlock.textContent = "";
          }, 4000);
        })
        .catch((err) => {
          if (form.closest(".popup")) {
            statusBlock.style.color = "#FFF";
          }
          statusBlock.textContent = errorText;
          setTimeout(() => {
            statusBlock.textContent = "";
          }, 3000);
        });
    }
  };
  try {
    if (!form) {
      throw new Error("Вернииите формту на место, пожААААААлуйста!!!");
    }
    form.querySelectorAll("input").forEach((element) => {
      element.classList.add("not-sent");
    });
    form.addEventListener("input", (e) => {
      e.target.value = e.target.value.trim();
      toggleError(e.target);
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      form.querySelectorAll("input").forEach((element) => {
        element.classList.remove("not-sent");
        toggleError(element);
      });

      let flag = true;
      form.querySelectorAll("input").forEach((elem, id) => {
        elem.value = elem.value.trim();
        if (elem.classList.contains("error")) {
          flag = false;
        }
        if (elem.value === "" && elem.getAttribute("name") !== "user_message") {
          elem.classList.add("error");
          flag = false;
        }
      });
      if (flag) {
        submitForm();
        form.querySelectorAll("input").forEach((elem) => {
          if (elem.classList.contains("error")) {
            elem.value = "";
          }
        });
        if (form.closest(".popup")) {
          setTimeout(() => {
            form.closest(".popup").style.display = "none";
          }, 3000);
        }
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
