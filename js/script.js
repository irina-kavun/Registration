const registrationButton = document.querySelector('.registration-button');

function validation() {
    const inputValues = document.querySelectorAll('.registration-form-input');
    const validationEmail = document.querySelector('#validation-email');

    const checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    inputValues.forEach(item => {
        let textErrorElem = item.nextElementSibling;
        const emailField = item.getAttribute('name') === 'email';

        if (item.value) {
            if( emailField && checkEmail.test(item.value)) {
                validationEmail.innerText = "";

            } else if( !emailField ) {
                return textErrorElem.innerText = "";

            } else {
                validationEmail.innerText = "Необходимо ввести правильный формат";
                validationEmail.style.color = "red";
            }

        } else if (item.value === '' && item.hasAttribute('required')) {
            textErrorElem.innerText = "Поле обязательно для заполнения";
            textErrorElem.style.color = "red"
        }
    });
}


registrationButton.addEventListener('click', validation);