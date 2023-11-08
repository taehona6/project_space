$(function(){

    $('#fullpage').fullpage({
        autoScrolling:true,
        // scrollHorizontally:true,
        navigation:true,
        navigationPosition:'right',
        sectionsColor : ['#ccc','#bbb','#ddd','#eee'],
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