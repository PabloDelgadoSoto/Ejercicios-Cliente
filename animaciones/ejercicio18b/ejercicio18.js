const dt = 16;
const tf = 10000;
const lugarFinal = -800;
const lugarInicial = 110;

window.onload = function(){
    funcionar();
    setInterval(funcionar, tf);
}

const calcularLugar = function(tiempo){
    if(tiempo<tf){
        let lugar = lugarFinal*(tiempo/tf)+lugarInicial;
        return lugar;
    }
    return false;
}

const establecer = function(elemento, lugar){
    elemento.style.left=lugar+'px';
}

const funcionar = function(){
    let elemento = $('#p')[0];
    let t=0;
    let pH = setInterval(()=>{
        t+=dt;
        if(lugar = calcularLugar(t)){
            establecer(elemento, lugar);
            return;
        }
        clearInterval(pH);
        elemento.style.left=110+'px';
    },dt);
}