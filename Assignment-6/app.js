function add() { // to add tasks to the list
    let i = document.querySelector('input');
    let text = " "+i.value;
    if(i.value!=" "){
        //create li
    let li = document.createElement('li');
    li.innerHTML = `<span><i class="fas fa-trash-alt"></i></span>${text}`;
    
    let ul = document.querySelector('ul');
    ul.appendChild(li);
    let sc=li.children;
    
    sc[0].addEventListener('click', () => {
        // sc[0].remove();
        sc[0].parentElement.remove();
    })
    li.addEventListener('click',()=>{
        li.style.textDecoration='line-through';
    })
    //clear input box
    i.value = " ";

    }
    
}


let a = document.querySelector('.btn');
a.addEventListener('click', add);

let sp = document.querySelectorAll('span');
for (let k of sp) {
    k.addEventListener('click', () => {
        
        let pe=k.parentElement;
        pe.remove();
        
    })
    
}

let li=document.querySelectorAll('li');
for(let k of li){
    k.addEventListener('click',()=>{
        k.style.textDecoration='line-through';
       
    })
}
