chrome.storage.local.get(["blockStore"]).then((result) => {
    ;
    const blockList = [...result.blockStore, ...result.blockStore.map(domain => "www." + domain)];

    const currentUrl = window.location.hostname;

    let isBlocked = (blockList.map(url => url.includes(currentUrl)))
                              .reduce((acc, cur) => {return acc || cur;}, false);

    if(isBlocked) {
        window.location.href = "https://media.tenor.com/EIOYrYnPOq8AAAAd/seal-spin.gif";
    }
});