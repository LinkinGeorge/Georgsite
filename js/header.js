$(document).ready(function () {

    if (window.matchMedia('(max-width: 767px)').matches) {
        $('.navbar').addClass('navbar-fixed-top');
        $('#content').addClass('fix-top-margin');
    } else {
        $('.navbar').removeClass('navbar-fixed-top');
        $('#content').removeClass('fix-top-margin');
    }
    $(window).on('resize',function(){
        if (window.matchMedia('(max-width: 767px)').matches) {
            $('.navbar').addClass('navbar-fixed-top');
            $('#content').addClass('fix-top-margin');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            $('#content').removeClass('fix-top-margin');
        }
    });
})