// youtube-adblock.js
(function() {
    const adSelectors = [
        '.ad-banner', 
        '#ad-container', 
        '.video-ad',
        '[id^="ad-"]',
        '[class*="ad-"]'
    ];

    function removeAds() {
        adSelectors.forEach(selector => {
            const ads = document.querySelectorAll(selector);
            ads.forEach(ad => ad.remove());
        });
    }

    window.addEventListener('load', removeAds);
    setInterval(removeAds, 3000);
})();
