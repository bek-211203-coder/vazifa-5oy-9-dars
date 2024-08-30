const form = document.querySelector('#form');
const send = document.querySelector('#send');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const nationality = document.querySelector('#nationality');
const desc = document.querySelector('#desc');

const myData = [];

function validate(username, password, nationality, desc){
    if(username.value.length < 3){
        alert('Username is not valid');
        username.focus();
        username.style.outlineColor = 'red';
        return false;
    };

    if(password.value.length < 3){
        alert('Password is not valid');
        password.focus();
        password.style.outlineColor = 'red';
        return false;
    }

    if(desc.value.length < 10){
        alert('Description is not valid');
        desc.focus();
        desc.style.outlineColor = 'red';
        return false;
    }

    return true;
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    const isValidate = validate(username, password, nationality, desc);
    if(!isValidate){
        return;
    }

    const user = {
        username: username.value,
        password: password.value,
        nationality: nationality.value,
        desc: desc.value
    };

    myData.push(user);
    uiChanger(myData);

    console.log(user);
    form.reset();
});

function uiChanger(myData) {
    const container = document.querySelector('#cardContainer'); 
        container.innerHTML = ''; 
    myData.forEach(element => {
        const card = `<div>
            <h4>${element.username}</h4>
            <span>${element.password}</span> <br>
            <span>${element.nationality}</span> <br>
            <span>${element.desc}</span>
        </div>`;
        container.innerHTML += card;
    });
}
