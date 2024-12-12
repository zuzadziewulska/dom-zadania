
const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');

    p1.classList.add('bg-red');
    p2.classList.add('bg-yellow');
    console.log(p1);
}

let buttonColor = document.querySelector('button');
buttonColor.addEventListener('click', setBackground);