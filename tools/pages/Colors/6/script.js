const button = document.getElementById("color");
const $p = button.previousElementSibling;

// Load click sound
const clickSound = new Audio("click-sound.mp3"); // Replace with the path to your sound file.

function playClickSound() {
  clickSound.play();
}

function hexColor() {
  let dig = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    color += dig[random];
  }
  return color;
}

function changeColor() {
  let colors = hexColor();
  $p.innerText = "#";
  let counter = 1;
  let interval = setInterval(function () {
    if (counter < colors.length) {
      $p.innerText += colors[counter];
      counter++;
    } else {
      document.body.style = `--background-color: ${$p.innerText}`;
      clearInterval(interval);
    }
  }, 50);
}

function copyText() {
  let content = $p.textContent;
  navigator.clipboard
    .writeText(content)
    .then(() => {
      $p.classList.add("active");
      let i = setInterval(() => {
        $p.classList.remove("active");
        clearInterval(i);
      }, 1000);
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
  playClickSound(); // Play sound only when the text is clicked
}

$p.addEventListener("click", copyText);
button.addEventListener("click", changeColor);
changeColor();
