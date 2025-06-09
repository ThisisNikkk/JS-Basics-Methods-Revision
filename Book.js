/*
     let array = [
{name:”Ana”,age:21,books:[“Harry potter”,”Bible”,”Romeo & Juliet”]},
{name:”Anil”,age:21,books:[“Bhagwat Geeta”,”Ramayana”,”War and peace”]},
{name:”Hitesh”,age:21,books:[“Harry potter”,”The shining”,”The lord of rings”]}
]
need all books array (It should be unique)
*/

let array = [
  {name: "Ana", age: 21, books: ["Harry potter", "Bible", "Romeo & Juliet"]},
  {name: "Anil", age: 21, books: ["Bhagwat Geeta", "Ramayana", "War and peace"]},
  {name: "Hitesh", age: 21, books: ["Harry potter", "The shining", "The lord of rings"]}
];

const uniqueBook = [...new Set(array.flatMap(user => user.books))]
console.log(uniqueBook)