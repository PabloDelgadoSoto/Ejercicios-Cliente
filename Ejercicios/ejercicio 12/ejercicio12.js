let p;

window.onload=function(){
    p = document.getElementById('1');
    document.addEventListener('keydown', escribir);
}

const escribir = function(event){
    p.innerHTML = event.key;
};
