const cancelbtn = document.getElementsByClassName("cancel-btn")[0];
cancelbtn.addEventListener("click", async () => {
    await chrome.action.setPopup({ popup: "src/popup/popup.html"});
    window.location.assign(chrome.runtime.getURL("src/popup/popup.html"));
});
