// adblock-youtube-advanced.js
(function() {
    const adSelectors = [
        '.ad-banner',
        '#ad-container',
        '.video-ad',
        '[id^="ad-"]',
        '[class*="ad-"]',
        'ytd-display-ad-renderer', // Block display ads
        'ytd-promoted-video-renderer', // Block promoted videos
        'ytd-companion-slot-renderer', // Block sidebar ads
        'ytd-mealbar-promo-renderer' // Block promo banners
    ];

    const blockAds = () => {
        adSelectors.forEach(selector => {
            const ads = document.querySelectorAll(selector);
            ads.forEach(ad => ad.remove());
        });

        // Remove ads in video player
        const videoAds = document.querySelectorAll('video, .ytp-ad-player-overlay');
        videoAds.forEach(ad => ad.remove());

        // Bypass ad requests
        let player = document.getElementById('movie_player');
        if (player && player.getAdState) {
            player.getAdState = () => null;
            player.removeEventListener('onAdStart', player.adShowing_);
        }
    };

    // Run the function when the page loads
    window.addEventListener('load', blockAds);

    // Optionally run the function periodically if ads load dynamically
    setInterval(blockAds, 1000); // Run every second
})();
