const userLoginForm = document.querySelector('.login-form');

userLoginForm.addEventListener('submit', onLoginBtnClick);
function onLoginBtnClick(event) {
    event.preventDefault();


    const {
        elements: { email, password } } = event.currentTarget;
    
    if (email.value === '' && password.value === '') {
        alert('Plase, fill in empty fields!');
    }
    else if (email.value === '') {
        alert('Plase, enter your email!');
    }
    else if (password.value === '') {
        alert('Plase, enter your password!');
    }
    else {
        const formData = { email: email.value, password: password.value };
        console.log('formData:', formData);
        event.currentTarget.reset();
    }
    }

