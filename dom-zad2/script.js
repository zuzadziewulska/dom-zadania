
function add(){
    let lista = document.querySelector('ul');
    let dlugoscListy = lista.childElementCount;
    let nowyElement = document.createElement('li');
    let tekstElementu = document.createTextNode(`Item ${dlugoscListy+1}`);
    nowyElement.appendChild(tekstElementu);
    nowyElement.className = 'item';
    lista.appendChild(nowyElement);
}

let buttonAdd = document.querySelector("button");
buttonAdd.addEventListener('click',add);