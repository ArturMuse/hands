'use strict';

$('.preview').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    arrows: false
});
$('.about__slider').slick({
    infinite: true,
    speed: 500,
    asNavFor: ".popup-news__slider"
});
$('.projects__slider').slick({
    infinite: true,
    speed: 500,
    asNavFor: ".popup-projects__slider"
});
$('.popup-news__slider').slick({
    infinite: true,
    speed: 500,
    responsive: [{
        breakpoint: 985,
        settings: {
            arrows: false
        }
    }]
});
$('.popup-projects__slider').slick({
    infinite: true,
    speed: 500,
    responsive: [{
        breakpoint: 985,
        settings: {
            arrows: false
        }
    }]
});

$('#help-tel').mask("+7 (999) 999-99-99");
$('#call-tel').mask("+7 (999) 999-99-99");

var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 400);
    return false;
});