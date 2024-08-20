// youtube-background.js
(function() {
    const enableBackgroundPlay = () => {
        let player = document.getElementById('movie_player');
        
        if (player) {
            // Thử xóa các thuộc tính gây cản trở phát nền
            player.removeAttribute('style');
            
            // Bắt sự kiện để ngăn chặn quảng cáo khi phát lại video
            player.addEventListener('onStateChange', (state) => {
                if (state === 1) { // 1 là trạng thái video đang phát (playing)
                    player.unloadModule('ad'); // Gỡ bỏ module quảng cáo nếu có
                }
            });
            
            // Thử kích hoạt phát nền bằng cách gọi toggleMiniPlayer
            if (player.toggleMiniPlayer) {
                player.toggleMiniPlayer();
                player.toggleMiniPlayer(); // Gọi lại để trở lại trạng thái bình thường sau khi phát nền
            }
        }
    };

    // Thực thi khi trang tải xong
    window.addEventListener('load', enableBackgroundPlay);

    // Thực thi định kỳ để đảm bảo phát nền được bật
    setInterval(enableBackgroundPlay, 5000); // Cứ mỗi 5 giây lại kiểm tra và kích hoạt
})();
