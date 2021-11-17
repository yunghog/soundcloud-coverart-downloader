// function getImage(){
//     var res = document.querySelector("#content > div > div > div.l-hero-banner > div > div.fullHero__foreground.systemPlaylistHero__foreground > div.fullHero__artwork.systemPlaylistHero__artwork > div > div > span").style.backgroundImage.split('"')[1];
//     return res
// }
chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
  });
  
  chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
      var domInfo = {
        url: document.getElementsByClassName("sc-artwork g-opacity-transition")[1].style.backgroundImage.split('"')[1],
        song: document.getElementsByClassName('soundTitle__title')[0].innerText,
        artist: document.getElementsByClassName('soundTitle__username ')[0].innerText
      };
      response(domInfo);
    }
  });

  