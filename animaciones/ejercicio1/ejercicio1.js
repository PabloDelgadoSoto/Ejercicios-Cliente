let oculto;

window.onload = function(){
    oculto = true;
    $('#1').on('click', mover);
    $('#asd').animate({'opacity' : 'toggle'}, 0);
    $('#asd').on('click', contraer);
}

const mover = function(event){
    $('div').animate({
        'width' : '+=10%'
    }, 2000);
    if(oculto){
        $('#asd').animate({
            'display' : 'none'
        }, 2000);
        $('#asd').animate({
           'opacity' : 'toggle' 
        }, 2000);
        oculto = false;
    }
};

const contraer = function(event){
    $('div').animate({
        'width' : '-=10%'
    }, 2000);
    if(!oculto){
        $('#asd').animate({
            'display' : 'none'
        }, 2000);
        $('#asd').animate({
            'opacity' : 'toggle'
        }, 2000);
        oculto = true;
    }
};