const heartEl = document.getElementById("heart");
const coinEl = document.getElementById("coin");
const copyEl = document.getElementById("copy");
const historyItemsEl = document.getElementById("history-items");
const heartBtnEl = document.querySelectorAll(".heart-btn");
const callBtnEl = document.querySelectorAll(".call-btn");
const clearBtn = document.querySelector(".clear-btn");
const copyBtnEl = document.querySelectorAll(".copy-btn");

clearBtn.addEventListener("click", function () {
  historyItemsEl.innerHTML = "";
});

heartBtnEl.forEach((heartBtn) => {
  heartBtn.addEventListener("click", function () {
    heartEl.innerText = Number(heartEl.innerText) + 1;
  });
});

for (item of callBtnEl) {
  item.addEventListener("click", function (event) {
    if (Number(coinEl.innerText) < 20) {
      window.alert("You're out of coin.");
    } else {
      const wholeCard = event.target.closest(".card-call");
      const title = wholeCard.querySelector("h3");
      const number = wholeCard.querySelector("span");
      const time = (now = new Date());

      window.alert("Calling... " + title.innerText + "- " + number.innerText);
      coinEl.innerText = Number(coinEl.innerText) - 20;
      historyItemsEl.innerHTML =
        '<div class="p-4 bg-gray-50 rounded-lg flex justify-between items-center mb-2">' +
        "<div>" +
        '<h4 class="text-base font-semibold text-[18px] text-black">' +
        title.innerText +
        "</h4>" +
        "<p class='text-sm text-gray-500 inter-font'>" +
        number.innerText +
        "</p>" +
        "</div>" +
        "<div class='text-sm font-medium text-black'>" +
        time.getHours() +
        ":" +
        time.getMinutes() +
        ":" +
        time.getSeconds() +
        "</div>" +
        "</div>" +
        historyItemsEl.innerHTML;
    }
  });
}

copyBtnEl.forEach((copyBtn) => {
  copyBtn.addEventListener("click", function () {
    const wholeCard = event.target.closest(".card-call");
    const number = wholeCard.querySelector("span");
    navigator.clipboard.writeText(number.innerText);
    window.alert("You copied: " + number.innerText);
    copyEl.innerText = Number(copyEl.innerText) + 1;
  });
});
