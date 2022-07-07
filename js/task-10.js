function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes')
}

refs.buttonCreate.addEventListener('click', onCreateBoxes)
refs.buttonDestroy.addEventListener('click', onDestroyBoxes)


function onCreateBoxes(amount) {
  amount = refs.input.value

  let sizeBoxes = 30
  let newBoxes = ''

  for (let i = 0; i < amount; i += 1) {
    const colorBoxes = getRandomHexColor();
    newBoxes += `<div style = "height: ${sizeBoxes + 10 * i}px; width:${sizeBoxes + 100 * i}px; background-color:${colorBoxes};"></div>`
  }
  refs.boxes.insertAdjacentHTML("afterbegin", newBoxes)
}



function onDestroyBoxes() {
  refs.input.value = ''
  refs.boxes.innerHTML = ''
}

