"use strict";

import { createTodoCard } from "./todos.js";

const addBtn = document.querySelector(".header__add-btn");
const cancelBtn = document.querySelector(".add_modal__cancel_btn");
const createBtn = document.querySelector(".add_modal__create_btn");


const deleteTodoCard = () => {};

const updateTodoCard = () => {};

const addToStorage = () => {};

const removeFromStorage = () => {};

addBtn.addEventListener("click", (e) => {
    const addModal = document.querySelector(".add-modal");
    addModal.showModal();
});

cancelBtn.addEventListener("click", (e) => {
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

createBtn.addEventListener("click", (e) => {
    const name = document.querySelector(".add-modal__form__name-input");
    const dueDate = document.querySelector(".add-modal__form__due-date-input");
    const priority = document.querySelector(".add-modal__form__priority-input");

    // This condition ensures that empty fields are using the built-in
    // "required" element attribute before overriding the button default
    // behavior
    if (name.value !== "" && dueDate.value !== "" && priority.value !== "") {
        e.preventDefault();
        // Quick check for values and types (remove later)
        createTodoCard(name.value, dueDate.value, priority.value)
        name.value = "";
        dueDate.value = "";
        priority.value = "";
        const addModal = document.querySelector(".add-modal");
        addModal.close();
    }
});