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
