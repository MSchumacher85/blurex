$(document).ready(function(){/*Увеличиваем размер первого слова в тексте*/
    $('.section-progress h3').each(function(){
        var title = $(this);
        title.html( title.text().replace(/(^\w+)/,'<span>$1</span>') );
    });
});


$(document).ready(function () {
    baguetteBox.run('.gallery');/*Вызываем для класса .gallery наш плагин галлереи*/
});
/**************************Стилизуем кнопку для ютуба ****************************************/
function onYouTubeIframeAPIReady() {
    var iStatus;

    oPlayer = new YT.Player('videoPlayer', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    var $playButton = $('#videoPlayBtn');
    $playButton.on("click", function() {
        if (iStatus == YT.PlayerState.PLAYING) {
            $playButton.show();
            oPlayer.pauseVideo();
            iStatus = YT.PlayerState.PAUSED;
        } else {
            oPlayer.playVideo();
            iStatus = YT.PlayerState.PLAYING;
            $playButton.hide();
        }
    });

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PAUSED) {
            $playButton.show();
            iStatus = YT.PlayerState.PAUSED;
        } else if (event.data == YT.PlayerState.PLAYING) {
            iStatus = YT.PlayerState.PLAYING;
            $playButton.hide();
        }
    }
}

var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
/**************************END Стилизуем кнопку для ютуба ****************************************/