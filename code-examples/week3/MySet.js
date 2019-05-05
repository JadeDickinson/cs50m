// How extends is used to take the native implementation of
// Set class and add some stuff to it:
class MySet extends Set {
  constructor(arr) {
    // Super keyword allows us to refer to the original class:
    super(arr) // run the original set's constructor
    this.originalArray = arr // this.originalArray is the array (arr) passed in as a parameter
  }

  add(val) {
    super.add(val)
    // super refers to the X, so when
    // we use super.add it goes ahead and
    // uses the native implementation of the add() method
    console.log(`added ${val} to the set!`)
    // interpolation: notice the use of backtick-quoted string aka template literals
  }

  toArray() {
    return Array.from(this)
  }

  reset() {
    return new MySet(this.originalArray)
  }
}
