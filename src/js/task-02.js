const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const ingredientItems = ingredients => {
  return ingredients.map(ingredientName => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredientName;
    return ingredientItem;
  });
};
const ingredientsItemsCreator = ingredientItems(ingredients);
ingredientsListRef.append(...ingredientsItemsCreator);
