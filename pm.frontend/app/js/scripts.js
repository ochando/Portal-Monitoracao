// Hack browser
function css_browser_selector(u) { var ua = u.toLowerCase(), is = function (t) { return ua.indexOf(t) > -1 }, g = 'gecko', w = 'webkit', s = 'safari', o = 'opera', m = 'mobile', h = document.documentElement, b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + RegExp.$1) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3.6') ? g + ' ff3 ff3_6' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.$1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.$2 : '')) : is('konqueror') ? 'konqueror' : is('blackberry') ? m + ' blackberry' : is('android') ? m + ' android' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '') : is('mozilla/') ? g : '', is('j2me') ? m + ' j2me' : is('iphone') ? m + ' iphone' : is('ipod') ? m + ' ipod' : is('ipad') ? m + ' ipad' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' + (is('windows nt 6.0') ? ' vista' : '') : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js']; c = b.join(' '); h.className += ' ' + c; return c; }; css_browser_selector(navigator.userAgent);

// Show Menu
function showmenu(elmnt) {
    document.getElementById(elmnt).style.display = "block";
}
// Hide Menu
function hidemenu(elmnt) {
    document.getElementById(elmnt).style.display = "none";
}

// Menu Principal
$("#BtnMostrarMenu").click(function () {
    if ($("#bgMenu").is(":hidden")) {
            $("#bgMenu").fadeIn(300);
            $("#MenuTopo").animate({ "left": "0" }, 100)
    } else {
       $("#bgMenu").click();
    }
});

$("#bgMenu").click(function () {
    $("#MenuTopo").animate({ "left": "-100%" }, 300)
    $(this).fadeOut(300);
});

// Modo Fullscreen
$(function () {
    $(".fullscreen-supported").toggle($(document).fullScreen() != null);
    $(".fullscreen-not-supported").toggle($(document).fullScreen() == null);

    $(document).bind("fullscreenchange", function (e) {
        console.log("Full screen changed.");
        $("#status").text($(document).fullScreen() ?
           "Full screen enabled" : "Full screen disabled");
    });

    $(document).bind("fullscreenerror", function (e) {
        console.log("Full screen error.");
        $("#status").text("Browser won't enter full screen mode for some reason.");
    });
});

// Submenu Breadcrumb
$('ol.breadcrumb li').hover(function () {
    $(this).children('ul').fadeToggle(100);
});

// Tooltip e Popover
$(document).ready(function () {
    $("[rel=tooltip]").tooltip({
        "placement": 'bottom'
    });
    $("[rel=popover]").popover({
        "html": true
    });
});


// Info do usuário
$("#btnInfoUsuario").click(function () {
    if ($("#info-user").is(":hidden")) {
            $("#info-user").show();
            $(this).css(
            {
                "background-color": "#449d44",
                "border-color": "#398439"
            });
    } else {
        $("#info-user").hide();
        $(this).css(
        {
            "background-color": "#5cb85c",
            "border-color": "#4cae4c"
        });
    }
});

//Masks
$(document).ready(function () {
    $(".maskcalendario").mask("99/99/9999");
    $(".maskhora").mask("99:99");
    $(".maskDataHora").mask("99/99/9999 99");
    $(".maskDataHoraMinuto").mask("99/99/9999 99:99");
    $(".maskDataHoraSegundo").mask("99/99/9999 99:99:99");
    $(".maskrg").mask("99.999.999-9");
    $(".maskcpf").mask("999.999.999-99");
});


// Sub Submenu Menu Principal
$(".list-group-item").click(function () {

    $(this).toggleClass('ativo');

});