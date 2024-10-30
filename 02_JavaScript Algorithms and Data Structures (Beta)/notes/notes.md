### metods with array:

array[number]  
returns the value in the number index  
array start from 0
you can use : array[array.lenght -1]
to acces the last element

array.lenght
Returns the size of the array

array.push(value)
adds a value at the end of the array
return the size of the array


array.pop()
removes the las element of an array
return the element removed


-------------------------------------
Using let lets you change the value of a variable

conts
is for constants
you can change their values and you have to initialize them
```
cont my_const = 12;  ok
cons my_const;    -> not ok
```

you can reassign their values
```js
cont my_const = 2;
my_const = 3;   -> not ok
```

---
### LOOPS

to repeat task until a condition is met we use LOOPS

####for loop 
```javascript
for (iterator; condition; iteration){
    logic
}
```
iterator = a variable that controls how the loops iterate
usually `let i = 0`
the iteration start at `0`

```javascript
for (let i = 0; condition; iteration){
    logic
}
```

condition - tells the loop how many times will iterate
it will work while the condition is true
if count is less than 4, it will continue looping

```javascript
for (let i = 0; 1 < 4; iteration){
    logic
}
```

iteration - will the what todo in each iteration loop
usually adding a value.
this will add 1 to `i` in each iteration until i in not less than count anymore
```javascript
for (let i = 0; 1 < 4; i = i +1){
    logic
}
```

example

```javascript
let count = 8
for (let i = 0; i < count; i = i + 1) {
  console.log(i)
}
```
this will print
```javascript
0
1
2
3
4
5
6
7

```
---
#### for ... of loop

this will  loop trough each value in the iterable and assign to `value`,  
```javascript
for const value of iterable{

}
```
example
```javascript
let rows  = [1, 2, 3, 4, 5 , 6]
for (const row of rows){
    console.log(row)
}
```
``javascript
1
2
3
4
5
6

```

---

### Concatenation

adding strings to another strings
```javascript
let saludo = "hello"
saludo = saludo + "world"

console.log(saludo)
> hello world
```

it exist special characters to
example
```javascript
"\n"
> counts as a new line
```
```javascript
let saludo = "hello"
saludo = saludo + "\n" + "world"

console.log(saludo)
> hello 
> world
```

## String methods

`.repeat(value)`
lets you repat value times a string
```javascript
console.log("a".repeat(2))
> aa

let name= "paco"
console.log(name.repeat(3))
> pacopacopaco
```

---
### functions

funtions are block of code for repetitive tasks

```javascript
function name(parameter){

}
```
name -> nmae of your function
parameter -> variable passed to you function, that you can use inside it

To use the function you need to call it
```javascript
function test() {

}

test(); // calling your test function

```

Examples

functions return values
those values can be assigned to a variable
then log the returned value
```javascript
function padRow() {

}


const call = padRow(); 
console.log(call);
> undefined
```

it returns `undefined` because there is not return in the function

```javascript
function demo() {
  return "Functions are cool!";
}

// this will return a string now
```

```javascript
function padRow() {
  return "Hello!"

}

const call = padRow();
console.log(call);
> Hello!
```

---
TO passs a variable to the funtion we use parameters

```javascript
function demo(name) {

}

// name is a variable we can use inside the funciton
```

Now instead of returning a fixed value "hello!"
we can return the parameter value, which we can change

```javascript
function padRow(name) {
  return name;
}


```

Examples

```javascript
function demo(name) {
  return name;
}
demo("Naomi")

console.lo

// here we pass a value to name inside the function call 
```

```javascript
function padRow(name) {
  return name;
}

const call = padRow("paco");

console.log(call);
> paco
```

example:
Declare a sum variable and assign it the value of calling your addTwoNumbers function with 5 and 10 as the arguments. Log the sum variable to the console.
```javascript
function addTwoNumbers(a, b){
  return a + b
}

let sum = addTwoNumbers(5, 10)
console.log(sum)

```

----
----
## Scope

A variable can only be used in the scope it was declared

```javascript
// this is the global scope
let a;

{
    // a can be used here

    let b;

}
// b can not be used here
//because b is a separe block of code {}
a block of code could be a funciton a loop

```

```javascript
{
    let a;
    // I can use a here
}

{
    // I cant use a here
}
```

```javascript
function padRow(name) {
  const test = "Testing";
  return character + name;
}

console.log(test)
> ReferenceError: test is not defined
// test is declared in a local scope the funtion scope
// and can only be accesed inside that funciont
```

If you want to use the variable out side its scope you can return the value
```javascript

function padRow(name) {
  const test = "Testing";  
  return test
}
```

---
---
Remeber that the return in a function stops the function
so, all the code after the return will not run

```javascript
function padRow(name) {
  const test = "Testing";
  
  return test;
  console.log("This doesn't works!")
  
}
```

```javascript
function padRow(name) {
  const test = "Testing";
  console.log("This works!")
  return test;
  
  
}
```

It is possible to pass full expression as an argument

// this 2 function call are the same
```javascript
test(2 * 3 + 1);

test(7);
```

---
---

there are operators for commont uses

this 2 expresions are the same.
all add 1 to test
```javascript
test = test + 1;
test += 1;
test ++
```
---
---
### Comments

To add acomment we use //
or /* ... */

```javascript
// I am a single line Comments
// I dont run or execute

/*
I am a multi line
Comments
everythin inside is a
comment

*/
```

---
---
## if statement

AN if statement lets you run a block of code only when a condition is true
```javascript
if (condition) {
  logic
}

if(true){
  console.log("Condition is true")
}
> Condition is true


if (false) {
  console.log("Condition is true");
}
// now the condition is not true so the block will not execute
```


```javascript
if ("false") {
  console.log("Condition is true");
}
> Condition is true
```
The text has appeared again! This is because "false" is a string, which when evaluated to a boolean becomes true. This means "false" is a truthy value

falsy values:
false, 0, "", null, undefined, and NaN.

everything else is truthy when evaluated to a boolean

---
# if else

if else statement lets you have multiple condition

```javascript
if (condition1) {
  // code to run if condition1 is true
} else if (condition2) {
  // code to run if condition2 is true
} else if (condition3) {
  // code to run if condition3 is true
} 
```

if the condition is false it will go to the next condition until one of them is true

```javascript
if ("") {
  console.log("Condition is true");
} else if ( 5 < 10){
   console.log("5 is less than 10")
}
>5 is less than 10
```

you can add an else, that will execute the nothing is true

```javascript
if (condition) {
  // this code will run if condition is true
} else if (condition2) {
  // this code will run if the first condition is false
} else {
  // this code will run 
  // if the first and second conditions are false
}
```

notice that all conditions are false

```javascript
if ("") {
  console.log("Condition is true");
} else if (5 > 10) {
  console.log("5 is less than 10");
}else{
  console.log("This is the else block")
```

---
---
## While loop

A while loop will run until the condition is no longer true

```javascript
while (condition) {
  logic;
}
```