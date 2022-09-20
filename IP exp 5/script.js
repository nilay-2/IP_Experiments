const readline = require("readline-sync"); // To take user input using node module

const factorial = (num) => {
  let fact = 1;
  for (let i = num; i > 0; i--) fact *= i;
  return fact;
};

const fibonacci = (num) => {
  let a = 0;
  let b = 1;
  const fib = [a, b];
  for (let i = 0; i < num - 2; i++) {
    let c = a + b;
    fib.push(c);
    // swap
    [a, b] = [b, c];
  }
  return fib;
};

console.log(
  "1. Find Factorial of a number\n2. Find the fibonacci series of first 'n' terms"
);
const choice = +readline.question("Enter your choice: ");

switch (choice) {
  case 1:
    // Factorial
    const num = +readline.question("Enter number: ");
    const fact = factorial(num);
    console.log(`Factorial of ${num}: ${fact}`);
    break;
  case 2:
    // Fibonacci
    const range = +readline.question("Enter the no. of terms for the series: ");
    const fib = fibonacci(range);
    console.log(
      `Fibonacci series of first ${range} terms: \n ${fib.join(" ")}`
    );
    break;
  default:
    console.log("Choose correct option");
    break;
}
