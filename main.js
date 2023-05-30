// YOUR CODE, HERE

// Step 1
// Create a function that takes a number as its only argument and returns true if it's greater than or equal to zero, otherwise return false.

const isGreaterThan = (number) => {
  if (number >= 0) {
    return true
  } else {
    return false
  }
}

// console.log("Step 1");
// console.log(isGreaterThan(5));
// console.log(isGreaterThan(-5));


// Step 2
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

const isDivisible = (number) => {
  if (number % 5 === 0) {
    return true
  } else {
    return false
  }
  
  // return number % 5 === 0
}
// console.log("Step 2");
// console.log(isDivisible(5));
// console.log(isDivisible(71));


// Step 3
// Create a function that given two strings, firstName and lastName, returns a single string in the format "lastName, firstName".

const formalName = (firstName, lastName) => {
  return `${lastName}, ${firstName}`
}

// console.log("Step 3");
// console.log(formalName("Kerrin", "Gillis"));


// Step 4
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

const addAllIntegers = (number) => {
  let total = 0
  for (let i = 1; i <= number; i++) {
    total += i
    // total = total + 1
  }
  return total
}

// console.log("Step 4");
// console.log(addAllIntegers(4));


// Step 5
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

const countCharacter = (singleCharacter, string) => {
  const lowerCaseString = string.toLowerCase()
  
  let counter = 0

  for (let i = 0; i <= string.length; i++) {
    if (lowerCaseString[i] === singleCharacter.toLowerCase()) {
      counter ++
    }
  }
  
  return counter
}

// console.log("Step 5");
// console.log(countCharacter("i", "Islay Mae"));



// Step 6
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

const sortArrayOfNumbers = (numberArray) => {
  return numberArray.sort((previousValue, currentValue) => previousValue - currentValue)
}


// console.log("Step 6");
// console.log(sortArrayOfNumbers([2, 13, 7, 43, 27]));


// Step 7
// Create a function that takes in a number and a name, and returns a new array filled with the name as elements as many times as the number entered.

const fillArray = (number, name) => {
  let nameArray = []
  for (let i = 1; i <= number; i++) {
    nameArray.push(name)
  }
  
  return nameArray
}

// console.log("Step 7");
// console.log(fillArray(3, "Fabio"));


// Step 8
// Create a function that takes an integer minutes and converts it to seconds.

const convertMinutesToSeconds = (minutes) => {
  return `${minutes * 60} seconds`
}

// console.log("Step 8");
// console.log(convertMinutesToSeconds(3));

// Step 9
// Create a function that takes an array as an argument and returns a new array containing the first AND last element.

const firstAndLast = (array) => {
  // Option 1: shift & pop (mutating)
  const newArray = []
  const firstElement = array.shift()
  const lastElement = array.pop()
  
  newArray.push(firstElement)
  newArray.push(lastElement)
  
  // Option 2: slice (non-mutating)
  // const newArray = firstElement.concat(lastElement)
  // const firstElement = array.slice(0, 1)
  // const lastElement = array.slice(-1)

  return newArray
}

// console.log("Step 9");
// console.log("results", firstAndLast(["duck", "duck", "quail", "goose"]));