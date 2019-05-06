const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var todo = document.createElement("li");
  todo.className = TODO_ITEM;
  var target = document.getElementById('todo-list');
  target.appendChild(todo); // this works but the li has no content so is invisible.
  console.log(target)
}
