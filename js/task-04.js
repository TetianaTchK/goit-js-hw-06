// Task 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.

const value = document.querySelector('#value');
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

const plusCounter = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

const minusCounter = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

plusBtn.addEventListener("click", plusCounter);
minusBtn.addEventListener("click", minusCounter);