// TODO: 이 곳에 정답 코드를 작성해주세요.

/* -------------------------------------------- */
// 요구사항 1
/* -------------------------------------------- */
// 방법 1
const id = document.getElementById("id");
// const $id = document.getElementById("id");
// $변수 : DOM을 통해 가져온 변수

window.addEventListener("load", () => {
  id.focus();
});

// 방법 2
// input attr에 autofocus를 직접 부여

/* -------------------------------------------- */
// 요구사항 2, 3
/* -------------------------------------------- */
const pw = document.getElementById("pw");
const pwCheck = document.getElementById("pw-check");
const submit = document.getElementById("submit");

// ID : 5~20자(영문 소문자, 숫자, _, -)
const ID_REG = new RegExp("^[a-z0-9_-]{5,20}$");

const idMsg = document.getElementById("id-msg");
const ID_ERROR_MSG = {
  required: "필수 정보입니다.",
  invalid: "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
};

const checkIdValidation = (value) => {
  let isValidId = "required";
  if (value) {
    isValidId = ID_REG.test(value) ? true : "invalid";
  }
  if (isValidId !== true) {
    id.classList.add("border-red-600");
    idMsg.innerText = ID_ERROR_MSG[isValidId];
  } else {
    id.classList.remove("border-red-600");
    idMsg.innerText = "";
  }
};

id.addEventListener("focusout", (e) => checkIdValidation(e.target.value));

// PW : 8~16자(영문 대/소문자, 숫자)
const PW_REG = new RegExp("^[a-zA-Z0-9]{8,16}$");

const pwMsg = document.getElementById("pw-msg");
const PW_ERROR_MSG = {
  required: "필수 정보입니다.",
  invalid: "8~16자 영문 대 소문자, 숫자를 사용하세요.",
};

const checkPwValidation = (value) => {
  let isValidPw = "required";
  if (value) {
    isValidPw = PW_REG.test(value) ? true : "invalid";
  }
  if (isValidPw !== true) {
    pw.classList.add("border-red-600");
    pwMsg.innerText = PW_ERROR_MSG[isValidPw];
  } else {
    pw.classList.remove("border-red-600");
    pwMsg.innerText = "";
  }
};

pw.addEventListener("focusout", (e) => checkPwValidation(e.target.value));

// 비밀번호 일치 여부
const pwCheckMsg = document.getElementById("pw-check-msg");
const PW_CHECK_ERROR_MSG = {
  required: "필수 정보입니다.",
  invalid: "비밀번호가 일치하지 않습니다.",
};

const checkPwCheckValidation = (value) => {
  let isValidPwCheck = "required";
  if (value) {
    isValidPwCheck = pw.value === value ? true : "invalid";
  }
  if (isValidPwCheck !== true) {
    pwCheck.classList.add("border-red-600");
    pwCheckMsg.innerText = PW_CHECK_ERROR_MSG[isValidPwCheck];
  } else {
    pwCheck.classList.remove("border-red-600");
    pwCheckMsg.innerText = "";
  }
};

pwCheck.addEventListener("focusout", (e) =>
  checkPwCheckValidation(e.target.value)
);

// 가입 버튼 클릭
submit.addEventListener("click", (e) => {
  e.preventDefault();
  checkIdValidation(id.value);
  checkPwValidation(pw.value);
  checkPwCheckValidation(pwCheck.value);
});
