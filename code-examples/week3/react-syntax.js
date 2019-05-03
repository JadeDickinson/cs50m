// React, props and state

// This week - classes. From ES6, classes simplify the definition of complex
// objects that have their own prototypes.
// Have 2 different things - classes & instances
// Here, a Class is an abstract thing you can declare saying:
// - any of these objects you create will have these methods associated with them
// e..g Date
 // When you go from an abstract concept of a class to an instance of that object, it's called an instance.
// e.g. d = Date.new

// Terminology (noticing quite similar to Java from PiJ)
// What is a method and what can it be called on?
// - methods - a function that can be invoked on any of the instances. Think of them as functions on the classes prototype
// What is a static method and what can it be called on?
// - static methods - a method that cares about all instances of the class, rather than a single instance
// e.g. in Date.now(), .now() is a static method
// by contrast, d.toString() is called on an instance, and cares what instance you're attached so, so therefore that's a method.

// What else is there?
// Well, properties are like functions, but rather than being functions, they're secretly just values.
// What are properties associated with?
// A particular instance of a class

// What is a constructor?
// Something you define within a class, that says, when you create a new class invoke this method such that you create a new instance of a class.

// Example including Set
// What is a Set?
// A list data structure that supports add, delete, inclusion methods, but doesn't support duplicate items within the set. Much like a mathematical set.
// What would an inclusion method check?
// It checks, 'Does this list have a particular value?'
// You can also check a set's size.
// -> Set.js
