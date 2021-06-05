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
    $("#Experience").toggleClass("light1");
    $("#Education").toggleClass("light1");
    $("#Portfolio").toggleClass("light1");
    $("#Wall").toggleClass("light1");
    $("#Contact").toggleClass("light1");
    $("#Footer").toggleClass("light1");
    $(".custom-card").toggleClass("light2");
    $(".card").toggleClass("light2");
    $(".gallarycard").toggleClass("light2");
    $(".light-row").toggleClass("light3");
    $(".light-conatainer").toggleClass("light3");
    $(".dark-logo").toggleClass("d-none");
    $(".light-logo").toggleClass("d-block");
    $(this).toggleClass("active");
});















//copy-right

var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = " All rights reserved " + year + "&copy;";