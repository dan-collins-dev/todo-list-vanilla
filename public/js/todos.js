const createPriorityPill = (priority) => {
    const pill = document.createElement("div");
    pill.classList.add("todo__priority-pill");

    switch (priority) {
        case "low":
            pill.classList.add("todo__priority-pill--low");
            break;

        case "medium":
            pill.classList.add("todo__priority-pill--med");
            break;

        case "high":
            pill.classList.add("todo__priority-pill--high");
            break;
    }

    const pillText = document.createElement("p");
    pillText.classList.add("todo__priority");

    pillText.innerText = priority.slice(0, 1).toUpperCase() + priority.slice(1);

    pill.appendChild(pillText);

    return pill;
};

const createInfoElements = (name, date, priority) => {
    const todoCardInfo = document.createElement("article");
    todoCardInfo.classList.add("todo__info");

    const todoName = document.createElement("p");
    todoName.classList.add("todo__name");
    todoName.innerText = name;

    const todoDueDate = document.createElement("p");
    todoDueDate.classList.add("todo__due-date");
    todoDueDate.innerText = date;

    const priorityPill = createPriorityPill(priority);

    todoCardInfo.appendChild(todoName);
    todoCardInfo.appendChild(todoDueDate);
    todoCardInfo.appendChild(priorityPill);

    return todoCardInfo;
};

const createBtns = () => {
    const btnArticle = document.createElement("article");
    btnArticle.classList.add("todo__btns");

    const editBtn = document.createElement("button");
    editBtn.classList.add("todos__btns__edit-btn");
    editBtn.innerText = "Edit";

    editBtn.addEventListener("click", (e) => {
        const todosContainer = document.querySelector(".todos");
        let elementToEdited = e.target.parentElement.parentElement;

        let index = Array.prototype.findIndex.call(
            todosContainer.children,
            (card) => card === elementToEdited
        );


        // todo
        // Opens up dialog
        // editBtn.dispatchEvent(editEvent)
        const saveBtn = document.querySelector(".edit-modal__save-btn")
        const editModal = document.querySelector(".edit-modal")
        let todos = JSON.parse(localStorage.getItem("todos"))
        let todo = todos[index];
        
        const name = document.querySelector(".edit-modal__form__name-input")
        const date = document.querySelector(".edit-modal__form__due-date-input")
        const priority = document.querySelector(".edit-modal__form__priority-input")    
        
        name.value = todo.name
        date.value = todo.dueDate;
        priority.value = todo.priority;

        const editEvent = new CustomEvent("edit", {
            bubbles: true,
            // detail: {index: index}
        })
        console.log(editEvent)
        saveBtn.dispatchEvent(editEvent)
        editModal.showModal();

        // let todos = JSON.parse(localStorage.getItem("todos"))
        // todos.splice(index, 1)
        // localStorage.setItem("todos", JSON.stringify(todos))

        // todosContainer.removeChild(elementToBeRemoved)
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("todos__btns__delete-btn");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", (e) => {
        const todosContainer = document.querySelector(".todos");
        let elementToBeRemoved = e.target.parentElement.parentElement;

        let index = Array.prototype.findIndex.call(
            todosContainer.children,
            (card) => card === elementToBeRemoved
        );

        console.log(index);

        let todos = JSON.parse(localStorage.getItem("todos"))
        todos.splice(index, 1)
        localStorage.setItem("todos", JSON.stringify(todos))

        todosContainer.removeChild(elementToBeRemoved)
    });

    btnArticle.appendChild(editBtn);
    btnArticle.appendChild(deleteBtn);

    return btnArticle;
};

export const createTodoCard = (name, date, priority, createEntry = false) => {
    if (createEntry === true) {
        if (localStorage.getItem("todos") === null) {
            let todos = [];
            todos.push({ name: name, dueDate: date, priority: priority });
            localStorage.setItem("todos", JSON.stringify(todos));
        } else {
            let todos = JSON.parse(localStorage.getItem("todos"));
            todos.push({ name: name, dueDate: date, priority: priority });
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    const todoCard = document.createElement("article");
    todoCard.classList.add("todo");

    const todoInfoSection = createInfoElements(name, date, priority);
    const todoBtns = createBtns();

    todoCard.appendChild(todoInfoSection);
    todoCard.appendChild(todoBtns);

    const todosContainer = document.querySelector(".todos");
    todosContainer.appendChild(todoCard);
};

// export const editTodo = (e, index) => {
//     const todosContainer = document.querySelector(".todos");
//     let elementToEdited = todosContainer.children[index];

//     let index = Array.prototype.findIndex.call(
//         todosContainer.children,
//         (card) => card === elementToEdited
//     );

//     const editEvent = new CustomEvent("edit", {
//         bubbles: true,
//         detail: {index: index}
//     })
//     console.log(editEvent)
//     saveBtn.dispatchEvent(editEvent)
// }