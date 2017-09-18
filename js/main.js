$(document).ready (function () {
    $(window).scroll (function () {
        var sT = $(this).scrollTop();
            if (sT >= 300) {
                $('.navbar-no-scroll').addClass('navbar-scroll');
            }else {
                $('.navbar-no-scroll').removeClass('navbar-scroll');
            }
    });
});