// Modification des en-têtes de requête avant l'envoi
chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
      details.requestHeaders.push({
        name: "Access-Control-Allow-Origin",
        value: "*",
      });
      return { requestHeaders: details.requestHeaders };
    },
    {
      urls: [
        "https://ecole-directe.plus/*",
        "https://www.ecoledirecte.com/*",
        "https://api.ecoledirecte.com/*", // URL de l'API spécifique
      ],
    },
    ["blocking", "requestHeaders"]
  );
  
  // Modification des en-têtes de réponse
  chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
      let headers = details.responseHeaders || [];
      headers.push(
        { name: "Access-Control-Allow-Origin", value: "*" },
        { name: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
        { name: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" }
      );
  
      return { responseHeaders: headers };
    },
    {
      urls: ["https://api.ecoledirecte.com/*"], // Spécifique à l'API Ecole Directe
    },
    ["blocking", "responseHeaders"]
  );
  