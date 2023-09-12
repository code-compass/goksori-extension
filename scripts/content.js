console.log("hello content")

document.addEventListener("copy", async (evt) => {
    const text = await navigator.clipboard.readText();
    await chrome.runtime.sendMessage(text);
  });