
function fun() {
    var footer = document.getElementById('footer').getBoundingClientRect();
    var main = document.getElementById('main').getBoundingClientRect();

    if (main.bottom + 200 <= $(window).height()) {
        $("footer").addClass("fixed-bottom");
    }
    else if (main.bottom + 80 >= footer.top) {
        $("footer").removeClass("fixed-bottom");
    }
}

window.onresize = fun;
window.onload = fun;