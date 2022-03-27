// set inital value to zero
let countA = 0;
let countB = 0;
// select value and buttons
const valueA = document.querySelector("#valueA");
const valueB = document.querySelector("#valueB");

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decreaseA")) {
      countA--;
    } else if (styles.contains("increaseA")) {
      countA++;
    } else if (styles.contains("resetA")) {
      countA = 0;
    } else {
      return true;
    }

    if (countA > 0) {
      valueA.style.color = "green";
    }
    if (countA < 0) {
      valueA.style.color = "red";
    }
    if (countA === 0) {
      valueA.style.color = "#222";
    }
    valueA.textContent = countA;
  });
});

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decreaseB")) {
      countB--;
    } else if (styles.contains("increaseB")) {
      countB++;
    } else if (styles.contains("resetB")) {
      countB = 0;
    } else {
      return true;
    }

    if (countB > 0) {
      valueB.style.color = "green";
    }
    if (countB < 0) {
      valueB.style.color = "red";
    }
    if (countB === 0) {
      valueB.style.color = "#222";
    }
    valueB.textContent = countB;
  });
});
