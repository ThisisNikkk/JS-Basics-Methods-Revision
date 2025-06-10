// //Write a function to extract all unique skills from the array.

// const users = [
//   {name: "John", age: 25, skills: ["JS", "React"]},
//   {name: "Jane", age: 30, skills: ["HTML", "CSS"]},
//   {name: "Mike", age: 28, skills: ["Node", "JS"]}
// ];

// const res = [...new Set(users.flatMap(users => users.skills))]
// console.log(res)

const data = [
  {
    name :"Nikhil",
    age : 21,
  },
  {
    name:"Aayush",
    age : 20,
  }
]

function sortByName(){
  return data.sort((a,b) => a.name.localeCompare(b.name))
}
function sortByAge(){
  return data.sort((a,b) => b.age - a.age)
}

console.log(sortByName(data));
console.log(sortByAge(data));