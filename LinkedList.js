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
  getSize() {
    return this.size
  }

  // head returns the first node in the list
  getHead() {
    return this.head
  }

  // tail returns the last node in the list
  getTail() {
    let current = this.head
    while (current.nextNode !== null) {
      current = current.nextNode
    }
    return current
  }

  // at(index) returns the node at the given index
  at(index) {
    if (index < 0 || index >= this.size) return null

    let current = this.head
    let currentIndex = 0

    while (currentIndex < index) {
      current = current.nextNode
      currentIndex++
    }

    return current
  }

  // pop removes the last element from the list
  pop() {
    // empty list
    if (this.head === null) return

    // one element list
    if (this.head.nextNode === null) {
      this.head = null
      this.size--
    } else {
      // more than one elements in the list
      let current = this.head
      let previous = null

      while (current.nextNode !== null) {
        previous = current
        current = current.nextNode
      }

      previous.nextNode = null
      this.size--
    }
  }

  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let current = this.head

    while (current !== null) {
      if (current.value === value) {
        return true
      }
      current = current.nextNode
    }

    return false
  }

  // find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    let current = this.head
    let currentIndex = 0

    while (current !== null) {
      // currentIndex < index
      if (current.value === value) {
        return currentIndex
      }
      current = current.nextNode
      currentIndex++
    }

    return null
  }

  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null
  display() {
    let current = this.head
    let result = ""
    while (current !== null) {
      result += current.value + " -> "
      current = current.nextNode
    }
    console.log(result + "null\n")
  }
  // ** Extra credit **
  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  // removeAt(index) that removes the node at the given index.
}

module.exports = LinkedList
