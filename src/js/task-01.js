const categoriesEl = document.querySelectorAll('.item')
console.log('Number of categories:', categoriesEl.length)

categoriesEl.forEach(item => {

    const nameCategories = item.querySelector('h2').textContent
    console.log('Category:', nameCategories,)

    const quantityNameCategories = item.querySelectorAll('li').length
    console.log('Elements:', quantityNameCategories)
});