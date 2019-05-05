// How extends is used to take the native implementation of
// Set class and add some stuff to it:
class MySet extends Set {
  constructor(arr) {
    super(arr)
    this.originalArray = arr
  }

  add(val) {
    super.add(val)
  }
}
