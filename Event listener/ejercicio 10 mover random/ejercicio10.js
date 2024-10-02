let section;
let p;

window.onload=function(){
    section = document.getElementById('1');
    section.addEventListener('mouseenter', mover);
};

const mover = function(event){
    section.style.position = "absolute";
    section.style.left = Math.floor(Math.random() * 1000) + 'px';
    section.style.top = Math.floor(Math.random() * 700) + 'px';
};