const css = document.querySelector('#current-colors');
const firstColor = document.querySelector('#first-color');
const secondColor = document.querySelector('#second-color');
const body = document.querySelector('#gradient');
const randomBtn = document.querySelector('#random-btn');
const buttonOne = document.querySelector('#btn-1');
const buttonTwo = document.querySelector('#btn-2');
const clickSound = new Audio('click2.mp3'); // Path to the sound file

// Event Listeners for the color inputs
firstColor.addEventListener('input', setGradient);
secondColor.addEventListener('input', setGradient);
randomBtn.addEventListener('click', randomGradient);
buttonOne.addEventListener('click', firstRandom);
buttonTwo.addEventListener('click', secondRandom);

// Event listener for copying the gradient code
css.addEventListener('click', copyGradient);

// Call function to set the initial colors for the background
setGradient();

// Change the background colors
function setGradient() {
  body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
  css.textContent = body.style.background;
}

// Random color
function randomColor() {
  let hexColorValues = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexColorValues[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generate both random colors
function randomGradient() {
  firstColor.value = randomColor();
  secondColor.value = randomColor();
  setGradient();
}

// Generate a random color on the left side
function firstRandom() {
  firstColor.value = randomColor();
  setGradient();
}

// Generate a random color on the right side
function secondRandom() {
  secondColor.value = randomColor();
  setGradient();
}

// Copy the gradient code to clipboard and show "Copied" message
function copyGradient() {
  // Copy the gradient text
  navigator.clipboard.writeText(css.textContent).then(() => {
    // Show "Copied" message
    const originalText = css.textContent;
    css.textContent = 'Copied!';
    
    // Play click sound
    clickSound.play();

    // Revert to the original gradient text after 1 second
    setTimeout(() => {
      css.textContent = originalText;
    }, 1000);
  });
}
