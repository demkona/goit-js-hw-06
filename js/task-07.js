const refs = {
    inputSize: document.querySelector('#font-size-control'),
    spanText: document.querySelector('#text')
}


refs.inputSize.addEventListener('input', onInputText)

function onInputText() {
    refs.spanText.style.fontSize = refs.inputSize.value + 'px'
}
