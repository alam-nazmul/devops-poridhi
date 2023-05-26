const x = 11
const color = x > 10 ? "red" : "blue"

switch(color)
{
    case "red":
        console.log("Color is red")
        break
    case "blue":
        console.log("Color is blue")
        break
    default:
        console.log("Color is not blue or not red")
        break
}