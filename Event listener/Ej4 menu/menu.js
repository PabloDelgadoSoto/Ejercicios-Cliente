let l;
let s;

window.onload = function () {
    l = document.getElementsByTagName('ul');
    s = document.getElementsByTagName('section');
    for (let i = 1; i < l.length; i++) {
        l[i].parentElement.childNodes[0].addEventListener('mouseover', function (event) { l[i].hidden = false });
        for (let j = 0; j < l[i].children.length; j++) {
            s[0].addEventListener('mouseleave', function () {
                this.children[0].children[j].children[1].hidden = true;
            })
            l[i].children[j].addEventListener('click', function (event) {
                for (let x = 0; x < 3; x++) {
                    if(l[i].children[x].getAttribute('class') == 'verde'){
                        l[i].children[x].setAttribute('class', '');
                    }
                    this.setAttribute('class', 'verde');
                }
            })
        }
    }
};