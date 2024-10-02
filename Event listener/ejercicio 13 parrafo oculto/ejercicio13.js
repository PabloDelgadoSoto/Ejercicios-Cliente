let ps;

window.onload=function(){
    ps = document.getElementsByTagName('p');
    document.addEventListener('keydown', deoccult);
};

const deoccult = function(event){
    let key = event.key;
    let buscado = document.getElementById(key);
    for(let i = 0; i < ps.length; i++){
        if (key == ps[i].getAttribute('value')){
            if(buscado.hidden == true){
                buscado.hidden = false;
            } else if (buscado.hidden == false){
                buscado.hidden = true;
            }
        }
    }
};
