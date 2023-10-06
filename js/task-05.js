// Task 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', spanInput);

function spanInput(evt) {
if (evt.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
} else {
    nameOutput.textContent = evt.currentTarget.value;
    }
};

console.log(nameOutput);