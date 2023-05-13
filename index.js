if (typeof window !== 'undefined') {
    console.log(window);
  }

if (typeof document !== 'undefined'){
    console.log(document);
const form = document.querySelector('.form');
console.log(form);
const text = document.querySelector ('#inputText');
const todocontainer = document.querySelector('.todo-container');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addtodo();
})
let todo=JSON.parse(localStorage.getItem('todo'));
if(todo){
    todo.forEach(element => {
        addtodo(element)
    });
}
function addtodo(elem) {
    let todoColl = document.createElement('div');
    let todotext = inputText.value;
    if(elem){
        todotext=elem.inputText;
    }
    if (todotext){
        todoColl.innerHTML =`
    <div class="todo-list">
              <div class="check ${elem && elem.complete? "active-check": ""}"><img src="./images/icon-check.svg" alt=""></div>
              <p class="ptag ${elem && elem.complete? "complete":""}">${todotext}</p>
              <button class="close"><img src="./images/icon-cross.svg" alt=""></button>
            </div>
            <div class="hr"></div>
            `;
            todocontainer.appendChild(todoColl);
            updateLs()
            };
            let close = todoColl.querySelector('.close');
            close.addEventListener("click", ()=>{
                todoColl.remove();
                updateLs();
            })
            let check = todoColl.querySelector('.check');
            check.addEventListener('click', ()=>{
                check.classList.toggle(".active-check")
                todoColl.children[0].children[1].classList.add("complete");
                updateLs()
            })
}

function updateLs() {
    let ptag=document.querySelectorAll('.ptag');
    let arr=[];
    ptag.forEach(element => {
        arr.push({
            text:element.innerText,
            complete:element.classList.contains('complete')
        })
    });
    localStorage.setItem("todo",JSON.stringify(arr));
}

let details = document.querySelectorAll(".details p")
console.log(details);
let todolist = document.querySelectorAll(".todo-list")
console.log(details);
details.forEach(element => {
    element.addEventListener("click", ()=>{
        details.forEach(item => {
            item.classList.remove("active");
        });
    element.classList.add("active");
    if(element.innerText=="Active"){
        todolist.forEach(elem => {
            if(!elem.children[0].children[1].classList.contains("complete")){
                elem.style.display="block";
            }else{
                elem.style.display="none";
            }
        });
    }else if(element.innerText=="completed"){
        todolist.forEach(elem =>{
            if(!elem.children[0].children[1].classList.contains("complete")){
                elem.style.display="block";
            }else{
                elem.style.display="none";
            }
        });
    }else{
        todolist.forEach(elem => {
            elem.style.display="block";
        });
    }
    });
});
}