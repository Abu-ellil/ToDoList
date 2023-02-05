const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const notes = document.querySelector("#tasks");

let notesStorage = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoInput.value === "") {
    alert("pleas enter a task");
    return;
  }
  notesStorage.push(todoInput.value);
  localStorage.setItem("notes", JSON.stringify(notesStorage));
  limaker(todoInput.value);
  todoInput.value = "";
});

const limaker = (text) => {
  const task = document.createElement("li");
  task.innerText = text;
  task.innerHTML = ' <button onclick="del(this)">مسح</button>' + text;
  notes.appendChild(task);
};

const restorr = JSON.parse(localStorage.getItem("notes"));
restorr.forEach((note) => {
  limaker(note);
});

const del = (dl) => {
  const el = dl.parentNode;
  const indx = [...el.parentElement.children].indexOf(el);
  notesStorage.splice(indx, 1);
  localStorage.setItem("notes", JSON.stringify(notesStorage));
  el.remove();
  console.log(notesStorage);
  console.log(indx);
};
