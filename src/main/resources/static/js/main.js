
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

$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger').toggleClass('active');
        $('.headerList').toggleClass('active');
        $('main').toggleClass('active');
        $('footer').toggleClass('active');
        $('.line').toggleClass('active');
    });

    var footer = document.getElementById('footer').getBoundingClientRect();
    var main = document.getElementById('main').getBoundingClientRect();
    if (main.bottom + 200 <= $(window).height()) {
        $("footer").addClass("fixed-bottom");
    }
    else if (main.bottom + 80 >= footer.top) {
        $("footer").removeClass("fixed-bottom");
    }
});

window.onresize = fun;
window.onload = fun;