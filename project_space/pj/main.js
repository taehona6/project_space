$(function(){

    $('#fullpage').fullpage({
        autoScrolling:true,
        // scrollHorizontally:true,
        navigation:true,
        navigationPosition:'right',
        sectionsColor : ['#ccc','#bbb','#ddd','#eee'],
        controlArrows:false,

        afterLoad: function(anchorLink,index){
            let header = document.querySelector('.header');
            let navs = document.querySelectorAll('.header a');
            let logo = document.getElementById('logo-img') ;
            if(index!=1){
                for(i =0; i<navs.length; i++){
                    navs[i].style.color='black';
                }
                header.style.backgroundColor='rgb(255, 255, 255)'
                logo.src='image/logo-black.png'
            }if(index==1){
                header.style.backgroundColor='rgba(255, 255, 255, 0)';
                logo.src='image/logo-white.png'
                for(i =0; i<navs.length; i++){
                    navs[i].style.color='white';
                }
                
            }
        },

        afterRender: function () {
            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 2000);
        }


    })
});