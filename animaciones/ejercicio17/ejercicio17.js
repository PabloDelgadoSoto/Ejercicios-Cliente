window.onload = function(){
    $('#d').on('click', girar);
}

const girar = function(event){
    $('#d').animate({
        'rotate':-561685168 + 'deg',
        'border-radius':'+=100%'
    },1000);
}