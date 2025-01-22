chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        details.requestHeaders.push({
            name: "Access-Control-Allow-Origin",
            value: "*"
        });
        return { requestHeaders: details.requestHeaders };
    },
    { urls: ["https://ecole-directe.plus/*", "https://www.ecoledirecte.com/*"] },
    ["blocking", "requestHeaders"]
);


        headers.push(
            { name: "Access-Control-Allow-Origin", value: "*" },
            { name: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
            { name: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" }
        );

        return { responseHeaders: headers };
    },
    { urls: ["https://api.ecoledirecte.com/*"] }, // Remplacez par les URLs spécifiques si besoin
    ["blocking", "responseHeaders"]
);
