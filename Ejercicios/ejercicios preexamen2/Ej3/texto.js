let p;
const colores = ['azul', 'rojo', 'amarillo', 'verde'];
let color;

window.onload = function(){
    p = document.getElementById('p');
    color = 0;
    document.addEventListener('keydown', function(event){
        if(event.altKey){
            if(flechas[event.key]){
                flechas[event.key]();
            }
            if(colorear[event.key]){
                colorear[event.key]();
            }
        }        
    })
    document.addEventListener('click', function(event){
        p.setAttribute('class', 'nm ' + 'negro');
    })
};

const recogerAntiguo = function(num){
    let antiguo = p.getAttribute('class').split(' ');
    return antiguo[num];
}

const cambiarTamaño = function(clase){
    let antiguo = recogerAntiguo(1);
    p.setAttribute('class', clase + ' ' + antiguo);
};

const cambiarColor = function(num){
    let clase = colores[parseInt(num)];
    color = num;
    let antiguo = recogerAntiguo(0);
    p.setAttribute('class', antiguo + ' ' + clase);
}

const flechas={
    'ArrowUp': function(){cambiarTamaño('grande')},
    'ArrowDown': function(){cambiarTamaño('pequeño')}
};

const colorear={
    'ArrowLeft': function(){cambiarColor((color+3)%colores.length)},
    'ArrowRight': function(){cambiarColor((color+1)%colores.length)}
};