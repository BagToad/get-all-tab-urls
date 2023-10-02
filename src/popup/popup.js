function writeClipboard(tabs) {
    let clip = "";
    console.log(tabs)
    for (let tab of tabs) {
        clip += tab.title + "\n" + tab.url + "\n\n";
    }
    if (clip != "") {
      navigator.clipboard.writeText(clip);
    }
}

function getAllTabs() {
    return chrome.tabs.query({currentWindow: true});
}

document.addEventListener('DOMContentLoaded', function() {
    let copyRaw = document.getElementById('copy');
    copyRaw.addEventListener('click', function() {
        getAllTabs().then(writeClipboard);
    });
});