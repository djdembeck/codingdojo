// Practice iterating through an array of objects/dictionaries.

var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

for (let i = 0; i < users.length; i++) {
    console.log (users[i].name + " - " + users[i].age);
}