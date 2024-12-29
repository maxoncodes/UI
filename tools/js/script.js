// Toggle day/night mode
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleThemeButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Sidebar toggle functionality
const toggleButtons = document.querySelectorAll('.toggle-btn');
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const options = button.nextElementSibling;
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
  });
});

// Load content into iframe
function loadPage(url) {
  const iframe = document.getElementById('content-iframe');
  iframe.src = url;
}

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling effect for all scrollable elements
    const scrollableElements = document.querySelectorAll('*');
  
    scrollableElements.forEach((element) => {
      element.addEventListener('wheel', (event) => {
        // Only apply to scrollable elements
        if (element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth) {
          event.preventDefault();
          element.scrollBy({
            top: event.deltaY, // Vertical scroll
            left: event.deltaX, // Horizontal scroll
            behavior: 'smooth', // Smooth scrolling
          });
        }
      });
    });
  });

//Light/Dark  js

document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggle-theme");
  const iframe = document.getElementById("content-iframe");


  // Toggle theme
  toggleThemeButton.addEventListener("click", () => {
      let currentTheme = localStorage.getItem("theme") || "light";
      let newTheme = currentTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
      toggleThemeButton.textContent = newTheme === "light" ? "🌙" : "☀️";
  });

  // Set initial theme based on localStorage
  let savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
  toggleThemeButton.textContent = savedTheme === "light" ? "🌙" : "☀️";

  // Listen for theme updates inside iframe
  window.addEventListener("message", (event) => {
      if (event.data && event.data.theme) {
          document.body.className = event.data.theme;
      }
  });
});

//MOD JS

// JavaScript to handle sidebar toggle for mobile devices
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.createElement("button");
  const mainContent = document.querySelector("main");

  // Create Hamburger Button
  hamburger.classList.add("hamburger");
  hamburger.innerHTML = "☰";
  document.body.insertBefore(hamburger, sidebar);

  // Initial Sidebar Hidden State
  sidebar.style.display = "block";

  // Toggle Sidebar Visibility
  hamburger.addEventListener("click", function () {
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
      sidebar.style.display = "block";
      hamburger.classList.add("active");
    } else {
      sidebar.style.display = "none";
      hamburger.classList.remove("active");
    }
  });

  // Close Sidebar when clicking outside
  mainContent.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      sidebar.style.display = "none";
      hamburger.classList.remove("active");
    }
  });

  // Adjust Sidebar State on Resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      sidebar.style.display = "block";
    } else {
      sidebar.style.display = "none";
      hamburger.classList.remove("active");
    }
  });
});


// SWITCH JS

function showWelcome() {
  document.getElementById('welcome-content').style.display = 'block';
  document.getElementById('content-iframe').style.display = 'none';
}

function loadPage(url) {
  document.getElementById('welcome-content').style.display = 'none';
  document.getElementById('content-iframe').style.display = 'block';
  document.getElementById('content-iframe').src = url;
}

  
//WELCOME JS
document.querySelector('.neumorphic-wave').addEventListener('mouseenter', () => {
  const waves = document.querySelectorAll('.wave');
  waves.forEach(wave => {
    wave.style.animationDuration = '2s'; // Speed up on hover
  });
});

document.querySelector('.neumorphic-wave').addEventListener('mouseleave', () => {
  const waves = document.querySelectorAll('.wave');
  waves.forEach(wave => {
    wave.style.animationDuration = '4s'; // Reset to normal speed
  });
});



