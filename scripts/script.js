$("#scroll-button").click(function () {
    $('html,body').animate({
        scrollTop: $("#floor").offset().top
    },
        15000);
});

$(document).ready(function () {
    $('.wp-about').waypoint(function () {
        $('.wp-about').addClass('animate__animated animate__fadeInLeft');
    }, {
        offset: '25%'
    })
    $('#pig-pic').waypoint({
        handler: function (direction) {
            if (direction == "up") {
                $('.end-text').addClass('animate__animated animate__fadeInLeft')
                $('.waving').addClass('animate__animated animate__fadeInLeft')
            }
        }
    }, {
        offset: '25%'
    })
    $('.s1').waypoint({
        handler: function (direction) {
            if (direction == "up") {
                $('.s1').addClass('animate__animated animate__fadeInLeft')
            }
        }
    }, {
        offset: '25%'
    })
    $('.s2').waypoint({
        handler: function (direction) {
            if (direction == "up") {
                $('.s2').addClass('animate__animated animate__fadeInLeft')
            }
        }
    }, {
        offset: '25%'
    })
    $('.s3').waypoint({
        handler: function (direction) {
            if (direction == "up") {
                $('.s3').addClass('animate__animated animate__fadeInLeft')

            }
        }
    }, {
        offset: '75%'
    })

    $('.s3').waypoint({
        handler: function (direction) {
            if (direction == "up") {
                $('.ladder').addClass('animate__animated animate__fadeInLeft')
            }
        }
    }, {
        offset: '100%'
    })
    $('.s1').waypoint({
        handler: function (direction) {
            if (direction == "up") {
                $('.sky-area').addClass('animate__animated animate__fadeOut')
            }
        }
    }, {
        offset: '100%'
    })
})
