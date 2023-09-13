console.log("hello background")

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);
  });