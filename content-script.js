chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
  });
  
  chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
     try {
      var domInfo = {
        url: document.getElementsByClassName("sc-artwork sc-artwork-4x image__full g-opacity-transition")[0].style.backgroundImage.split('"')[1].replace('50x50','500x500'),
        song: document.getElementsByClassName('playbackSoundBadge__title')[0].innerText.split("\n")[1],
        artist: document.getElementsByClassName('playbackSoundBadge__lightLink')[0].innerText
      };
      response(domInfo);
     } catch (error) {
      var domInfo = {
        url: '',
        song: '',
        artist: ''
      };
      response(domInfo);
     }
    }
  });

  