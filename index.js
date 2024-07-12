/**
 * Linked List is a linear data structure where each element is a separate object called a node.
 * Each node contains data and a reference (or link) to the next node in the sequence.
 *
 * Time complexity:
 * append(value):   O(n)
 * prepend(value):  O(1)
 * getSize():       O(1)
 * getHead():       O(1)
 * getTail():       O(n)
 * at(index):       O(n)
 * pop():           O(n)
 * contains(value): O(n)
 * find(value):     O(n)
 * display():       O(n)
 * insertAt(value, index): O(n)
 * removeAt(index): O(n)
 *
 * Space complexity: O(n), where n is the number of elements in the linked list.
 */

// 1. Node:
// Each item in the list is called a node.
// A node has two parts:
//    Value: The actual data the node holds.
//    Next: A reference (or link) to the next node in the list.

// 2. Head:
// The head is a special node that marks the start of the list.
// If the list is empty, the head is null (meaning it doesn't point to any node).

const LinkedList = require("./LinkedList")
const list = new LinkedList()

list.append(10)
list.append(20)

list.display()

list.prepend(15)
list.prepend(25)
list.append(30)

list.display()

// console.log(`size: ${list.getSize()}\n`)
// console.log("fisrt node: ", list.getHead())
// console.log("last node: ", list.getTail())

// console.log("\n-------------------------\n")

// console.log("index 2: ", list.at(2))
// console.log("index 0: ", list.at(0))

list.pop()
list.pop()
list.display()

console.log(list.contains(15))
console.log(list.contains(10))

console.log(list.find(15))
