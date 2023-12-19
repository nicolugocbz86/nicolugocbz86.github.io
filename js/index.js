/* DOM */

const desplegarButton = document.getElementById('desplegar_button');
const ul = document.getElementById('ul');
const aTags = document.getElementsByClassName('a_tags')
let aTagsLength = aTags.length;

/* EVENTS */

desplegarButton.addEventListener('click', ()=>{
    desplegarButton.classList.toggle('button_180deg');
    ul.classList.toggle('ul_expanded');
    for (let i = 0; i < aTagsLength; i++) {
        aTags[i].classList.toggle('a_tags_blocked');
    }
})