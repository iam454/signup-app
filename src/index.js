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

const checkIdRegex = (value) => {
  if (value.length === 0) {
    return "required";
  } else {
    return ID_REG.test(value) ? true : "invalid";
  }
};

const checkIdValidation = (value) => {
  const isValidId = checkIdRegex(value);
  if (isValidId !== true) {
    id.classList.add("border-red-600");
    idMsg.innerText = ID_ERROR_MSG[isValidId];
  } else {
    id.classList.remove("border-red-600");
    idMsg.innerText = "";
  }
  return isValidId;
};

id.addEventListener("focusout", (e) => checkIdValidation(e.target.value));

// PW : 8~16자(영문 대/소문자, 숫자)
const PW_REG = new RegExp("^[a-zA-Z0-9]{8,16}$");

const pwMsg = document.getElementById("pw-msg");
const PW_ERROR_MSG = {
  required: "필수 정보입니다.",
  invalid: "8~16자 영문 대 소문자, 숫자를 사용하세요.",
};

const checkPwRegex = (value) => {
  if (value.length === 0) {
    return "required";
  } else {
    return PW_REG.test(value) ? true : "invalid";
  }
};

const checkPwValidation = (value) => {
  const isValidPw = checkPwRegex(value);
  if (isValidPw !== true) {
    pw.classList.add("border-red-600");
    pwMsg.innerText = PW_ERROR_MSG[isValidPw];
  } else {
    pw.classList.remove("border-red-600");
    pwMsg.innerText = "";
  }
  return isValidPw;
};

pw.addEventListener("focusout", (e) => checkPwValidation(e.target.value));

// 비밀번호 일치 여부
const pwCheckMsg = document.getElementById("pw-check-msg");
const PW_CHECK_ERROR_MSG = {
  required: "필수 정보입니다.",
  invalid: "비밀번호가 일치하지 않습니다.",
};

const checkPwCheckRegex = (value) => {
  if (value.length === 0) {
    return "required";
  } else {
    return pw.value === value ? true : "invalid";
  }
};

const checkPwCheckValidation = (value) => {
  const isValidPwCheck = checkPwCheckRegex(value);
  if (isValidPwCheck !== true) {
    pwCheck.classList.add("border-red-600");
    pwCheckMsg.innerText = PW_CHECK_ERROR_MSG[isValidPwCheck];
  } else {
    pwCheck.classList.remove("border-red-600");
    pwCheckMsg.innerText = "";
  }
  return isValidPwCheck;
};

pwCheck.addEventListener("focusout", (e) =>
  checkPwCheckValidation(e.target.value)
);

/* -------------------------------------------- */
// 요구사항 4
/* -------------------------------------------- */
// 가입 버튼 클릭
const modal = document.getElementById("modal");

const confirmId = document.getElementById("confirm-id");
const confirmPw = document.getElementById("confirm-pw");

const cancelBtn = document.getElementById("cancel-btn");
const approveBtn = document.getElementById("approve-btn");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const isValidForm =
    checkIdValidation(id.value) === true &&
    checkPwValidation(pw.value) === true &&
    checkPwCheckValidation(pwCheck.value) === true;
  if (isValidForm) {
    confirmId.innerText = id.value;
    confirmPw.innerText = pw.value;
    modal.showModal();
  }
});

cancelBtn.addEventListener("click", () => {
  modal.close();
});

approveBtn.addEventListener("click", () => {
  window.alert("가입되었습니다 🥳");
  modal.close();
  // location.reload();
});

/* -------------------------------------------- */
// 요구사항 5
/* -------------------------------------------- */
const increaseFontBtn = document.getElementById("increase-font-btn");
const decreaseFontBtn = document.getElementById("decrease-font-btn");

const MAX_FONT_SIZE = 20;
const MIN_FONT_SIZE = 12;

const html = document.documentElement;

const getHtmlFontSize = () => {
  return parseFloat(window.getComputedStyle(html).fontSize);
};

increaseFontBtn.addEventListener("click", () => {
  onClickFontSizeControl("increase");
  // const nextFontSize = getHtmlFontSize() + 1;
  // html.style.fontSize = nextFontSize;
  // if (nextFontSize >= MAX_FONT_SIZE) {
  //   increaseFontBtn.disabled = true;
  // }
  // if (nextFontSize > MIN_FONT_SIZE) {
  //   decreaseFontBtn.disabled = false;
  // }
});

decreaseFontBtn.addEventListener("click", () => {
  onClickFontSizeControl("decrease");
  // const nextFontSize = getHtmlFontSize() - 1;
  // html.style.fontSize = nextFontSize;
  // if (nextFontSize <= MIN_FONT_SIZE) {
  //   decreaseFontBtn.disabled = true;
  // }
  // if (nextFontSize < MAX_FONT_SIZE) {
  //   increaseFontBtn.disabled = false;
  // }
});

const onClickFontSizeControl = (flag) => {
  const fontSize = getHtmlFontSize();
  let newFontSize = flag === "increase" ? fontSize + 1 : fontSize - 1;
  html.style.fontSize = newFontSize;
  decreaseFontBtn.disabled = newFontSize <= MIN_FONT_SIZE;
  increaseFontBtn.disabled = newFontSize >= MAX_FONT_SIZE;
};
