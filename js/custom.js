$(function () {
    $('.banner_slider').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        autoplayTimeout:3000,
        smartSpeed:500,
        dots:true,
        nav:true,
        navText:['<i class="fa-solid fa-long-arrow-left arrow_lt"></i>','<i class="fa-solid fa-long-arrow-right arrow_rt"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,

            },
            600:{
                items:3,
            },
            1000:{
                items:1,
            }
        }
    })


});
