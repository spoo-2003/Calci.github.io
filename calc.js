const s = document.querySelector(".score");
const e = document.querySelector(".button");
let f = document.querySelector(".status");
let start = true;
alert(`check your compatibility out of 100`);
e.addEventListener("click", function () {
  if (start) {
    let n = Math.random();
    n = Math.floor(n * 100) + 1;
    s.textContent = n;
    if (n >= 90 && n <= 100) {
      f.innerHTML = "Exellent!!😍";
    } else if (n >= 80 && n < 90) {
      f.innerHTML = "Good😊";
    } else if (n >= 65 && n < 80) {
      f.innerHTML = "Average🙂";
    } else if (n >= 40 && n < 65) {
      f.innerHTML = "below Average😥";
    } else {
      f.innerHTML = "Low👎";
    }
  }
});
