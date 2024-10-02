const dt = 16;
var tf;
var contador = 0;
const lugar = 1800;

window.onload = function(){
    setInterval(hacer, 1000);
};

const hacer = function(){
    //let i = setInterval(()=>{$('#a'+(contador-1)).remove();clearInterval(i);},1000);
    funcionar();
    contador++;
}

const calcularRotacion = function (tiempo, lugarFinal, tf, rotacionFinal) {
    if (tiempo < tf) {
        let lugar = lugarFinal*(tiempo/tf);
        let rotacion = rotacionFinal*(tiempo/tf);
        return donde = [lugar, rotacion];
    }
    return false;
}

const establecer = function (elemento, sitios) {
    elemento.style.left = sitios[0] + 'px';
    elemento.style.rotate = sitios[1] + 'deg';
}

const funcionar = function () {
    let d = $('<div>',{'id':'a'+contador});
    $('body').append(d);
    $('#a'+contador).css({'height':Math.random()*200 + 'px','width':Math.random()*200 + 'px'});
    console.log(d)
    let elemento = $('div')[contador];
    let t = 0;
    let pH = setInterval(() => {
        let cuentas = hacerCuentas();
        t += dt;
        if (sitios = calcularRotacion(t, lugar, cuentas[1], cuentas[0])) {
            establecer(elemento, sitios);
            return;
        }
    }, dt);  
    let algo = setInterval(()=>{elemento.remove();clearInterval(ph);clearInterval(algo);},tiempo);
};

const hacerCuentas = function(){
    let vueltas = Math.random()*720;
    let tiempoTotal = 18000;
    return cuentas = [vueltas, tiempoTotal];
};