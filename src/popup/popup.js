const loginbtn = document.getElementsByClassName("login-btn")[0];
console.log(loginbtn);
loginbtn.addEventListener("click", async () => {
    await chrome.action.setPopup({ popup: "src/auth/login.html"});
    window.location.assign(chrome.runtime.getURL("src/auth/login.html"));
});

const toggleBtn = document.querySelector(".onbtn");

function updateToggle(enabled) {
  toggleBtn.textContent = enabled ? "On" : "Off";
  toggleBtn.classList.toggle("on", enabled);
  toggleBtn.classList.toggle("off", !enabled);
}

chrome.storage.local.get("enabled", ({ enabled }) => {
  updateToggle(enabled);
});

toggleBtn.addEventListener("click", async () => {
  const { enabled } = await chrome.storage.local.get("enabled");
  const newState = !enabled;
  await chrome.storage.local.set({ enabled: newState });
  updateToggle(newState)
});