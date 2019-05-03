class Set {
  constructor(arr) { // method constructor takes a single argument - some sort of array or list
    this.arr = arr // attaches the array to the instance
    // only thing done on set object creation is attaching this array to the instance
    // Can access it with this.arr - where this refers to the instance of the class.

    add(val) {
      if (!this.has(val) this.arr.push(val))
    }

    delete(val) {
      this.arr = this.arr.filter(x => x !== val)
      // if (this.has(val)) this.arr.pop(val)
    }

    has(val) {
      return this.arr.includes(val)
    }

    // This syntax means, when somebody tries to get at this property 'size',
    // actually run this function.
    get size() {

    }
  }
}

const s = new Set([1,2,3,4,5])

// trying to add the same value should not work.
s.add(1)
s.add(1)
s.add(1)
console.log('s should have 5 members and actually has: ', s.size)

console.log('s should contain 5: ', s.has(5))
