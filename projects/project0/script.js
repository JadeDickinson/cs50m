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
  var todo = document.createElement("li")
  todo.className = classNames["TODO_ITEM"] // found syntax through trial and error in console
  var placeholderContent = document.createTextNode('New TODO item')
  todo.appendChild(placeholderContent)
  var target = document.getElementById('todo-list')
  target.appendChild(todo)
  console.log(target)
}
