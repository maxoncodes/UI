// Preload click sound
const clickSound = new Audio("click-sound.mp3"); // Replace with the actual path to your sound file.

// Function to copy text to clipboard and show "Copied" message
function copyToClipboard(text, element) {
  navigator.clipboard.writeText(text).then(() => {
    element.innerText = `${text} (Copied!)`;
    setTimeout(() => {
      element.innerText = text; // Revert back after 2 seconds
    }, 2000);
  });
}

// Play click sound
function playClickSound() {
  clickSound.play();
}

// List of colors for the "list" section
const colorList = [
  "red",
  "#000",
  "#fcba03",
  "#6f9bab",
  "rgb(239, 199, 240)",
  "dodgerblue",
  "yellow",
  "rgb(255, 255, 255)"
];

// Array of HEX components
const hexComposer = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F"
];

// DOM references
const btnList = document.querySelector(".btn-list");
const btnHex = document.querySelector(".btn-hex");
const btnRgb = document.querySelector(".btn-rgb");
const hexLi = document.getElementById("hexLi");
const simpleLi = document.getElementById("simpleLi");
const rgbLi = document.getElementById("rgbLi");
const colorTextlist = document.getElementById("bghere1");
const colorTextHex = document.getElementById("bghere2");
const colorTextRgb = document.getElementById("bghere3");

let bgColor = 0;

// NAVIGATION INTERACTIONS

hexLi.addEventListener("click", function () {
  document.querySelector(".hex.d-none").classList.remove("d-none");
  document.querySelector(".list").classList.add("d-none");
  document.querySelector(".rgb").classList.add("d-none");
});

simpleLi.addEventListener("click", function () {
  document.querySelector(".list.d-none").classList.remove("d-none");
  document.querySelector(".hex").classList.add("d-none");
  document.querySelector(".rgb").classList.add("d-none");
});

rgbLi.addEventListener("click", function () {
  document.querySelector(".rgb.d-none").classList.remove("d-none");
  document.querySelector(".hex").classList.add("d-none");
  document.querySelector(".list").classList.add("d-none");
});

// Click listener for list button
btnList.addEventListener("click", function () {
  bgColor++;
  if (bgColor > colorList.length - 1) {
    bgColor = 0;
  }
  const selectedColor = colorList[bgColor];
  document.body.style.backgroundColor = selectedColor;
  colorTextlist.innerText = `${selectedColor}`;
});

// Click listener for HEX button
btnHex.addEventListener("click", function () {
  const hexColor = `#${Array(6)
    .fill()
    .map(() => hexComposer[Math.floor(Math.random() * 16)])
    .join("")}`;
  document.body.style.backgroundColor = hexColor;
  colorTextHex.innerText = `${hexColor}`;
});

// Click listener for RGB button
btnRgb.addEventListener("click", function () {
  const rgbColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  document.body.style.backgroundColor = rgbColor;
  colorTextRgb.innerText = `${rgbColor}`;
});

// Event listeners for manual copying
colorTextlist.addEventListener("click", function () {
  const colorCode = colorTextlist.innerText;
  copyToClipboard(colorCode, colorTextlist);
  playClickSound();
});

colorTextHex.addEventListener("click", function () {
  const colorCode = colorTextHex.innerText;
  copyToClipboard(colorCode, colorTextHex);
  playClickSound();
});

colorTextRgb.addEventListener("click", function () {
  const colorCode = colorTextRgb.innerText;
  copyToClipboard(colorCode, colorTextRgb);
  playClickSound();
});
