console.log("haha");

$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

function fun() {
    var footer = document.getElementById('footer').getBoundingClientRect();
    var main = document.getElementById('main').getBoundingClientRect();

    if (main.bottom + 180 <= $(window).height()) {
        $("footer").addClass("fixed-bottom");
    }
    else if (main.bottom + 60 >= footer.top) {
        $("footer").removeClass("fixed-bottom");
    }
    if (window.innerWidth > 700) {
        $('.burger').removeClass('active');
        $('.headerList').removeClass('active');
        $('main').removeClass('active');
        $('footer').removeClass('active');
        $('.line').removeClass('active');
    }

    try {
        var p = document.getElementById('text').getBoundingClientRect();
        var len = p.left / 4.0;
        $('#toTop').css('width', 2 * len + 'px');
        $('#toTop').css('height', 2 * len + 'px');
        $('#toTop').css('left', len + 'px');
    } catch {

    }
}

px_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;

$(window).resize(function(){isZooming();});

function isZooming(){
    var newPx_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
    if (newPx_ratio != px_ratio) {
        px_ratio = newPx_ratio;
        fun();
    } else {
        fun();
    }
}

$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger').toggleClass('active');
        $('.headerList').toggleClass('active');
        $('main').toggleClass('active');
        $('footer').toggleClass('active');
        $('.line').toggleClass('active');
        $('#toTop').toggleClass('active');
    });
    fun();
});

$(function() {
    $('#toTop').click(
        function (e) {
            $('html, body').animate({scrollTop: '0px'}, 500);
        }
    );
});

window.onresize = fun;
window.onload = fun;