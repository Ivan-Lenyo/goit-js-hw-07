const refs = {
    inputRange: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.inputRange.addEventListener('input', onChangeSizeText);

function onChangeSizeText(event) {
    const sizeText = Number(event.currentTarget.value);
    console.log(sizeText);

    refs.text.setAttribute("style", `font-size: ${sizeText}px`);
 };