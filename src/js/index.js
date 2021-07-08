import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all.min';

$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

//add active class
$(document).ready(function() {
    $(".first-list-element").addClass("active");
    $(".nav-item").click(function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
});

//navbar-animation
function test() {
    var tabsNewAnim = $('#nav-content');
    var selectorNewAnim = $('#nav-content').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".nav-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
    $("#nav-content").on("click", "li", function(e) {
        $('#nav-content ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".nav-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });
}
$(document).ready(function() {
    setTimeout(function() { test(); });
});
$(window).on('resize', function() {
    setTimeout(function() { test(); }, 500);
});
$(".navbar-toggler").click(function() {
    setTimeout(function() { test(); });
});
$('#copyright').text("Made with ❤ by Amer" + " " + new Date().getFullYear());

$("button").click(function() {

});

//mode toggler
$('.switch-mode').click(function() {
    $(".navbar-bg").toggleClass("light1");
    $("html").toggleClass("light1");
    $("body").toggleClass("light1");
    $("#Info").toggleClass("light1");
    $("#skile").toggleClass("light1");
    $("#Experience").toggleClass("light1");
    $("#Education").toggleClass("light1");
    $("#Portfolio").toggleClass("light1");
    $("#Achievements").toggleClass("light1");
    $("#Contact").toggleClass("light1");
    $("#Footer").toggleClass("light1");
    $(".custom-card").toggleClass("light2");
    $(".card").toggleClass("light2");
    $(".skile-row").toggleClass("light3");
    $(".gallarycard").toggleClass("light2");
    $(".light-row").toggleClass("light3");
    $(".light-conatainer").toggleClass("light3");
    $(".dark-logo").toggleClass("d-none");
    $(".light-logo").toggleClass("d-block");
    $(this).toggleClass("active");
});

// typewriter

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


