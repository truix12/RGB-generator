const INP = document.querySelectorAll("input");

const RED_DISPLAY = document.querySelector('.red-display');
const GREEN_DISPLAY = document.querySelector('.green-display');
const BLUE_DISPLAY = document.querySelector('.blue-display');

const DISPLAY_COLOR = document.querySelector(".color");

const RED_VALUE = document.querySelector('.red-value');
const GREEN_VALUE = document.querySelector('.green-value');
const BLUE_VALUE = document.querySelector('.blue-value');

let colorR = INP[0];
let colorG = INP[1];
let colorB = INP[2];

for (const i of INP) {
  i.addEventListener("input", function () {
    if (i.className == "red") {
      DISPLAY_COLOR.style.backgroundColor = `rgb(${colorR.value}, ${colorG.value}, ${colorB.value})`;
      RED_DISPLAY.innerHTML = `${colorR.value}`;
      RED_VALUE.innerHTML = `${colorR.value}`;
    }
    if (i.className == "green") {
      DISPLAY_COLOR.style.backgroundColor = `rgb(${colorR.value}, ${colorG.value}, ${colorB.value})`;
      GREEN_DISPLAY.innerHTML = `${colorG.value}`;
      GREEN_VALUE.innerHTML = `${colorG.value}`;
    } else {
      DISPLAY_COLOR.style.backgroundColor = `rgb(${colorR.value}, ${colorG.value}, ${colorB.value})`;
      BLUE_DISPLAY.innerHTML = `${colorB.value}`;
      BLUE_VALUE.innerHTML = `${colorB.value}`;
    }
  })
}