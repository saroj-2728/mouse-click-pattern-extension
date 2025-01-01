chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "goBack") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                chrome.tabs.goBack(tabs[0].id, () => {
                    if (chrome.runtime.lastError) {
                        console.error("Unable to navigate back:", chrome.runtime.lastError.message);
                    }
                });
            }
        });
    }
});