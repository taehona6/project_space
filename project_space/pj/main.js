$(function(){

    $('#fullpage').fullpage({
        autoScrolling:true,
        // scrollHorizontally:true,
        navigation:true,
        navigationPosition:'right',
        sectionsColor : ['#ccc','#bbb','#ddd','#eee'],
        

        afterLoad: function(anchorLink,index){
            
            let navs = document.querySelectorAll('.nav a');
            let navs2 = document.querySelector('.nav a:hover');
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
        }
    })
});