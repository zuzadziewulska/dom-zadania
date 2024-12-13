console.log("Warsztat")

let newsletterForm = document.getElementById("newsletter-form");
let allAgreeCheckbox = document.getElementById("agree-all")


const validate = (event) => {

    let userName = document.getElementById('name');
    let userEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree1');
    let errorsList = document.getElementById('errors');

    errorsList.innerHTML = '';

    if (userName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko';
        console.log(liError);
        errorsList.appendChild(liError);
    }
    if (userEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres email';
        console.log(liError);
        errorsList.appendChild(liError);
    }
    if (!userEmail.value.includes('@') && userEmail.value.trim() !== '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz prawidłowy adres email';
        console.log(liError);
        errorsList.appendChild(liError);
    }
    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Wyraź zgodę nr 1';
        console.log(liError);
        errorsList.appendChild(liError);
    }

    if (errorsList.children.length > 0){
        event.preventDefault();
    }
}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree1');
    let agree2 = document.getElementById('agree2')
    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}

newsletterForm.addEventListener('submit', validate)

allAgreeCheckbox.addEventListener('change', allAgree)