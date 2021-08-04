const listCategoriesRef = document.querySelectorAll('.item')

const showNumbersOfCategories = element => `В списке ${element.length} категории.`

console.log(showNumbersOfCategories(listCategoriesRef));

const showCategories = element => element.forEach(el =>
    console.log(`Категория: ${el.querySelector(`h2`).textContent}. Количество элементов: ${el.querySelectorAll(`li`).length}.`))

showCategories(listCategoriesRef);