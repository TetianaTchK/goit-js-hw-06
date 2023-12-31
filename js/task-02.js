//Task 2
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

const ingredientsListItems = ingredients.map(ingredient => {
  const ingredientItemRef = document.createElement('li');
  ingredientItemRef.classList.add('item');
  ingredientItemRef.textContent = ingredient;
  return ingredientItemRef;
});

// console.log(ingredientsListItems);

ingredientsList.append(...ingredientsListItems);
