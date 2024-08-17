"use strict"

import { createTodoCard } from "./todos.js";

export const createTodo = (name, dueDate, priority) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos === null) todos = [];

    todos.push({name: name, dueDate: dueDate, priority: priority})

    localStorage.setItem("todos", JSON.stringify(todos))
    render();
}

export const getTodo = (index) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos === null) todos = [];

    let todo = todos[index]
    console.log(todo)
    return todo;
}

export const updateTodo = (index, name, dueDate, priority) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos === null) todos = [];

    console.log("ODO: ", todos[index])
    let todo;
    for (let i = 0; i < todos.length; i++) {
        if (i === index) {
            todo = todos[i]
        }
    }

    todo.name = name;
    todo.dueDate = dueDate;
    todo.priority = priority

    localStorage.setItem("todos", JSON.stringify(todos))
    render();
}

export const deleteTodo = (index) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos === null) todos = [];

    todos.splice(index, 1);

    localStorage.setItem("todos", JSON.stringify(todos))
    render();
}

export const render = () => {
    const todosElement = document.querySelector(".todos");
    todosElement.replaceChildren();

    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos === null) todos = [];

    todos.forEach(element => {
        createTodoCard(element.name, element.dueDate, element.priority)
    });
}
