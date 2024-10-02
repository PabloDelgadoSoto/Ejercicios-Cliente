let texto;

window.onload = function(){
    texto = $('#t');
    texto.on('click', caer);
}

const caer = function(event){
    texto.animate({
        'top' : '+=50%'
    },2000).animate({
        'top':'-=10%'
    },1000).animate({
        'top':'+=10%'
    },1000).animate({
        'top':'-=1%'
    },500).animate({
        'top':'+=1%'
    },500);
}



