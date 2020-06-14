// получаем ссылки на наши поля ввода данных
const emailInputElem = document.querySelector('#email')
const passwordInputElem = document.querySelector('#password')
const emailErrorElem = document.querySelector('.error-text_email')
const passwordErrorElem = document.querySelector('.error-text_password')

// валидатор анализируюший функцию onEmailChange
const isRequired = value => value 
    ? undefined 
    : 'Required';

// валидатор анализируюший значение
const isEmail = value => value.includes('@')
    ? undefined 
    : 'Should be an email';

const validatorsByFieled = {
    email: [isRequired, isEmail],
    password: [isRequired],
}

const validate = (fieldName, value) => {
    const validators = validatorsByFieled[fieldName];
    return validators
    .map(validator => validator(value))
    .filter(errorText =>errorText)
    .join(', ');
};

// получаем обект значение 
const onEmailChange = event => {
    const errorText = validate('email', event.target.value);
    emailErrorElem.textContent = errorText;
}

// получаем обект значение
const onPasswordChange = event => {
    const errorText = validate('password' ,event.target.value)
    passwordErrorElem.textContent = errorText;
}

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }),{});
    alert(JSON.stringify(formData));
}

formElem.addEventListener('submit', onFormSubmit);