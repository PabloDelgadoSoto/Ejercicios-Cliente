let table;
let user;
let idUser;

window.onload=function(){
    table = document.getElementById('table');
    hacerTabla();
    document.getElementById('5-5').setAttribute('class', 'usuario');
    user = document.getElementsByClassName('usuario');
    idUser = user[0].getAttribute('id');
    for(let i = 0 ; i < 11; i++){
        for (let j = 0; j < 11; j++){
            document.getElementById(i + '-' + j).addEventListener('mouseenter', cambiarCursor);
            document.getElementById(i + '-' + j).addEventListener('mouseleave', restablecer);
            document.getElementById(i + '-' + j).addEventListener('click', marcarXClic);
        }
    } 
    document.addEventListener('keydown', mover);
    document.addEventListener('keydown', marcarXG);
};

const hacerTabla = function(){
    for(let i = 0 ; i < 11; i++){
        let tr = document.createElement('tr');
        for (let j = 0; j < 11; j++){
            let td = document.createElement('td');
            td.setAttribute('id', i + '-' + j);
            td.setAttribute('class', 'section');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

const cambiarCursor = function(){
    user = document.getElementsByClassName('usuario');
    idUser = user[0].getAttribute('id');
    this.setAttribute('class', 'cursor');
}

const restablecer = function(){
    let res = document.getElementsByClassName('cursor');
    res[0].getAttribute('id');
    res[0].setAttribute('class', 'section');
    document.getElementById(idUser).setAttribute('class', 'usuario');
}

const cambiarUsuario = function(numI, numJ){
    let antiguo = document.getElementById(idUser);
    antiguo.setAttribute('class', 'section');
    let nuevo = document.getElementById(numI + '-' + numJ);
    nuevo.setAttribute('class', 'usuario');
}

const mover = function(event){
    let numeros = document.getElementById(idUser);
    let elId = numeros.getAttribute('id');
    let posicion = elId.split('-');
    let i = posicion[0];
    let j = posicion[1];
    if(event.key == 'ArrowDown'){
        i++;
    } else if (event.key == 'ArrowUp'){
        i--;
    } else if (event.key == 'ArrowLeft'){
        j--;
    } else if (event.key == 'ArrowRight'){
        j++;
    }
    i = desbordar(i);
    j = desbordar(j);
    cambiarUsuario(i, j);
    user = document.getElementsByClassName('usuario');
    idUser = user[0].getAttribute('id');
}

const desbordar = function(num){
    if(num < 0){
        return 0;
    } else if(num >= 11){
        return 10;
    }
    return num;
}

const marcarXClic = function(event){
    let marca = document.getElementsByClassName('cursor');
    marca[0].innerHTML = marca[0].innerHTML?'':'X'; 
}

const marcarXG = function(event){
    if(event.key == 'g'){
        let marca = document.getElementById(idUser);
        marca.innerHTML = marca.innerHTML?'':'X';
    }
}