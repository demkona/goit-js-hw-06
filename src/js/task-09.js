function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  btnChangeColor: document.querySelector('.change-color'),
  colorSpan: document.querySelector('.color'),
  body: document.body
}

refs.btnChangeColor.addEventListener('click', onBtnClick)

function onBtnClick() {
  refs.body.style.backgroundColor = getRandomHexColor()

  refs.colorSpan.textContent = refs.body.style.backgroundColor

}




