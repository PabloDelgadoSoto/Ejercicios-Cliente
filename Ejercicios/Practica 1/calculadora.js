const calculadora = {
    '+': function (num1, num2) { return num1 + num2 },
    '-': function (num1, num2) { return num1 - num2 },
    '*': function (num1, num2) { return num1 * num2 },
    '/': function (num1, num2) { if (num2 == 0) return 'No se puede dividir entre 0'; return num1 / num2; },
};

var texto;
var ordenOperaciones = [];

const anadir = function (valor) {
    texto = document.getElementById('text');
    let añadir = texto.innerHTML + valor;
    texto.innerHTML = añadir;
};

const borrar = function () {
    texto.innerHTML = '';
};

const calcular = function () {
    if (texto.innerHTML.charAt(0) == '-' || texto.innerHTML.charAt(0) == '+') {
        texto.innerHTML = '0' + texto.innerHTML;
    }
    asignarOperaciones();
    //quita las operaciones de la string y lo pone en array
    let resultado = texto.innerHTML;
    let replaced = texto.innerHTML.replaceAll('+', ' ').replaceAll('-', ' ').replaceAll('*', ' ').replaceAll('/', ' ');
    let operaciones = replaced.split(' ');
    let operacionesNums = [operaciones.length];

    for (let i = 0; i < operaciones.length; i++) {
        operacionesNums[i] = parseInt(operaciones[i]);
    }
    while (ordenOperaciones.length > 0) {
        let operacion = orden();

        resultado = calculadora[ordenOperaciones[operacion]](operacionesNums[operacion], operacionesNums[operacion + 1]);
        operacionesNums[operacion] = resultado;
        operacionesNums.splice(operacion + 1, 1);
        ordenOperaciones.splice(operacion, 1);
    }
    texto.innerHTML = resultado;
};

const comprobar = function (valor) {
    for (let i = 0; i < ordenOperaciones.length; i++) {
        if (ordenOperaciones[i] == valor) {
            return i;
        }
    }
};

const orden = function () {
    let operacion = undefined;
    operacion = comprobar('*');
    if (operacion == undefined) {
        operacion = comprobar('/');
    }
    if (operacion == undefined) {
        operacion = comprobar('+');
    }
    if (operacion == undefined) {
        operacion = comprobar('-');
    }
    return operacion;
}

const asignarOperaciones = function () {
    for (let i = 0; i < texto.innerHTML.length; i++) {
        if (texto.innerHTML.charAt(i) == '+') {
            ordenOperaciones.push('+');
        } else if (texto.innerHTML.charAt(i) == '-') {
            ordenOperaciones.push('-');
        } else if (texto.innerHTML.charAt(i) == '*') {
            ordenOperaciones.push('*');
        } else if (texto.innerHTML.charAt(i) == '/') {
            ordenOperaciones.push('/');
        }
    }
};