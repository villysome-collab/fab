const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

const mainScreen = document.getElementById("mainScreen");
const successScreen = document.getElementById("successScreen");

const noMessages = ["Are you sure?", "Think again", "No way"];
let noIndex = 0;

// YES → animated screen switch
yesBtn.addEventListener("click", () => {
  mainScreen.classList.remove("active");
  successScreen.classList.add("active");
});

// NO button prank 😈
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// If NO somehow gets clicked
noBtn.addEventListener("click", () => {
  message.innerText = noMessages[noIndex];
  noIndex = (noIndex + 1) % noMessages.length;
});
