let parar;

window.onload = function(){
    parar = false;
    $('#p').animate({
        'left':'+=100px'
    },0);
    para();
    setInterval(para, 10000);
    
}

const mover = function(event){
    $('#p').animate({
        'left':'-=800px'
    },10000).animate({
        'left':'+=800px'
    },0);
    $('#d').on('click', function(){parar = true;});
}

const para = function(){
    if(parar){
        $('#p').stop();
    } else {
        mover();
    }
}

/*
const t = 1000;

$('#p').width()/$(window).width();

animate
left: '-=' + ($('#p').width()+$(window).width()) + 'px'

*/

