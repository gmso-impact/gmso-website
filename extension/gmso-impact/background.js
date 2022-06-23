console.log("GMSO Impact Extension started");

chrome.tabs.onCreated.addListener((tab) => {
    console.log({ newTab: tab })

    // check if this tab will be a url
    if (isAcceptableTab(tab)){
        // leave tab alone
    } else {
       console.log(`tab removing:${tab.url}`)
        chrome.tabs.remove(tab.id)
    }
});

chrome.tabs.onUpdated.addListener((tabId, other, updatedTab) => {
    console.log({ updatedTab: updatedTab })
    if (isAcceptableTab(updatedTab)){
        // leave tab alone
    } else {
       console.log(`tab removing:${updatedTab.url}`)
       const numerTabs = chrome.tabs.query({},(tabs)=>{
        if(tabs.length === 1){
            // change this tab url
            chrome.tabs.update(updatedTab.id, {url: url.impact})
        } else {
            // close this tab
            chrome.tabs.remove(updatedTab.id)
        }
       })
    }
});




const url = {
    impact: 'https://impact.csusystem.edu/#/kiosk',
    extension: 'edge://extensions',
}

function isAcceptableTab(tab) {
    if (
        isAcceptableUrl(tab, url.impact) ||
        isAcceptableUrl(tab, url.extension)
    ) {
        return true
    } 
    return false
}
function isAcceptableUrl(tab , urlToTest){
    return (
        tab.url.indexOf(urlToTest) === 0 ||
        (tab.pendingUrl && tab.pendingUrl.indexOf(urlToTest) === 0)
    )
}
