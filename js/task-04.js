const counterValue = {
    value: 0
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
    counterValue.value -= 1;
    valueRef.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', () => {
    counterValue.value += 1;
    valueRef.textContent = counterValue.value;
});