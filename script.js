function onYouTubeIframeAPIReady() {
    var player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'Owy4h9mYn44', // ID do vídeo do YouTube
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel': 0,
            'showinfo': 0
        }
    });
}
