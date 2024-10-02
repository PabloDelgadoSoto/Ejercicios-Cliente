window.onload = function(){
    $('#a').animate({
        'left':'+=40%'
    },0).animate({
        'top':'+=30%'
    },0);
    $('#d').animate({
        'left':'+=70%'
    },0).animate({
        'top':'+=60%'
        //30 para recto 60 para salto
    },0);
    $('#d').on('click', voltereta);
};

const mover = function(event){
    $('#d').animate({
        'left':'-=60%'
    },2000);
};

const saltar = function(event){
    $('#d').animate({
        'left':'-=60%'
    },{
        duration:2000,
        queue:false
    }).animate({
        'top':'-=30%'
    },1000).animate({
        'top':'+=30%'
    },1000);
}

const voltereta = function(event){
    $('#d').animate({
        'rotate':-360 + 'deg'
    },{
        duration:2000,
        queue:false
    });
    $('#d').animate({
        'left':'-=60%'
    },{
        duration:2000,
        queue:false
    }).animate({
        'top':'-=30%'
    },1000).animate({
        'top':'+=30%'
    },1000);
}