

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const categoriesEl = {
    categories: document.getElementById("#categories"),
    categoriesItems: document.querySelectorAll('#categories.item')    
  }
  console.log(`Number of categories: ${categoriesEl.categories.children.length}`);
  
  
  categoriesEl.categoriesItems.forEach(elm => {
    const elementsListItems = elm.querySelectorAll('ul li');
  
    console.log('Category: ', elm.firstElementChild.textContent);
    console.log('Elements: ', elementsListItems.length);   
  });
  
  