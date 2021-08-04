const refs = {
    userName: document.querySelector(`#name-output`),
    input: document.querySelector(`#name-input`)
}
refs.input.addEventListener(`input`, (event) => {
    event.currentTarget.value.trim() === '' ? refs.userName.textContent = 'незнакомец' : refs.userName.textContent = event.currentTarget.value
})