chrome.webRequest.onHeadersReceived.addListener(
    (details) => {
        const headers = details.responseHeaders.filter(
            (header) =>
                !["access-control-allow-origin", "access-control-allow-headers"].includes(
                    header.name.toLowerCase()
                )
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
