let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let listaMiast = document.createElement('ol');


for (city in cities){
    let elementListy = document.createElement('li');
    let nazwaMiasta = document.createTextNode(cities[city]);
    elementListy.appendChild(nazwaMiasta);
    elementListy.className = "city";
    listaMiast.appendChild(elementListy);

}

document.body.appendChild(listaMiast);
