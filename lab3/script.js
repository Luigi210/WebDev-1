let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.add-button');
let todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletedOrChecked);

function addTodo(event) {
    event.preventDefault(); 
    
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

  
    let completedButton = document.createElement('input');
    completedButton.setAttribute('type', 'checkbox');
    completedButton.innerHTML = '<input></input>';
    completedButton.classList.add("completed-button");
    todoDiv.appendChild(completedButton);

    
    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    
    let trash = document.createElement('button');
    trash.innerHTML = '<img class="trash-img" src="https://cdn4.iconfinder.com/data/icons/linecon/512/delete-512.png" alt="trash-img">';
    trash.classList.add("trash-button");
    todoDiv.appendChild(trash);

    todoList.appendChild(todoDiv);


    todoInput.value = "";

}

function deletedOrChecked(event){
    let item = event.target;


    if(item.classList[0] === 'trash-button'){
        let todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === 'completed-button'){
        let todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
