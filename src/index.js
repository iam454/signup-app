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

const ID_REG = new RegExp("^[a-z0-9_-]{5,20}$");
const PW_REG = new RegExp("^[a-zA-Z0-9]{8,16}$");

const idMsg = document.getElementById("id-msg");
const pwMsg = document.getElementById("pw-msg");
const pwCheckMsg = document.getElementById("pw-check-msg");

const ERROR_MSG = {
  required: "필수 정보입니다.",
  invalidId: "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
  invalidPw: "8~16자 영문 대 소문자, 숫자를 사용하세요.",
  invalidPwCheck: "비밀번호가 일치하지 않습니다.",
};

const checkReg = (target) => {
  const { value, id } = target;
  if (value.length === 0) {
    return "required";
  } else {
    switch (id) {
      case "id":
        return ID_REG.test(value) ? true : "invalidId";
      case "pw":
        return PW_REG.test(value) ? true : "invalidPw";
      case "pw-check":
        return pw.value === value ? true : "invalidPwCheck";
    }
  }
};

const checkValidation = (target, msgTarget) => {
  const isValid = checkReg(target);
  if (isValid !== true) {
    target.classList.add("border-red-600");
    msgTarget.innerText = ERROR_MSG[isValid];
  } else {
    target.classList.remove("border-red-600");
    msgTarget.innerText = "";
  }
  return isValid;
};

id.addEventListener("focusout", () => checkValidation(id, idMsg));
pw.addEventListener("focusout", () => checkValidation(pw, pwMsg));
pwCheck.addEventListener("focusout", () =>
  checkValidation(pwCheck, pwCheckMsg)
);

/* -------------------------------------------- */
// 요구사항 4
/* -------------------------------------------- */
const modal = document.getElementById("modal");

const confirmId = document.getElementById("confirm-id");
const confirmPw = document.getElementById("confirm-pw");

const cancelBtn = document.getElementById("cancel-btn");
const approveBtn = document.getElementById("approve-btn");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const isValidForm =
    checkValidation(id, idMsg) === true &&
    checkValidation(pw, pwMsg) === true &&
    checkValidation(pwCheck, pwCheckMsg) === true;
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
});

decreaseFontBtn.addEventListener("click", () => {
  onClickFontSizeControl("decrease");
});

const onClickFontSizeControl = (flag) => {
  const fontSize = getHtmlFontSize();
  let newFontSize = flag === "increase" ? fontSize + 1 : fontSize - 1;
  html.style.fontSize = newFontSize;
  decreaseFontBtn.disabled = newFontSize <= MIN_FONT_SIZE;
  increaseFontBtn.disabled = newFontSize >= MAX_FONT_SIZE;
};
