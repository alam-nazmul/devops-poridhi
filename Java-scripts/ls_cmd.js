const testdir = "/home/nirr/github/devops-poridhi/Java-scripts/"
const fs = require("fs")

const fileList = fs.readdirSync(testdir)

for ( let i = 0; i < fileList.leangth; i++ )
{
    let elements = fileList[i]
    console.log(elements)
}