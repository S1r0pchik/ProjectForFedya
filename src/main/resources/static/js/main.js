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

    if (main.bottom + 200 <= $(window).height()) {
        $("footer").addClass("fixed-bottom");
    }
    else if (main.bottom + 80 >= footer.top) {
        $("footer").removeClass("fixed-bottom");
    }
    if (window.innerWidth > 700) {
        $('.burger').removeClass('active');
        $('.headerList').removeClass('active');
        $('main').removeClass('active');
        $('footer').removeClass('active');
        $('.line').removeClass('active');
    }

    var p = document.getElementById('text').getBoundingClientRect();
    var len = p.left / 4.0;
    $('#toTop').css('width', 2 * len + 'px');
    $('#toTop').css('height', 2 * len + 'px');
    $('#toTop').css('left', len + 'px');
    $('#main').css('margin-bottom', -2 * len - 2 + 'px');
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
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 400);
    });
});

window.onresize = fun;
window.onload = fun;