# Project 0

The goal of this project is to practice JavaScript and its paradigms by creating
a TODO app. This app should be able to add TODOs and track the number of total
TODOs as well as the number of unchecked TODOs.

## Instructions
Inside of [index.html](/index.html), you'll find some starter HTML. You shouldn't
need to edit this file at all. Open this file on your computer into any browser
to run the project. Make sure that [script.js](/script.js) and [styles.css](/styles.css)
are in the same local directory. With the file open in your browser, you should
see a `New TODO` button, which `alert`s when clicked. Your goal will be to get
this button to create new TODOs.

[
  Notes
  Display TODOs in page? Yes, should be within 'todo-list' element which is an unordered list.
  Should a TODO have text?
  Creation should update item-count
  If item-count is 0, disable deletion
  https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  Empty out to reassign https://plainjs.com/javascript/manipulation/empty-an-elements-content-34/
]

Inside [styles.css](/styles.css), you'll find some pre-written CSS for your
convenience. You shouldn't need to edit this file at all, but feel free to if
desired.

[script.js](/script.js) is where most of your work will be done. There is some
starter code for you in the file. The `classNames` variable can be used to link
any elements you create in js with the associated CSS class names. The next 3
lines of code are the HTML elements that you'll need to update when creating new
TODOs. Lastly, you'll see the `addTodo()` function. This gets executed when
creating a new TODO. You should replace the `alert()` call with logic to create
new TODOs.

Good luck!

## Challenge! (Not Required)
If you finish early and are up for a challenge, try adding delete functionality.
This should be in the form of a button within each TODO that removes that TODO
when clicked.
