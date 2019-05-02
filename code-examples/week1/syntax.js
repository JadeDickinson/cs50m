const firstName = "Jade":
const lastName = 'Dickinson'
// string literal - in JS either single quotes or double quotes are fine. Also,
// the semi-colon at the end of an expression is optional.
// https://stackoverflow.com/questions/418799/what-does-colon-do-in-javascript
const val =  42
const arr = ['teaching', 42, true, function() {
console.log('hi') }];

const arr2 = [
  'string',
  42,
  function() { console.log('hi') }
]

arr2[2]()

// hi I'm a comment
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Types
// Dynamic typing
// Primitive types (no methods, immutable)
  // undefined / null / boolean / number / string / (symbol??)
// Objects

// Typecasting vs coercion in JavaScript
// Explicit vs. Implicit coercion
const x = 42;
const explicit = String(x);	// explicit === "42"
const implicit = x + "";		// implicit === "42"

// == vs. ===
// // == coerces the types
// // === requires equivalent types
console.log(typeof x)
console.log(typeof null) // object

const o2 = []
o.firstName = 'Jordan'
o['lastName'] = 'Hayashi'
const key = 'isTeaching'
o[key] = true
o['greet'] = function() {
  console.log('hi!')
}
// put everything inline
const o3 = {
  firstName: 'Jordan',
  lastName: 'Hayashi',
  isTeaching: true,
  greet: function() {
    console.log('hi!')
  }
}
// got bored, skipped ahead to first React video
