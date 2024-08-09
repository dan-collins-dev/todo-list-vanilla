"use strict";

const createTodo = () => {}

const deleteTodo = () => {}

const updateTodo = () => {}

const addButton = document.querySelector(".header__add-btn");

addButton.addEventListener("click", (e) => {
    const addModal = document.querySelector(".add-modal");
    addModal.showModal();

    // User Enters required info
    const name = document.querySelector(".add-modal__form__name-input");
    // User saves todo
    // todo card created and added to the DOM
})