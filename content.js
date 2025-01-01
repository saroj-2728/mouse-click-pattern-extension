let rightClickCount = 0;
let lastClickTime = 0;
const CLICK_TIMEOUT = 500;

document.addEventListener("mousedown", (event) => {
  if (event.button === 2) {
    const currentTime = Date.now();

    if (currentTime - lastClickTime <= CLICK_TIMEOUT) {
      rightClickCount++;
    } else {
      rightClickCount = 1;
    }

    lastClickTime = currentTime;

    if (rightClickCount === 2) {
      rightClickCount = 0;

      // Send a message to the background script
      chrome.runtime.sendMessage({ action: "goBack" });
    }
  }
});


