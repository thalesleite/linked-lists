const Node = require("./Node")

// class / factory, which will represent the full list
class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // append(value) adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.nextNode !== null) {
        current = current.nextNode
      }
      current.nextNode = newNode
    }
    this.size++
  }

  // prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      newNode.nextNode = this.head
      this.head = newNode
    }
    this.size++
  }
  // size returns the total number of nodes in the list
  size() {
    return this.size
  }

  // head returns the first node in the list
  // tail returns the last node in the list
  // at(index) returns the node at the given index
  // pop removes the last element from the list
  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  // find(value) returns the index of the node containing value, or null if not found.
  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null
  display() {
    let current = this.head
    let result = ""
    while (current !== null) {
      result += current.value + " -> "
      current = current.nextNode
    }
    console.log(result + "null")
  }
  // ** Extra credit **
  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  // removeAt(index) that removes the node at the given index.
}

module.exports = LinkedList
