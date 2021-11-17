const setDOMInfo = info => {
    document.getElementById('artist').innerHTML = info.artist;
    document.getElementById('song').innerHTML = info.song;
    document.getElementById('download-url').href = info.url;
    document.getElementById('cover-art').src = info.url;
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
