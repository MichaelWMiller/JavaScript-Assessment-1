// //1. What is the lenth of the following contacts array?

// var contacts = [];
// console.log("contacts.length = " + contacts.length)

// //2. Add the following people to the contacts array.

// var jake = {
//     name: 'Jake Overall',
//     email: 'jake.overall@boisecodeworks.com',
//     title: 'founder'
// };
// var matt = {
//     name: 'Matt Overall',
//     email: 'matt.overall@boisecodeworks.com',
//     title: 'founder'
// };

// var tony = {
//     name: 'Mark Ohnsman',
//     email: 'mark@boisecodeworks.com',
//     title: 'instructor'
// };
// var andrew = {
//     name: 'Darryl Kilzer',
//     email: 'darryl@boisecodeworks.com',
//     title: 'instructor'
// };
// var tom = {
//     name: 'Tom Day',
//     email: 'tom@boisecodeworks.com',
//     title: 'instructor'
// };

// contacts.push(jake, matt, tony, andrew, tom);


// //3. Woops after adding all of those people to the same contacts 
// //list you realized you need a list just the instructors. Create a new 
// //variable named instructors populate it using contacts array.


// var instructors = contacts.filter(function(obj) {
//     return obj.title = 'instructor;'
// })
// console.log(instructors)

// function findAllPeopleWithTitle(arr, title) {
//     var out = []
//     title = title.toLowerCase()
//     for (let i = 0; i < arr.length; i++) {
//         var person = arr[i];
//         if (person.title.toLowerCase == title) {
//             out.push(person)
//         }
//     }
//     return out
// }