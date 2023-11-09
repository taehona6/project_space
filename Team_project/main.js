$(function(){

    $('#fullpage').fullpage({
        autoScrolling:false,
        slidesNavigation:true,
        slidesNavPosition:'bottom',
        fitToSection: false,
        afterRender: function () {
            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 2000);
        }


    })
});