document.addEventListener("DOMContentLoaded", function () {
  const showPopupButton = document.getElementById("showPopupButton");

  showPopupButton.addEventListener("click", function () {
    chrome.scripting.executeScript({
      target: { tabId: chrome.tabs.getCurrent().id },
      function: function () {
        alert("HelloWorld");
      },
    });
  });
});
