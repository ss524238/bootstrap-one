$(document).ready(function(){
    $("#multiSlide").owlCarousel({
        loop:true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 3000,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop:true
            },
            400:{
                items:2,
                loop:true
            },
           768:{
                items:3,
                loop:true
            },
            992:{
                items:4,
                loop:true
            }
        }
    });

    /*------------------*/
    $("#moduleSlide").owlCarousel({
        loop:true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop:true
            },
            400:{
                items:2,
                loop:true
            },
           768:{
                items:3,
                loop:true
            }
        }
    });
});