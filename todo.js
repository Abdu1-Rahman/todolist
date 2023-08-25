const todo_input = document.getElementById("todo-input");
const todo_add_btn = document.getElementById("todo-add-btn");
const todo_list_data_container = document.getElementById("todo-list-data-container");
const form = document.getElementById("form");
console.log(form);
form.addEventListener("submit",addTodo)


function addTodo (e){
    e.preventDefault();
    let todoText = todo_input.value;
    console.log(todoText)
    let _div_ = document.createElement("div");
    let _p_ = document.createElement("p");
    _p_.innerHTML = todoText
    console.log(_div_,_p_);
    todo_list_data_container.appendChild(_div_.appendChild(_p_))
}

function name(){
    console.log('name');
}

function functionWithParams(params){
    console.log('loggg',params);
}
