"use strict";

const addBtn = document.querySelector(".header__add-btn");
const cancelBtn = document.querySelector(".add_modal__cancel_btn");
const createBtn = document.querySelector(".add_modal__create_btn");

const createTodoCard = () => {}

const deleteTodoCard = () => {}

const updateTodoCard = () => {}


addBtn.addEventListener("click", e => {
    const addModal = document.querySelector(".add-modal");
    addModal.showModal();
});

cancelBtn.addEventListener("click", e => {
    e.preventDefault();
    const addModal = document.querySelector(".add-modal");
    addModal.close();
})

createBtn.addEventListener("click", e => {
    // e.preventDefault();
    const name = document.querySelector(".add-modal__form__name-input");
    const dueDate = document.querySelector(".add-modal__form__due-date-input");
    const priority = document.querySelector(".add-modal__form__priority-input");

    // Quick check for values and types (remove later)
    console.log(name.value, typeof name.value);
    console.log(dueDate.value, typeof dueDate.value)
    console.log(priority.value, typeof priority.value)
})