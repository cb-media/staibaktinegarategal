/**
 * Silahkan di ubah untuk configurasi javascript
 * sesuai dengan keinginan anda.
 */

$(document).ready (function () {
	/**
	 * Navigation Overlay on Scroll
	 */
	$(window).scroll (function () {
        var sT = $(this).scrollTop();
            if (sT >= 300) {
                $('.navbar-no-scroll').addClass('navbar-scroll');
            }else {
                $('.navbar-no-scroll').removeClass('navbar-scroll');
            }
    });
});