// Declare a global counter variable
let globalCounter = 0;

// Create a simple function that increments the variable, and then calls itself recursively.
function incrementAndCall() {
    globalCounter++;
    console.log(globalCounter);
    incrementAndCall();
  }

// Surrond the initial function call in a try/catch block
  function incrementAndCall() {
    try {
      globalCounter++;
      console.log(globalCounter);
      incrementAndCall();
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Call the function initially
  incrementAndCall();

// Within the catch, log the error and the value of the counter variable
  function incrementAndCall() {
    try {
      globalCounter++;
      console.log(globalCounter);
      incrementAndCall();
    } catch (error) {
      console.error("Error:", error);
      console.log("Counter value:", globalCounter);
    }
  }
  
  // Call the function initially
  incrementAndCall();

// Part 2: Trampolines
// * Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
  function flattenArray(arr) {
    const trampoline = fn => {
      return (...args) => {
        let result = fn(...args);
        while (typeof result === 'function') {
          result = result();
        }
        return result;
      };
    };
  
    const flattenHelper = (arr, result = []) => {
      if (arr.length === 0) {
        return result;
      }
      const [first, ...rest] = arr;
      if (Array.isArray(first)) {
        return () => flattenHelper([...first, ...rest], result);
      } else {
        return () => flattenHelper(rest, [...result, first]);
      }
    };
  
    const trampolineFlatten = trampoline(flattenHelper);
    return trampolineFlatten(arr);
  }
  
  // Ex:
  const nestedArray = [1, [2, [3, 4], 5], 6];
  const flattenedArray = flattenArray(nestedArray);
  console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// Part 3: Defered Execution  
const primeNumbersElement = document.getElementById('primeNumbers');

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function addPrimeNumbers(n) {
  let primeNumbersList = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primeNumbersList.push(i);
    }
  }
  primeNumbersElement.textContent = primeNumbersList.join(', ');
}

addPrimeNumbers(10000);
alert('Calculation is finished!');

// Modify function so each number has an opportunity to render
const primeNumbersElement = document.getElementById('primeNumbers');

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function addPrimeNumbers(n, current = 2) {
  if (current <= n) {
    if (isPrime(current)) {
      primeNumbersElement.textContent += `${current}, `;
    }
    setTimeout(() => addPrimeNumbers(n, current + 1), 0);
  } else {
    alert('Calculation is finished!');
  }
}

addPrimeNumbers(10000);
  