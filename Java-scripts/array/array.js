const fruits = ["Mango", "Banana", "Orange"]

// add another fruit at position 3
fruits[3] = "Coco"

// Push a fruit as a last one
fruits.push("Licche")

// Push an element at position 1
fruits.unshift(2900)

// Remove the last fruit name
fruits.pop()


// Boolean condition
console.log(Array.isArray(fruits))

// Check the array with boolean
console.log(Array.isArray("Mango"))

// Check the position
console.log(fruits.indexOf("Mango"))

// Show the output
console.log(fruits)