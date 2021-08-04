const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredientsRef = document.querySelector('#ingredients');

const itemIngredients = ingredients.map(option => {
  const itemRef = document.createElement('li');
  itemRef.textContent = option;

  return itemRef;
});

listIngredientsRef.append(...itemIngredients);