import { getLocalStorage } from "./helpers/localStorage.js";

export const btnControlTodo = document.querySelector(".btn-control-todo");
export const todoContainer = document.querySelector(".todo-container");
const todoInput = document.querySelector(".todo-input");
const todoMainContainer = document.querySelector('.todo')
let isOpen = false;
let isDone;


function generateId() {
  return Math.floor(Math.random() * 100000);
}
btnControlTodo.addEventListener("click", () => {
  if (!isOpen) {
    todoContainer.style.opacity = "1";
    todoContainer.style.zIndex = "3";
    btnControlTodo.style.zIndex = "4";
    isOpen = true;
  } else {
    todoContainer.style.opacity = "0";
    todoContainer.style.zIndex = "0";
    btnControlTodo.style.zIndex = "1";
    isOpen = false;
  }
});

const tabBtnAll = document.querySelector(".tab-btn-all");
const tabBtnDone = document.querySelector(".tab-btn-done");
const tabContentAll = document.querySelector(".tab-content-all");

let todoArray = [];
if (localStorage.getItem("todos")) {
  todoArray = JSON.parse(localStorage.getItem("todos"));
  todoArray.forEach((item) => {
    createTodoItem(item);
  });
}

function checkTodoList(todolist, isDone = false) {
  todolist.forEach((item) => {
    if (!isDone || (isDone && item.isDone)) {
      createTodoItem(item);
    }
  });
}
tabBtnDone.addEventListener("click", () => {
  tabBtnAll.classList.remove("active");
  tabBtnDone.classList.add("active");
  removeTodoItem();
  isDone = true;
  checkTodoList(todoArray, isDone);
});
tabBtnAll.addEventListener("click", () => {
  tabBtnDone.classList.remove("active");
  tabBtnAll.classList.add("active");
  removeTodoItem();
  isDone = false;
  checkTodoList(todoArray, isDone);
});

todoInput.addEventListener("change", (event) => {
  const valueInput = event.target.value;
  if (valueInput) {
    const itemTodo = {};
    itemTodo.id = generateId();
    itemTodo.isDone = false;
    itemTodo.text = valueInput;
    todoArray.push(itemTodo);
    createTodoItem(itemTodo);
    localStorage.setItem("todos", JSON.stringify(todoArray));
  }
  todoInput.value = "";
});

function createTodoItem(obj) {
  const itemOfTodo = document.createElement("div");
  itemOfTodo.id = obj.id;
  itemOfTodo.classList.add("item-oftodo");

  const labelDone = document.createElement("label");
  labelDone.classList.add("todo-label");
  const inputDone = document.createElement("input");
  inputDone.type = "checkbox";
  inputDone.checked = obj.isDone;
  inputDone.classList.add("todo-input-done");
  const spanDone = document.createElement("span");
  spanDone.classList.add("todo-span-done");
  labelDone.append(inputDone, spanDone);

  const todoText = document.createElement("p");
  todoText.classList.add("todo-text");
  todoText.innerHTML = obj.text;

  const todoClose = document.createElement("button");
  todoClose.classList.add("todo-close");
  todoClose.innerHTML = "X";

  todoClose.addEventListener("click", () => {
    todoArray = todoArray.filter((item) => {
      return item.id !== obj.id;
    });
    localStorage.setItem("todos", JSON.stringify(todoArray));
    itemOfTodo.remove();
  });
  if (inputDone.checked) {
    todoText.style.textDecoration = "line-through";
  }
  inputDone.addEventListener("click", () => {
    if (inputDone.checked) {
      todoText.style.textDecoration = "line-through";
    } else {
      spanDone.innerHTML = "";
      todoText.style.textDecoration = "none";
    }
    todoArray = todoArray.map((item) => {
      if (item.id === obj.id) {
        item.isDone = inputDone.checked;
      }
      return item;
    });
    localStorage.setItem("todos", JSON.stringify(todoArray));
  });

  itemOfTodo.append(labelDone, todoText, todoClose);
  tabContentAll.append(itemOfTodo);
}
function removeTodoItem() {
  document.querySelectorAll(".item-oftodo").forEach((item) => {
    item.remove();
  });
}
export const changeLanguageInTodo = (currentLanguage) =>{
currentLanguage = getLocalStorage('language');
if(currentLanguage == 'en'){
  todoInput.placeholder = 'What are you going to do?'
  tabBtnAll.innerHTML = 'ALL'
  tabBtnDone.innerHTML = 'DONE'
}else {
  todoInput.placeholder = 'Что планируешь сделать сегодня?'
  tabBtnAll.innerHTML = 'ВСЕ'
  tabBtnDone.innerHTML = 'ГОТОВО'
}
}

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(todoMainContainer);
	if ( ! withinBoundaries ) {
		todoContainer.style.opacity = '0'; 
    isOpen=false
	}
})
