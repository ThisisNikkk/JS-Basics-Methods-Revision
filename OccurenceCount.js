const arr = [1, 2, 2, 3, 1, 4];

const count = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log(count); // Output: {1: 2, 2: 2, 3: 1, 4: 1}
