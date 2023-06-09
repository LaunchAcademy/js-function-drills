## Getting Started

From your challenges folder, type the following command:

```no-highlight
et get javascript-function-drills
cd javascript-function-drills
code .
```

For Mac users

```no-highlight
open index.html
```

For PC users

```no-highlight
start index.html
```

All your work should be done in the provided `main.js` file.

### Instructions

The series of challenges below ask you to write a function that solves the problem. Use your new knowledge of JavaScript functions to complete them.

#### Tips

You should expect to use built-in functions such as `.push`, `.pop`, `.shift`, `.split`, and `.sort` in this exercise.

We suggest that you focus on using a `.forEach()` or `for` loop for drills that require iteration. For an extra challenge, you can use more advanced built-in JavaScript methods, such as `.reduce` and `.filter` to solve some of the steps.

### Step 1

Create a function that takes a number as its only argument and returns true if it's greater than or equal to zero, otherwise return false.

```js
myFunction(5)
// => true
myFunction(-5)
// => false
```

### Step 2

Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

```js
myFunction(5)
// => true
myFunction(71)
// => false
```

### Step 3

Create a function that given two strings, firstName and lastName, returns a single string in the format "lastName, firstName".

```js
myFunction("Islay", "Mae")
// => "Mae, Islay"
myFunction("Fred", "Rogers")
// => "Rogers, Fred"
```

### Step 4

Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

```js
myFunction(3)
// => 6
```

### Step 5

Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

```js
myFunction("a", "Islay Mae")
// => 2
myFunction("x", "Geoffrey")
// => 0
```

### Step 6

Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

```js
myFunction([2, 13, 7, 43, 27])
// => [ 2, 7, 13, 27, 43 ]
```

### Step 7

Create a function that takes in a number and a name, and returns a new array filled with the name as elements as many times as the number entered.

```js
myFunction(3, "Mae")
// => ["Mae", "Mae", "Mae"]
```

### Step 8

Create a function that takes an integer `minutes` and converts it to seconds.

```js
myFunction(3)
// => 180 seconds
```

### Step 9

Create a function that takes an array as an argument and returns a new array containing the first AND last element.

```js
myFunction(["duck", "duck", "quail", "goose"])
// => ["duck", "goose"]
myFunction([2, 4, 6, 8, 10])
// => [2, 10]
```

### Step 10

Create your own function challenge! Based on the problems above, create a new challenge and submit 2 potential solutions.
