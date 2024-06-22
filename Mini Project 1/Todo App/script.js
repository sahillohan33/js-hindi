const todoForm=document.querySelector(".form-todo")

const todoInput=document.querySelector("#input-todo")

const todoList=document.querySelector(".todo-list")
const deleteBtn=document.querySelector(".delete")

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodoInput=todoInput.value;
    const newLi=document.createElement("li");
    const newLiInnerHTML=
    `
     <span class="text">${newTodoInput}</span>
                <div class="todo-button">
                    <button class="todo-btn delete">Delete</button>
                    
                </div>
    `
    newLi.innerHTML=newLiInnerHTML;
    todoList.append(newLi);
    todoInput.value='';
})
deleteBtn.addEventListener("click",(e)=>{
     
        const deleteLi=e.target.parentNode.parentNode;
         deleteLi.remove();
     
    
})

    
