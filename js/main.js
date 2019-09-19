$(document).ready(function () {/*Прелоадер*/
    $(window).on('load',function () {/*Когда наш сайт загружен*/
        $('.preloader').delay(500).fadeOut('slow',function () {/*Скрываем наш блок с задержкой в 500 миллисекунд*/
            $(this).attr('style','display: none !important');/*Повторно обращаемся к нашему элементу и добавляем 'display: none !important'*/
        });
    });
});

$(document).ready(function(){/*Увеличиваем размер первого слова в тексте*/
    $('.section-progress h3').each(function(){
        var title = $(this);
        title.html( title.text().replace(/(^\w+)/,'<span>$1</span>') );
    });
});


$(document).ready(function () {
    baguetteBox.run('.gallery');/*Вызываем для класса .gallery наш плагин галлереи*/
});

$(document).ready(function () {
    baguetteBox1.run('.footer_gallery');/*Вызываем для класса .footer_gallery наш плагин галлереи*/
});

$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {/*Если высота скрола больше 300px то отображаем кнопку иначе снова скрываем ее*/
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
            return false;
        }
    });

    $('.scroll-to-top').click(function () {
        $('html,body').animate({scrollTop:0},800);/*Поднимаем нашу страницу в верх до нулевой отметки за 800 миллисекунд*/
    });
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