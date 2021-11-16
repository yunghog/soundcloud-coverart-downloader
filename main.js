// document.getElementById('btn').addEventListener("click", downloadArtwork);
// function downloadArtwork() {
//     let url = localStorage.getItem('sc-artwork-url');
//     let dBtn = document.getElementById('dowdownload-url');
//     window.alert(url);
// }
const setDOMInfo = info => {
    document.getElementById('url').innerHTML = info.url;
  };
window.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      chrome.tabs.sendMessage(
          tabs[0].id,
          {from: 'popup', subject: 'DOMInfo'},
          setDOMInfo);
    });
  });
