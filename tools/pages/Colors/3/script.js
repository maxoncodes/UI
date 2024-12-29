document.addEventListener("DOMContentLoaded", () => {
  const colors = document.querySelectorAll(".colors");
  const generateButton = document.getElementById("generate-color");

  // Add click sound
  const clickSound = new Audio("click.mp3"); // Replace with the path to your sound file

  // Function to generate random colors
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
  };

  // Function to update colors
  const updateColors = () => {
    colors.forEach((color) => {
      const newColor = generateRandomColor();
      const colorBox = color.querySelector(".colors-inner");
      const hexText = color.querySelector("span");

      colorBox.style.backgroundColor = newColor;
      hexText.textContent = newColor;
    });
  };

  // Function to copy color and show "Copied" text
  const copyColor = (event) => {
    const hexText = event.target.nextElementSibling;
    const colorCode = hexText.textContent;

    // Copy to clipboard
    navigator.clipboard.writeText(colorCode).then(() => {
      // Temporarily show "Copied" text
      const originalText = hexText.textContent;
      hexText.textContent = "Copied!";
      hexText.style.color = "green";

      setTimeout(() => {
        hexText.textContent = originalText;
        hexText.style.color = ""; // Reset color
      }, 1500);

      // Play click sound
      clickSound.currentTime = 0; // Reset sound to start
      clickSound.play();
    });
  };

  // Attach click event listeners to color boxes
  colors.forEach((color) => {
    const colorBox = color.querySelector(".colors-inner");
    colorBox.addEventListener("click", copyColor);
  });

  // Attach click event listener to generate button
  generateButton.addEventListener("click", updateColors);

  // Initial colors on page load
  updateColors();
});
