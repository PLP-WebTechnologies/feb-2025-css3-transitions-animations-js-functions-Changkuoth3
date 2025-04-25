// Store name in localStorage and update UI
function saveName() {
  const name = document.getElementById("nameInput").value.trim();
  if (name) {
    localStorage.setItem("username", name);
    document.getElementById("username").textContent = name;
  }
}

// Load stored name on page load
window.onload = () => {
  const storedName = localStorage.getItem("username");
  if (storedName) {
    document.getElementById("username").textContent = storedName;
  }
};

// Trigger CSS animation using JS
function triggerAnimation() {
  const box = document.getElementById("box");
  box.classList.remove("animate"); // reset animation
  void box.offsetWidth; // reflow to restart animation
  box.classList.add("animate");
}
