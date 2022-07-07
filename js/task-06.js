const input = document.querySelector("#validation-input")


input.addEventListener('blur', onValidationLength)

function onValidationLength() {
    if (input.value.length === parseInt(input.dataset.length)) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}