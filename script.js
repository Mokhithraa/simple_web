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
