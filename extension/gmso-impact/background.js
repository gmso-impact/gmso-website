console.log("GMSO Impact Extension started");


chrome.tabs.onCreated.addListener((tab) => {
    console.log('tab onCreated')
    console.log({ 'tab': tab })
    if (
        tab.url === '' ||
        tab.url.indexOf("chrome://") === 0 ||
        tab.url.indexOf("edge://extensions") === 0 ||
        tab.url.indexOf("https://impact.csusystem.edu/#/kiosk") === 0 ||
        tab.pendingUrl.indexOf("https://impact.csusystem.edu/#/kiosk")
    ) {
        return;
    } else {
        console.log(`tab removed:${tab.url}`)
        chrome.tabs.remove(tab.id)
    }


});
chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
    console.log('tab onUpdated')

    if (
        tab.url === '' ||
        tab.url.indexOf("chrome://") === 0 ||
        tab.url.indexOf("edge://extensions") === 0 ||
        tab.url.indexOf("https://impact.csusystem.edu/#/kiosk") === 0 ||
        tab.pendingUrl.indexOf("https://impact.csusystem.edu/#/kiosk")
    ) {
        return;
    } else {
        console.log(`tab removed:${tab.url}`)
        chrome.tabs.remove(tab.id)
    }


});


chrome.windows.onCreated.addListener((windows) => {
    console.log('window onCreated')

});