const inputs = document.getElementsByTagName('input');
const spans = document.getElementsByTagName('span');
let inputsLength = inputs.length;

inputs[inputsLength - 1].addEventListener('click', () => {

    if (inputs[0].value == false) {
        inputs[0].classList.add('inputs_alerts');
        spans[1].style.display = 'block';
    }

    if (inputs[1].value == false) {
        inputs[1].classList.add('inputs_alerts');
        spans[2].style.display = 'block';
    }

    if (inputs[2].pattern !== '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$') {
        inputs[2].classList.add('inputs_alerts');
        spans[3].style.display = 'block';
    }

    if (inputs[3].value == false) {
        inputs[3].classList.add('inputs_alerts');
        spans[4].style.display = 'block';
    }

})