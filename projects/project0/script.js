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
  // fetch count and assign content to a number
  const countElement = document.getElementById('item-count')
  var currentCount = Number(countElement.innerHTML)

  var todo = document.createElement("li")
  todo.className = classNames["TODO_ITEM"] // found syntax through trial and error in console
  var placeholderContent = document.createTextNode('New TODO item')
  todo.appendChild(placeholderContent)
  var target = document.getElementById('todo-list')
  target.appendChild(todo)

  currentCount += 1
  countElement.innerHTML = currentCount
  // TODO: Making it pretty - add checkbox to each el
  // TODO: Implement uncheckedCount and figure out how it's meant to be used.
  // Note: this is taking longer than I expected but it's quite different to the frontend I do at work.
  // Note: I'm impatient to get onto the React Native project.
  // Going to skip this bit and go onto project1 for React Native.
  // I'll come back if the React Native stuff seems too much or there are stumbling blocks.
  // Maybe ask for a code review e.g. in JS would this method be separated out into functions, 
  // is there a better approach to workflow than just docs and hacking through?
}
