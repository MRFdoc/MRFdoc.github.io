$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.latar').css({
        'transform': 'translate(0px, -' + wScroll / 20 + '%)'
    });
    
    $('.latar h1').css({
        'transform': 'translate(0px, -' + wScroll / 20 + '%)'
    });
    
    $('.latar h2').css({
        'transform': 'translate(0px, -' + wScroll + '%)'
    });

    $('.back').css({
        'transform': 'translate(0px, -' + wScroll / 80 + '%)'
    });

});