/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp

// What’s Wrong? .. This line is missing a closing quote.");
// Fix: Add a closing quote to the string.
console.log("Welcome to the bootcamp");
// This error is a syntax error because the string is not properly closed.


// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// What’s Wrong? .. The array contains a string that cannot be multiplied by a number.
// Fix: Filter out non-numeric values before performing the multiplication.
// this error is a syntax error because the code attempts to perform an operation on a non-numeric value.
// Fixing the runtime error by filtering out non-numeric values

let numbers = [numbers.filter(num => typeof num === 'number');
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}




// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong? .. The logic in the function is incorrect.
// Fix: Change the return value in the if condition to false when num is divisible by i.
// This error is a logic error because the function does not correctly determine if a number is prime.
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Corrected to indicate num is NOT prime
    }
  }
  return true; // Corrected to indicate num IS prime
}
