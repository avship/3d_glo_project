const sendForm = ({ formId, someElem = [] }) => {
  const form = document.querySelector(`#${formId}`);

  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо, наш менеджер встретиться с вами";

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
  const submitForm = () => {
    const listElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });
    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (element) {
        if (elem.type === "block" && element.textContent.trim() !== "") {
          formBody[elem.id] = element.textContent.trim();
        }
        if (elem.type === "input" && element.value.trim() !== "") {
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
          statusBlock.textContent = successText;
        })
        .catch((err) => {
          statusBlock.textContent = errorText;
        });
    }
  };
  try {
    if (!form) {
      throw new Error("Вернииите формту на место, пожААААААлуйста!!!");
    }
    form.addEventListener("input", (e) => {
      if (e.target.getAttribute("name") === "user_name") {
        validateName(e.target);
      }
      if (e.target.getAttribute("name") === "user_email") {
        validateEmail(e.target);
      }
      if (e.target.getAttribute("name") === "user_phone") {
        validatePhone(e.target);
      }
      if (e.target.getAttribute("name") === "user_message") {
        if (!e.target.value.length) {
          e.target.classList.add("error");
        } else {
          e.target.classList.remove("error");
        }
      }
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let flag = true;
      form.querySelectorAll("input").forEach((elem, id) => {
        elem.value = elem.value.trim();
        if (elem.classList.contains("error")) {
          flag = false;
        }
        if (elem.value === "") {
          elem.classList.add("error");
          flag = false;
        }
      });
      if (flag) {
        submitForm();
        form.querySelectorAll("input").forEach((elem) => (elem.value = ""));
        if (form.closest(".popup")) {
          form.closest(".popup").style.display = "none";
        }
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
