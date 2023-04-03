const formRegistration = document.forms[0];
const firstName = formRegistration.elements['firstName'];
const lastName = formRegistration.elements['lastName'];
const userEmail = formRegistration.elements['email'];
const userPassword = formRegistration.elements['password'];
const signUpButton = formRegistration.elements['signup-btn'];

const signInLink = document.getElementById('signin-link');
const signUpLink = document.getElementById('signup-link');

const formSignIn = document.forms[1];
const signInEmail = formSignIn.elements['email-signin'];
const signInPassword = formSignIn.elements['password-signin'];
const signInButton = formSignIn.elements['signin-btn'];

const signOutButton = document.getElementById('signout-user-btn');

let testFirstName;
let testLastName;
let testEmail;
let testPassword;

// RegEx

let NameRegEx = /^[a-zA-Z]{1,20}$/;
let userEmailRegEx = /^[a-zA-Z0-9-.]+@[a-zA-Z]+\.[a-zA-Z]+$/;
let userPasswordRegEx = /^\w{8,15}$/;

// Validation 'First Name'

firstName.addEventListener('input', () => {

    firstName.style.border = '2px solid lightblue';

    testFirstName = NameRegEx.test(firstName.value);
    let check = document.getElementById('first-name-box');

    if (testFirstName) {
        check.classList.add('fa-check');
        check.classList.remove('fa-xmark');
        document.getElementById('first-name-alert').style.display = 'none';
    } else {
        check.classList.add('fa-xmark');
        check.classList.remove('fa-check');
        document.getElementById('first-name-alert').innerHTML = 'Please provide a valid First name.'
        document.getElementById('first-name-alert').style.display = 'inline';
    }

    document.getElementById('firstName-label').style.top = '-10px';
    document.getElementById('firstName-label').style.fontSize = '12px';
});

firstName.addEventListener('change', () => {
    testFirstName = NameRegEx.test(firstName.value);

    if (testFirstName) {
        firstName.style.border = '2px solid rgb(21, 193, 136)';
    } else {
        firstName.style.border = '2px solid red';
    }
});

// Validation 'Last Name'

lastName.addEventListener('input', () => {

    lastName.style.border = '2px solid lightblue';

    testLastName = NameRegEx.test(lastName.value);
    let check = document.getElementById('last-name-box');

    if (testLastName) {
        check.classList.add('fa-check');
        check.classList.remove('fa-xmark');
        document.getElementById('last-name-alert').style.display = 'none';
    } else {
        check.classList.add('fa-xmark');
        check.classList.remove('fa-check');
        document.getElementById('last-name-alert').innerHTML = 'Please provide a valid Last name.';
        document.getElementById('last-name-alert').style.display = 'inline';
    }

    document.getElementById('lastName-label').style.top = '-10px';
    document.getElementById('lastName-label').style.fontSize = '12px';
});

lastName.addEventListener('change', () => {
    testLastName = NameRegEx.test(lastName.value);

    if (testLastName) {
        lastName.style.border = '2px solid rgb(21, 193, 136)'
    } else {
        lastName.style.border = '2px solid red'
    }
});

// Validation 'Email'

userEmail.addEventListener('input', () => {


    userEmail.style.border = '2px solid lightblue'

    testEmail = userEmailRegEx.test(userEmail.value);
    let check = document.getElementById('email-box');

    if (testEmail) {
        check.classList.add('fa-check');
        check.classList.remove('fa-xmark');
        document.getElementById('email-alert').style.display = 'none';
    } else {
        check.classList.add('fa-xmark');
        check.classList.remove('fa-check');
        document.getElementById('email-alert').innerHTML = 'Please provide a valid Email address.'
        document.getElementById('email-alert').style.display = 'inline';
    }
    document.getElementById('email-label').style.top = '-10px';
    document.getElementById('email-label').style.fontSize = '12px';
});

userEmail.addEventListener('change', () => {
    testEmail = userEmailRegEx.test(userEmail.value);

    if (testEmail) {
        userEmail.style.border = '2px solid rgb(21, 193, 136)'
    } else {
        userEmail.style.border = '2px solid red'
    }
});

// Validation 'Password'

userPassword.addEventListener('input', () => {

    userPassword.style.border = '2px solid lightblue'

    testPassword = userPasswordRegEx.test(userPassword.value);
    let check = document.getElementById('password-box');

    if (testPassword) {
        check.classList.add('fa-check');
        check.classList.remove('fa-xmark');
        document.getElementById('password-alert').style.display = 'none';
    } else {
        check.classList.add('fa-xmark');
        check.classList.remove('fa-check');
        document.getElementById('password-alert').innerHTML = 'Please provide a valid Password.'
        document.getElementById('password-alert').style.display = 'inline';
    }

    document.getElementById('password-label').style.top = '-10px';
    document.getElementById('password-label').style.fontSize = '12px';
});

userPassword.addEventListener('change', () => {

    testPassword = userPasswordRegEx.test(userPassword.value);

    if (testPassword) {
        userPassword.style.border = '2px solid rgb(21, 193, 136)'
    } else {
        userPassword.style.border = '2px solid red'
    }
});

// Sign Up page

let allUsers = [];

signUpButton.addEventListener('click', () => {

    if (testFirstName && testLastName && testEmail && testPassword) {

        let user = {
            'first name': firstName.value,
            'last name': lastName.value,
            'email': userEmail.value,
            'password': userPassword.value,
        };

        if (localStorage.length > 0 && localStorage.getItem('allUsers')) {
            allUsers = JSON.parse(localStorage.getItem('allUsers'));
        }

        if(!allUsers.some(elem => elem.email === userEmail.value)) {
            allUsers.push(user)

            localStorage.setItem('allUsers', JSON.stringify(allUsers));

            firstName.value = '';
            lastName.value = '';
            userEmail.value = '';
            userPassword.value = '';

            removeClass();
            changeLabel();
            changeBorder();
        } else {
            document.getElementById('email-box').classList.add('fa-xmark');
            document.getElementById('email-box').classList.remove('fa-check');
            document.getElementById('email-alert').innerHTML = 'This Email already exist.'
            document.getElementById('email-alert').style.display = 'inline';
            userEmail.style.border = '2px solid red';
        }
    }
});

signInLink.addEventListener('click', () => {
    document.querySelector('.signup-form').style.display = 'none';
    document.querySelector('.signin-form').style.display = 'flex';
});

signUpLink.addEventListener('click', () => {
    document.querySelector('.signin-form').style.display = 'none';
    document.querySelector('.signup-form').style.display = 'flex';
});

// Sign In page

signInEmail.addEventListener('input', () => {
    document.getElementById('email-label-signin').style.top = '-10px';
    document.getElementById('email-label-signin').style.fontSize = '12px';
});

signInPassword.addEventListener('input', () => {
    document.getElementById('password-label-signin').style.top = '-10px';
    document.getElementById('password-label-signin').style.fontSize = '12px';
});

signInButton.addEventListener('click', () => {

    let users = JSON.parse(localStorage.getItem('allUsers'));

    if(signInEmail.value !=='' && signInPassword.value !=='') {

        if(users.some(elem => elem.email === signInEmail.value)) {

            if(users.some(elem => elem.password === signInPassword.value)) {

                let index = users.findIndex(elem => elem.email === signInEmail.value);

                document.getElementById('name-user').innerHTML = `${users[index]['first name']} ${users[index]['last name']}`;
                document.getElementById('email-user').innerHTML = signInEmail.value;

                document.getElementById('profile').style.display = 'flex';
                document.getElementById('form-login').style.display = 'none';

            } else {
                document.getElementById('password-alert-signin').style.display = 'inline';
                document.getElementById('password-alert-signin').innerHTML = 'Incorrect email or password.'
            }
        } else {
            document.getElementById('password-alert-signin').style.display = 'inline';
            document.getElementById('password-alert-signin').innerHTML = 'Localstorage is empty.'
        }
    }
});

signOutButton.addEventListener('click', () => {
    document.getElementById('profile').style.display = 'none';
    document.querySelector('.signup-form').style.display = 'flex';
    document.querySelector('.signin-form').style.display = 'none';
})

// Functions

function removeClass() {
    let input = document.querySelectorAll('.fa-solid');
    for (i = 0; i < input.length; i++) {
        input[i].classList.remove('fa-check');
    }
};

function changeLabel() {
    let label = document.querySelectorAll('.input-label');
    for (i = 0; i < label.length; i++) {
        label[i].style.top = '0';
        label[i].style.fontSize = '16px';
    }
};

function changeBorder() {
    let input = document.querySelectorAll('.input-element');
    for (i = 0; i < input.length; i++) {
        input[i].style.border = '1px solid rgb(181, 181, 181)';
    }
}





