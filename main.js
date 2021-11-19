const setDOMInfo = info => {
    document.getElementById('artist').innerHTML = info.artist;
    document.getElementById('song').innerHTML = info.song;
    document.getElementById('download-url').href = info.url;
    document.getElementById('cover-art').src = info.url;
    if(info.artist == '' || info.song == '' || info.url == ''){
      // showMsg('Please load a song to get the artwork.');
      document.getElementById('info-content').style.display='none';
    document.getElementById('msg-content').style.display='block';
    document.getElementById('msg').innerHTML='Please load a song from SoundCloud to get the artwork.';
    }
  };
  const showMsg = msg =>{
    document.getElementById('info-content').style.display='none';
    document.getElementById('msg-content').style.display='block';
    document.getElementById('msg').innerHTML=msg;
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
