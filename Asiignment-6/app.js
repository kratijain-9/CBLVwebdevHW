function add() { // to add tasks to the list
    let i = document.querySelector('input');
    let text = i.value;
    //create li
    let li = document.createElement('li');
    li.innerHTML = text;

    let ul = document.querySelector('ul');
    ul.appendChild(li);
    li.addEventListener('click', () => {
        li.remove();
    })
    //clear input box
    i.value = " ";
}


let a = document.querySelector('.btn');
a.addEventListener('click', add);

let li = document.querySelectorAll('li');
for (let k of li) {
    k.addEventListener('click', () => {
        k.remove();
    })
}