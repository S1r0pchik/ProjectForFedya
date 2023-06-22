console.log("haha");

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
    });
    fun();
});

window.onresize = fun;
window.onload = fun;