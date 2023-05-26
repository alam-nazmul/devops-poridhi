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


for(let i = 0; i < 10; i++)
{
    console.log(`For loop number: ${i}`)
}



for (let todo of todos)
{
    console.log(todo.isCompleted)
}