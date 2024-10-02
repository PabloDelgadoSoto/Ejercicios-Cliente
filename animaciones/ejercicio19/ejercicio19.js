let signos = ['+', '-'];
var contador = 0;
var signo = 1;

window.onload = function(){
    setInterval(hacer, 1000);
};

const hacer = function(){
    //let i = setInterval(()=>{$('#a'+contador-1).remove();clearInterval(i);},1000);
    crear();
    mover();
}

const mover = function(){
    signo = (signo+1)%2;
    $('div').animate({
        'rotate': signos[signo] + Math.random()*720 + 'deg',
        'left': '1800px'
    },Math.random()*10000);
};

const crear = function(){
    //$('<div>),{'id':'#a'+contador});
    let d = document.createElement('div');
    d.setAttribute('id', 'a'+contador);
    $('body').append(d);
    $('#a'+contador).css({'height':Math.random()*200 + 'px','width':Math.random()*200 + 'px'});
    contador++;
};