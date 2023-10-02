function writeClipboard(tabs) {
    let clip = "";
    console.log(tabs)
    for (let tab of tabs) {
        clip += tab.url + "\n";
    }
    if (clip != "") {
      navigator.clipboard.writeText(clip);
    }
}

function getAllTabs() {
    return chrome.tabs.query({});
}

document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('copy');
    button.addEventListener('click', function() {
        getAllTabs().then(writeClipboard);
    });
});