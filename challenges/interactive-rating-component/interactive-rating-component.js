const form = document.getElementsByTagName('form');
const inputButtons = document.querySelectorAll('.inputButtons');
const inputSubmit = document.getElementsByTagName('input');
const formResponse = document.querySelectorAll('.form-response');
const span = document.getElementsByTagName('span');

let inputButtonsLength = inputButtons.length;

for (let i = 0; i < inputButtonsLength; i++) {
    inputButtons[i].addEventListener('click', () => {
        var selectedValue = inputButtons[i].value;
        console.log(selectedValue);

        inputSubmit[5].addEventListener('click', () => {

            form[0].style.display = 'none';
            formResponse[0].style.display = 'flex';
            span[0].textContent = selectedValue;

        });

    })
}