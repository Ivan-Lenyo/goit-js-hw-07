const refs = {
    inputNumber: document.querySelector('input[type="number"]'),
    renderColectionBtn: document.querySelector('[data-action="render"]'),
    destroyColectionBtn: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector("#boxes"),
};

refs.renderColectionBtn.addEventListener('click', createBoxes);

refs.destroyColectionBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    var amount = refs.inputNumber.value;
    const basicSize = 30;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
    const size = basicSize + (( i * 10 ) - 10 );
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
};

function destroyBoxes() {
  boxes.innerHTML = '';
};

function random() {
  return Math.floor(Math.random() * 256);
};