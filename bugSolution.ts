function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

//The issue is not in these functions but how they are called, and what might happen when there are more overloads

let result1 = add(5, 3);
let result2 = subtract(10, 4);

console.log(result1, result2); // Output: 8 6