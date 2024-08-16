"use strict";

import { createTodoCard} from "./todos.js";

const addBtn = document.querySelector(".header__add-btn");
const cancelBtnAM = document.querySelector(".add-modal__cancel-btn");
const createBtnAM = document.querySelector(".add-modal__create-btn");
const cancelBtnEM = document.querySelector(".edit-modal__cancel-btn");
const saveBtnEM = document.querySelector(".edit-modal__save-btn")
const editModal = document.querySelector(".edit-modal")

// editModal.addEventListener("edit", (e) => {
//     console.log("You")
//     editModal.showModal();
// })

const loadTodos = () => {
    if (localStorage.getItem("todos") === null) {
        return;
    }

    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach((todo) => {
        createTodoCard(todo.name, todo.dueDate, todo.priority);
    });
};

addBtn.addEventListener("click", (e) => {
    const addModal = document.querySelector(".add-modal");
    addModal.showModal();
});

cancelBtnAM.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector(".add-modal__form__name-input");
    const dueDate = document.querySelector(".add-modal__form__due-date-input");
    const priority = document.querySelector(".add-modal__form__priority-input");
    const addModal = document.querySelector(".add-modal");

    name.value = "";
    dueDate.value = "";
    priority.value = "";

    addModal.close();
});

cancelBtnEM.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector(".add-modal__form__name-input");
    const dueDate = document.querySelector(".add-modal__form__due-date-input");
    const priority = document.querySelector(".add-modal__form__priority-input");
    const addModal = document.querySelector(".add-modal");

    name.value = "";
    dueDate.value = "";
    priority.value = "";

    addModal.close();
});

createBtnAM.addEventListener("click", (e) => {
    const name = document.querySelector(".add-modal__form__name-input");
    const dueDate = document.querySelector(".add-modal__form__due-date-input");
    const priority = document.querySelector(".add-modal__form__priority-input");

    // This condition ensures that empty fields are using the built-in
    // "required" element attribute before overriding the button default
    // behavior
    if (name.value !== "" && dueDate.value !== "" && priority.value !== "") {
        e.preventDefault();
        // Quick check for values and types (remove later)
        createTodoCard(name.value, dueDate.value, priority.value, true);
        name.value = "";
        dueDate.value = "";
        priority.value = "";
        const addModal = document.querySelector(".add-modal");
        addModal.close();
    }
});

// document.addEventListener("edit", (e) => {
//     console.log("HELLO?!")
//     console.log(e.detail.index)
// })

saveBtnEM.addEventListener("click", (e) => {
    const name = document.querySelector(".edit-modal__form__name-input");
    const dueDate = document.querySelector(".edit-modal__form__due-date-input");
    const priority = document.querySelector(".edit-modal__form__priority-input");
    const todosContainer = document.querySelector(".todos");
    
    e.preventDefault();
    console.log(e.target)

    if (name.value !== "" && dueDate.value !== "" && priority.value !== "") {
        // console.log(index)
        // Quick check for values and types (remove later)
        // if (localStorage.getItem("todos") === null)
        // name.value = "";
        // dueDate.value = "";
        // priority.value = "";
        // const addModal = document.querySelector(".add-modal");
        // addModal.close();
    }
})

saveBtnEM.addEventListener("edit", (e) => {
    e.preventDefault();
    console.log(e.detail)
    
    
})

loadTodos();
