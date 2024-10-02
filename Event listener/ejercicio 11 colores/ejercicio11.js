let span;

const entrar = function(event){
    let porDonde = event.layerX;
    if(porDonde >= 50){
        span.setAttribute('class', 'azul');
    } else {
        span.setAttribute('class', 'red');
    }
};

const salir = function(event){
    let porDonde = event.layerY;
    if(porDonde >= 50){
        span.setAttribute('class', 'black');
    } else {
        span.setAttribute('class', 'green');
    }
};

window.onload=function(){
    span=document.getElementById('1');
    span.addEventListener('mouseenter', entrar);
    span.addEventListener('mouseleave', salir);
};
