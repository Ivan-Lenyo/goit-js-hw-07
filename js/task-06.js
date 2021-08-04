const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    event.preventDefault();

    console.log(event.currentTarget.value.length);
    console.log(input.dataset.length);

    if ((event.currentTarget.value.length) === Number(input.dataset.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
};