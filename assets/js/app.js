// slick slider intialization

$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
    });

    $('.hot-deal-slider').slick({
        arrows: false,
        slidesToShow: 4,
        dots: true,
        autoplay: true,
    });
});