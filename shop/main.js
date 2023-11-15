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
        },

        controlArrowsHTML: [
            '<div class="fp-arrow"></div>', 
            '<div class="fp-arrow"></div>'
        ],
    })

});

function unimple()
{
    alert('미구현 기능입니다.');
}