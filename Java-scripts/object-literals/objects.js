const person = {
    firstName: "Nazmul",
    lastName: "Alam",
    age: 31,
    hobbies: ["music", "cooking", "movie"],
    address: {
        house: "4/A",
        road: 10,
        area: "Shekhertek",
        Thana: "Adabor"
    }
}

console.log(person)
console.log(person.firstName)
console.log(person.firstName, person.age)
console.log(person.hobbies[2])
console.log(person.address.area)


person.email = "alam.mdnazmul@outlook.com"
console.log(person.email)