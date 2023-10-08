// 가독성 위해 HTML tag 담는 변수 앞에 $ 붙임
const $emailBox = document.querySelector("#email");
const $passwordBox = document.querySelector("#password");
const $passwordCheckBox = document.querySelector("#password_check");
// const $submitButton = document.querySelector(".sign_button");
const $eyeButton = document.querySelector(".eye_off");

const $emailErrMsg = document.createElement("p");
const $passwordErrMsg = document.createElement("p");
const $passwordConfirmErrMsg = document.createElement("p");

// 에러 메시지 추가
const addError = (target, ErrorMessage) => {
  target.classList.add("print_error_message");
  target.textContent = ErrorMessage;

  if (target === $emailErrMsg) {
    $emailBox.after(target);
    $emailBox.classList.add("error_border");
  } else if (target === $passwordErrMsg) {
    $passwordBox.after(target);
    $passwordBox.classList.add("error_border");
  }
};

// 에러 메시지 삭제
const removeError = (target) => {
  if (target === $emailErrMsg) {
    $emailBox.classList.remove("error_border");
  } else if (target === $passwordErrMsg) {
    $passwordBox.classList.remove("error_border");
  }
  target.textContent = "";
};

// 눈모양 버튼 클릭 시 비밀번호 toggle
const togglePassword = () => {
  if ($passwordBox.getAttribute("type") === "password") {
    $passwordBox.setAttribute("type", "text");
    $eyeButton.firstElementChild.setAttribute("src", "./image/eye-on.svg");
  } else if ($passwordBox.getAttribute("type") === "text") {
    $passwordBox.setAttribute("type", "password");
    $eyeButton.firstElementChild.setAttribute("src", "./image/eye-off.svg");
  }
};

export {
  addError,
  removeError,
  togglePassword,
  $emailBox,
  $passwordBox,
  $eyeButton,
  $emailErrMsg,
  $passwordErrMsg,
};