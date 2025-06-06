//Write a function to extract all unique skills from the array.

const users = [
  {name: "John", age: 25, skills: ["JS", "React"]},
  {name: "Jane", age: 30, skills: ["HTML", "CSS"]},
  {name: "Mike", age: 28, skills: ["Node", "JS"]}
];

const res = [...new Set(users.flatMap(users => users.skills))]
console.log(res)