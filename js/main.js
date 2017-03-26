$(document).ready(function(){

    $(window).on('scroll', function () { 
        var stopped = Math.round($(window).scrollTop());
        if(stopped > 0){
            $('#georg,#donner').addClass('fadeOut')
                $('#georg,#donner').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () { 
                    if(stopped > 10){
                        $('#georg,#donner').addClass('hidden')
                    } else {
                        $('#georg,#donner').removeClass('hidden')
                    }
                })
        } else {
            setTimeout(function() {
                $('#georg,#donner').removeClass('hidden')
            }, 300);
            $('#georg,#donner').removeClass('fadeOut')
            $('#georg,#donner').addClass('fadeIn')
        }
    })

});