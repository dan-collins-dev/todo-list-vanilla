"use strict";

import { createTodo, getTodo, render, updateTodo } from "./controller.js";

const addBtn = document.querySelector(".header__add-btn");
const addModal = document.querySelector(".add-modal");
const addCancelBtn = document.querySelector(".add-modal__cancel-btn");
const addModalCreateBtn = document.querySelector(".add-modal__create-btn");

const editModal = document.querySelector(".edit-modal");
const editSaveBtn = document.querySelector(".edit-modal__save-btn");

const todoFilter = document.querySelector(".filter-container__filter");

let currentItem;
let currentIndex;

document.addEventListener("edit", (e) => {
    const name = document.querySelector(".edit-modal__form__name-input");
    const date = document.querySelector(".edit-modal__form__due-date-input");
    const priority = document.querySelector(
        ".edit-modal__form__priority-input"
    );

    currentIndex = e.detail.index;
    currentItem = getTodo(e.detail.index);
    name.value = currentItem.name;
    date.value = currentItem.dueDate;
    priority.value = currentItem.priority;
    editModal.showModal();
});

addCancelBtn.addEventListener("click", (e) => {
    const name = document.querySelector(".add-modal__form__name-input");
    const date = document.querySelector(".add-modal__form__due-date-input");
    const priority = document.querySelector(".add-modal__form__priority-input");
    name.value = "";
    date.value = "";
    priority.value = "";
    e.preventDefault();
    addModal.close();
});

addModalCreateBtn.addEventListener("click", (e) => {
    const name = document.querySelector(".add-modal__form__name-input");
    const date = document.querySelector(".add-modal__form__due-date-input");
    const priority = document.querySelector(".add-modal__form__priority-input");

    if (name.value !== "" && date.value !== "" && priority.value !== "") {
        e.preventDefault();
        createTodo(name.value, date.value, priority.value);

        name.value = "";
        date.value = "";
        priority.value = "";
        const addModal = document.querySelector(".add-modal");
        addModal.close();
    }
});

editSaveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector(".edit-modal__form__name-input");
    const date = document.querySelector(".edit-modal__form__due-date-input");
    const priority = document.querySelector(
        ".edit-modal__form__priority-input"
    );

    updateTodo(currentIndex, name.value, date.value, priority.value);
    editModal.close();
});

addBtn.addEventListener("click", () => {
    const addModal = document.querySelector(".add-modal");
    addModal.showModal();
});

const filterTodos = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    const todoList = document.querySelector(".todos");
    let todos = Array.from(todoList.children);

    todos.forEach((todo) => {
        let todoName = todo.firstChild.firstChild;
        todo.classList.remove("hidden");

        if (!todoName.innerText.toLowerCase().includes(searchTerm)) {
            todo.classList.toggle("hidden");
        }
    });
};

todoFilter.addEventListener("input", filterTodos);

render();
