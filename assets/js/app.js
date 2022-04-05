// slick slider intialization

$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
    });

    $('.hot-deal-slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
    });
});