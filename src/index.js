// TODO: 이 곳에 정답 코드를 작성해주세요.

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

// 요구사항 2
/* -------------------------------------------- */
const pw = document.getElementById("pw");
const pwCheck = document.getElementById("pw-check");
const submit = document.getElementById("submit");

// ID : 5~20자(영문 소문자, 숫자, _, -)
const ID_REG = new RegExp("^[a-z0-9_-]{5,20}$");

const checkIdValidation = (value) => {
  const isValidId = ID_REG.test(value);
  console.log(isValidId);
};

id.addEventListener("focusout", (e) => checkIdValidation(e.target.value));

// PW : 8~16자(영문 대/소문자, 숫자)
const PW_REG = new RegExp("^[a-zA-Z0-9]{8,16}$");

const checkPwValidation = (value) => {
  const isValidPw = PW_REG.test(value);
  console.log(isValidPw);
};

pw.addEventListener("focusout", (e) => checkPwValidation(e.target.value));

// 비밀번호 일치 여부
const checkPwCheckValidation = (value) => {
  const isValidPwCheck = pw.value === value;
  console.log(isValidPwCheck);
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
