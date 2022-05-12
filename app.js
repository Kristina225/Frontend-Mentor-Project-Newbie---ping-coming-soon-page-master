const subscribeForm = document.querySelector(".subscribe__form");
const emailInput = document.querySelector(".subscribe__form--input");
const errorMsg = document.querySelector(".subscribe__form--error");

const isEmailValid = (enteredEmail) => {
  emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(enteredEmail);
};

const showErrorMsg = (message) => {
  emailInput.style.border = "1px solid #FF5466";
  errorMsg.textContent = message;
};

const hideErrorMsg = () => {
  emailInput.style.border = "1px solid #c2d3ff";
  errorMsg.textContent = "";
};

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  hideErrorMsg();
  const enteredEmail = emailInput.value.trim();
  if (enteredEmail === "" || enteredEmail === null) {
    showErrorMsg("Whoops! It looks like you forgot to add your email");
  } else if (!isEmailValid(enteredEmail)) {
    showErrorMsg("Please provide a valid email address");
  }
});
