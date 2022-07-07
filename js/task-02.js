const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let newList = ingredients.map(item => {
  const ingredientsItemListEl = document.createElement('li')
  ingredientsItemListEl.textContent = item
  ingredientsItemListEl.classList.add('item')

  return ingredientsItemListEl

});

const ingredientsEl = document.querySelector('#ingredients')
ingredientsEl.append(...newList)