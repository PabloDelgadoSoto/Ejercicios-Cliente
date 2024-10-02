const dt = 16;
//sacar del css
var lugarInicial=-700;
var sitioInicial=0;

const tfCaida = 300;
const tfSubida = 150;
const tfRebote = 150;
const tf = [tfCaida, tfSubida, tfRebote];

const caida = 650;
const subida = -50;
const rebote = 50;
const lugares = [caida, subida, rebote];

const caidaL = 80;
const subidaL = 10;
const reboteL = 10;
const lugaresL = [caidaL, subidaL, reboteL];

window.onload = function () {
    funcionar(0);
}

const calcularLugar = function (tiempo, lugarFinal, tf, sitioFinal) {
    if (tiempo < tf) {
        let lugar = lugarFinal*(tiempo/tf)+lugarInicial;
        let sitio = sitioFinal*(tiempo/tf)+sitioInicial;
        return donde = [lugar, sitio];
    }
    return false;
}

const establecer = function (elemento, sitios) {
    elemento.style.top = sitios[0] + 'px';
    elemento.style.left = sitios[1] + 'px';
}

const funcionar = function (i) {
    if(i>=lugares.length){
        return;
    }
    let elemento = $('#t')[0];
    let t = 0;
    let pH = setInterval(() => {
        t += dt;
        if (sitios = calcularLugar(t, lugares[i], tf[i], lugaresL[i])) {
            establecer(elemento, sitios);
            return;
        }
        clearInterval(pH);
        lugarInicial+=lugares[i];
        sitioInicial+=lugaresL[i];
        funcionar(++i);
    }, dt);  
};