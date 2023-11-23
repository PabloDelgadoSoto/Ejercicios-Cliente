let sections;
let p;

window.onload=function(){
    sections = document.getElementsByTagName('section');
    p = document.getElementById('p');
    for(let i = 0; i < sections.length; i++){
        sections[i].addEventListener('mouseover', donde);
    }
    
};

const donde = function(event){
    p.innerHTML = 'estoy en ' + this.getAttribute('value');
};