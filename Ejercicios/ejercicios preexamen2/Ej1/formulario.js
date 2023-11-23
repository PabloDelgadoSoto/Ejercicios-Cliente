let inp;

window.onload=function(){
    inp = document.getElementsByTagName('input');
    for(let i = 0; i < inp.length; i++){
        inp[i].addEventListener('focus', function(event){
            this.setAttribute('class', 'grande');
        })
        inp[i].addEventListener('blur', function(event){
            this.setAttribute('class', 'pequeño');
            if(this.value.length > 5 && this.value.length < 10){
                this.parentElement.setAttribute('class', 'verde');
            } else {
                this.parentElement.setAttribute('class', 'rojo');
            }
        })
    }
};