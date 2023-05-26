const x = 10
const y = 5

if (x === 10)
{
    console.log('x is 10')
}
else if (x > 10)
{
    console.log('x is greater than 10')
}
else
{
    console.log('x is less than 10')
}


// OR condition

if (x < 10 || y === 5)
{
    console.log("x is less than 10 OR y is greater than 5")
}

// AND condition

if (x === 10 && y === 5)
{
    console.log("x is equal to 10 AND y is equal to 5")
}


// Advance syntext condition

const color = x > 10 ? "red" : "blue"
console.log(color)
