const heartEl = document.getElementById("heart");
const coinEl = document.getElementById("coin");
const copyEl = document.getElementById("copy");
const heartBtnEl = document.querySelectorAll(".heart-btn");
console.log(heartBtnEl);

heartBtnEl.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    console.log(event.target);
    heartEl.innerText = Number(heartEl.innerText) + 1;
  });
});
