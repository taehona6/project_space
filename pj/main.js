$(function(){
    $('#fullpage').fullpage({
        autoScrolling:true,
        navigation:true,
        navigationPosition:'right',
        controlArrows:false,

        afterLoad: function(anchorLink,index){
            
            let navs = document.querySelectorAll('.nav a');
            if(index!=1){
                for(i =0; i<5; i++){
                    navs[i].style.color='black';
                }
            }if(index==1){
                for(i =0; i<5; i++){
                    navs[i].style.color='white';
                }
                console.log('현재'+index);
            }
        },

        afterRender: function () {
            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 2000);
        }


    })
});

(function(){
	$('.flex-container').waitForImages(function() {
		$('.spinner').fadeOut();
	}, $.noop, true);
	
	$(".flex-slide").each(function(){
		$(this).hover(function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-about').css({
				opacity: '1'
			});
		}, function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(90deg)',
				top: '15%'
			});
			$(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});
})();



