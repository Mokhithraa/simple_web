const btn = document.getElementById("gameBtn");
const msg = document.getElementById("gameMessage");

btn.addEventListener("click", () => {
  const messages = [
    "You clicked me! 🎉",
    "Keep going, you’re awesome! 🚀",
    "Learning GitHub is fun! 😎",
  ];
  const random = Math.floor(Math.random() * messages.length);
  msg.textContent = messages[random];
});

const toggleBtn = document.getElementById("toggleTheme");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});
