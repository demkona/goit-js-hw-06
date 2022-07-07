
const loginForm = document.querySelector('.login-form')

loginForm.addEventListener('submit', onLoginFormSubmit)

function onLoginFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }

    const users = {
        email: email.value,
        password: password.value,
    }
    console.log(users);
    event.currentTarget.reset();
}

