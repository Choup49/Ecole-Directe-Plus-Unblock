chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_EXTENSION_INFO') {
      sendResponse({ version: chrome.runtime.getManifest().version });
  }
});
if (response && response.version) {
  const message = {
      type: "EDP_UNBLOCK",
      payload: {
          message: "EXTENSION_INSTALLED",
          version: response.version
      }
  };

  window.postMessage(message, "*");
} else {
  console.error("Failed to retrieve extension information.");
}
window.postMessage({ ...message, source: "EDP_EXTENSION" }, "*");
chrome.runtime.sendMessage({ type: 'GET_EXTENSION_INFO' }, (response) => {
  if (chrome.runtime.lastError) {
      console.error("Error communicating with the extension:", chrome.runtime.lastError.message);
      return;
  }

  if (response) {
      const message = {
          type: "EDP_UNBLOCK",
          payload: {
              message: "EXTENSION_INSTALLED",
              version: response.version
          }
      };
      window.postMessage(message, "*");
  } else {
      console.error("No response from the extension.");
  }
});
