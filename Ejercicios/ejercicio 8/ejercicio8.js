let section;

window.onload=function(){
    section = document.getElementById('sec');
    section.addEventListener('mouseenter', cambiarVerde);
    section.addEventListener('click', cambiarNegro);
    section.addEventListener('mouseleave', cambiarAzul);
};

const cambiarVerde = function(event){
    section.setAttribute('class', 'green');
};

const cambiarAzul = function(event){
    section.setAttribute('class', 'azul');
};

const cambiarNegro = function(event){
    section.setAttribute('class', 'black');
}