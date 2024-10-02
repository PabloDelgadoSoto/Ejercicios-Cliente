let t;
let l;

window.onload=function(){
    t = document.getElementById('t');
    l = document.getElementById('l');
    document.addEventListener('keydown', function(event){
        console.log(event.key);
        if(event.key == 'Enter'){
            let li = document.createElement('li');
            li.innerHTML = t.value;
            li.addEventListener('mouseover', function(event){
                this.setAttribute('class', 'gris');
            })
            li.addEventListener('mouseleave', function(event){
                this.setAttribute('class', '');
            })
            l.appendChild(li);
        }
    })
};