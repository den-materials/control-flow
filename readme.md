<!--
Creator: Alex White
Market: SF
Adapted By: Zeb Girouard
Market: DEN
-->
![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Mastering Control Flow

<!-- 11:15 5 minutes -->

<!--Hook: How do you know whether to bring a jacket to go out?  What about a rain jacket vs a warm coat?  If you have made this type of decision based on some condition, you have used "control flow".  And that's what we're talking about today.-->

## Why is this important?

*"Control flow" refers to the way our computers move through a program's code. Understanding control flow allows us to trace the flow of a program based on its code. This skill is essential for programming in every language and paradigm. In particular,* **conditionals** *and* **loops** *are fundamental to understanding modern programming languages.*

## What are the objectives?
*After this workshop, developers will be able to:*
- **Identify** and **discuss** boolean operators and truthiness
- **Use** nested `if` statements, ternary operators, and `while` loops
- **Use** the `break` keyword and `switch` statements.

## Where should we be now?
*Before this workshop, developers should already be able to:*
- **Create** basic `if else` conditionals
- **Create** basic `for` loops

<!--11:20 15 minutes -->

## Thruthiness vs Falsiness
*In programming something that* **evaluates** *to True is said to be truthy.*

*Something that* **evaluates** *to False is said to be falsy.*

Most things in JavaScript are *truthy*. In fact,
only the following become false when converted to a Boolean.

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

*Everything else in JavaScript is* **truthy** *!*

You can tell if something is truthy or not by prepending it with `!!` and running it in the console.
Why!?

### Exercise

*What do the following expressions evaluate to in the console?*

`!!1`

`!!"Hello"`

`!!NaN`

`!!undefined`

`!![]`

`!!{}`

<!--CFU: Stop-and-jot...THEN test -->

### `==` vs `===`
In JavaScript there are two operators used for comparison, `==` and `===`.
The distinction is simple. Triple-equals checks the *type* while double-equals does not.
Therefore:

```javascript
1 == '1' // returns true but...
1 === '1' // returns false.
```
**Question: What should programmers usually use?**

<!--11:35 5 minutes -->

### JavaScript Weirdness
Most of this is quite logical. These things work in an intuitive way, as they should.
However, things in JavaScript aren't always so logical...

<!--Start at JS ~1:10-1:15 -->

[WAT?](https://www.destroyallsoftware.com/talks/wat)

<!--11:40 15 minutes -->

### Nested If Statements

`if` statements can be nested infinitely!


Example:
```javascript
if(isRaining){
  if(!hasUmbrella){
    if(!hasRainCoat){
      callTaxi();
    };
  };
};
```

That doesn't mean you should nest so deep! More than two layers of `if / else` statement is probably a bad idea.

### Exercise

#### Can I ride?

Jimmy loves roller coasters, but there are a bunch of rules (ugh!) for riding. For starters, it costs 5 tokens. Check the following additional Requirements:
For starters, it costs 5 tokens. Here's how we might code that:

```javascript
var tokens = 3; // Jimmy's tokens

// Can he ride?
if ( tokens >= 5 ) {
    console.log("Step right up!");
} else {
    console.log("Sorry, you can't ride")
}
```

Edit the code above to check the following additional Requirements:

- Must be at least 4ft tall.
- Must be at least 12 years old.
- Replace the previous rule: now riders under 12 must be accompanied by an adult.
- If the boss isn't looking, you can sneak in!
- Riders with a park pass get in free.

<!--Let devs know you will merge solution.js back into master when class is ending -->

<!--11:55 5 minutes -->

## Advanced Control Flow

### Ternary Operator
You can think about the ternary operator as a concise "if-else in one line":
```javascript
isRaining ? callTaxi() : keepWalking();
```

### Exercise

Convert the following if-else statement into a ternary operator:

```javascript
if (tooTall) {
  duck();
}
else {
  standTall();
}
```

<!--12:00 5 minutes -->

### `while` loops

![Endless Doughnuts](http://img.pandawhale.com/78624-Homer-Simpson-infinite-donuts-P3EQ.gif)

__While doughnut, eat doughnut!__

In while loops, the initial setup happens before the loop. The continue condition goes inside the parentheses. The update expressions happen inside the loop.

```js
var donuts = 100; // setup:  Here we start with 100 donuts.
while (donuts > 0) { // continue condition: as long as there are still donuts...
  console.log("mmmmm... donut...");
  donuts -= 1; // update: subtract 1 from total
}
```

<!-- CFU: What will happen when I hit enter? -->

<!--12:05 10 minutes -->

### `for` loops

In for loops, the initial setup, continue condition, and update expressions happen inside the parentheses.

```js
for (donuts = 100; donuts > 0; donuts -= 1) {
  console.log("mmmmm... donut...");
}
```

<!-- CFU: What will happen when I hit enter? -->

### The `break` keyword

The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

#### Example:
The following function has a break statement that terminates the while loop when i is 3, and then returns the value 3 * x.
```javascript
function testBreak(x) {
  var i = 0;

  while (i < 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}
```
*-from MDN*

### `switch` statements
The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

#### Example:

In the following example, if expr evaluates to "Bananas", the program matches the value with case "Bananas" and executes the associated statement. When break is encountered, the program breaks out of switch. If break were omitted for "Bananas", the statement for case "Cherries" would also be executed.

```javascript
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}

console.log("Is there anything else you'd like?");
```

<!--12:15 10 minutes -->

### Exercise
Refactor the following conditional using a `switch` statement!
```javascript
if(joke.isFunny === 'yes'){
  laugh();
} else if (joke.isFunny === 'sort of'){
  chortle();
} else if (joke.isFunny === 'no'){
  stareBlankly();
};
```

<!--Merge solution.js back into master when work is wrapping up -->

## Resources

- More on [Ternary Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
