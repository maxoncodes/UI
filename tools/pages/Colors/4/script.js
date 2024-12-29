const gradientPreview = document.getElementById('gradient-preview');
const colorList = document.getElementById('color-list');
const cssOutput = document.getElementById('css-output');
const addColorButton = document.getElementById('add-color');
const copyCSSButton = document.getElementById('copy-css');
const generateRandomButton = document.getElementById('generate-random');

// Function to update gradient preview and CSS output
function updateGradient() {
  const colors = Array.from(colorList.querySelectorAll('input[type=color]'))
    .map(input => input.value);
  // Ensure that if no colors are added, the background is default (empty)
  if (colors.length > 0) {
    gradientPreview.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
    cssOutput.value = `background: linear-gradient(to right, ${colors.join(', ')});`;
  }
}

// Function to add a color picker
function addColorPicker(color = '#ffffff') {
  const colorPicker = document.createElement('div');
  colorPicker.classList.add('color-picker');

  const input = document.createElement('input');
  input.type = 'color';
  input.value = color;
  input.addEventListener('input', updateGradient);

  const lockButton = document.createElement('button');
  lockButton.innerHTML = '<i class="fas fa-lock"></i>';

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.addEventListener('click', () => {
    colorPicker.remove();
    updateGradient();
  });

  colorPicker.append(input, lockButton, deleteButton);
  colorList.appendChild(colorPicker);

  updateGradient();  // Ensure the gradient is updated after adding a color
}

// Function to play the click sound from a local path
function playClickSound() {
  const audio = new Audio('tools/pages/Colors/4/click2.mp3'); // Local path for testing in your machine
  audio.play();
}

// Function to show "Text Copied" message
function showTextCopiedMessage() {
  const message = document.createElement('div');
  message.textContent = 'Text Copied!';
  document.body.appendChild(message);

  // Remove the message after 2 seconds
  setTimeout(() => {
    message.remove();
  }, 2000);
}

// Function to change the button text to "Copied" and revert it back after a delay
function changeButtonText(button) {
  button.textContent = 'Copied';
  setTimeout(() => {
    button.textContent = 'Copy CSS';
  }, 2000);
}

// Copy to Clipboard function with additional behaviors
function copyToClipboard() {
  cssOutput.select();
  document.execCommand('copy');

  // Show the "Text Copied" message
  showTextCopiedMessage();

  // Play the click sound
  playClickSound();

  // Change the button text to "Copied"
  changeButtonText(copyCSSButton);
}

// Event listener to add a random color on button click
addColorButton.addEventListener('click', () => {
  const existingColors = Array.from(colorList.querySelectorAll('input[type=color]'))
    .map(input => input.value);
  const newColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  if (!existingColors.includes(newColor)) {
    addColorPicker(newColor);
  }
});

// Event listener to copy CSS to clipboard
copyCSSButton.addEventListener('click', copyToClipboard);

// Event listener to generate a random gradient with two colors
generateRandomButton.addEventListener('click', () => {
  colorList.innerHTML = '';
  for (let i = 0; i < 2; i++) {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    addColorPicker(randomColor);
  }
});

// Initialize with two colors (No #000000 color is used)
addColorPicker('#355C7D');
addColorPicker('#6C5B7B');
updateGradient();  // Ensure gradient is updated on page load
