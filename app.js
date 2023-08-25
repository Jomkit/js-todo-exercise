const submit = document.querySelector('input[type="submit"]');
const ul = document.querySelector('ul');

if(localStorage.length !== 0){
    ul.innerHTML = localStorage.getItem('ul');
}

const removeBtn = document.querySelector('.rmvBtn');

//Add li for todo
submit.addEventListener('click', function(e){
    e.preventDefault();

    const newLi = document.createElement("li");
    const toDoAdd = document.getElementById('todoadd');
    const btn = document.createElement('button');
    
    if(toDoAdd.value === ""){
        return;
    }else{
        newLi.innerText = toDoAdd.value;
        btn.innerHTML = '&#120;';

        btn.setAttribute('class', 'rmvBtn');

        newLi.append(btn);
        ul.appendChild(newLi);

        toDoAdd.value = '';
        localStorage.setItem("ul", ul.innerHTML);
        };
        
});

//Strike through on li when done
ul.addEventListener('click', function(e){
    if(e.target.tagName.toLowerCase() === 'button'){
        e.target.parentElement.remove();
    };

    e.target.classList.toggle("completed");
    localStorage.setItem("ul", ul.innerHTML);
});
