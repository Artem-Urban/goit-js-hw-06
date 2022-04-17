const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsListElements = document.getElementById('ingredients');

const ingredientsItem = ingredients.map(ingredient => {
  const ingredientsItemElements = document.createElement('li');
  ingredientsItemElements.textContent = ingredient;
  ingredientsItemElements.classList.add('item');
  return ingredientsItemElements;

});
ingredientsListElements.append(...ingredientsItem);
