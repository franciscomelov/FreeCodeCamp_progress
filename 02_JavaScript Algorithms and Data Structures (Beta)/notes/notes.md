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
```