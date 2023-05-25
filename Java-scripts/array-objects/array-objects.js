const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Take out trash2',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Take out trash3',
        isCompleted: false,
    },
]

console.log(todos[1].text)

// Convert this as JSON file

const todosJSON = JSON.stringify(todos)
console.log(todosJSON)