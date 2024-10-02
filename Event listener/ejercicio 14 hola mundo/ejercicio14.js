let p;
let t;

window.onload=function(){
    p = document.getElementById('p');
    t = document.getElementById('t');
    t.addEventListener('keydown', deoccult);
};

const deoccult = function(event){
    if(t.value == 'hola'){
        p.hidden = false;
    } else {
        p.hidden = true;
    }
    console.log(t.value);
};