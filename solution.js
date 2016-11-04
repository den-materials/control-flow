var tokens = 3; // Jimmy's tokens
var height; // Jimmy's height in feet

// Can he ride?
if ( tokens >= 5 && height >= 4) {
    console.log("Step right up!");
} else {
    console.log("Sorry, you can't ride.");
};

// Must be at least 12 years old.

var tokens = 3; // Jimmy's tokens
var height; // Jimmy's height in feet
var age; // Jimmy's age in years

// Can he ride?
if ( tokens >= 5 && height >= 4 && age >=12) {
    console.log("Step right up!");
} else {
    console.log("Sorry, you can't ride.");
};

// Replace the previous rule: now riders under 12 must be accompanied by an adult.

var tokens = 3; // Jimmy's tokens
var height;   // Jimmy's height in feet
var age;    // Jimmy's age in years
var hasAdult;   // bool - does Jimmy have an adult?

// Can he ride?
if ( tokens >= 5 && height >= 4 ) {
  if (age >= 12 || hasAdult){
      console.log("Step right up!");
  } else {
    console.log("Sorry, you can't ride.");
  };
} else {
    console.log("Sorry, you can't ride.");
};

// If the boss isn't looking, you can sneak in!

var tokens = 3; // Jimmy's tokens
var height;   // Jimmy's height in feet
var age;    // Jimmy's age in years
var hasAdult;   // bool - does Jimmy have an adult?
var isLooking;  // bool - is the boss looking?

// Can he ride?
if (!isLooking){
  console.log("Step right up!");
} else {
  if ( tokens >= 5 && height >= 4 ) {
    if (age >= 12 || hasAdult){
        console.log("Step right up!");
    } else {
      console.log("Sorry, you can't ride.");
    };
  } else {
      console.log("Sorry, you can't ride.");
  };
};

// Riders with a park pass get in free.

var tokens = 3; // Jimmy's tokens
var height;   // Jimmy's height in feet
var age;    // Jimmy's age in years
var hasAdult;   // bool - does Jimmy have an adult?
var isLooking;  // bool - is the boss looking?
var hasPass;  // bool - does Jimmy have a park pass?

// Can he ride?
if (!isLooking){
  console.log("Step right up!");
} else {
  if ( (tokens >= 5 || hasPass) && height >= 4 ) {
    if (age >= 12 || hasAdult){
        console.log("Step right up!");
    } else {
      console.log("Sorry, you can't ride.");
    };
  } else {
      console.log("Sorry, you can't ride.");
  };
};

// More Advanced Solution:

var bossIsLooking = false;
var height = 48;
var tokens = 10;
var age = 11;
var accompanied = true;

if (!bossIsLooking) {
    console.log("Step Right Up!")
} else if (tokens > 5) {
    if (height >= 48) {
        if (age >= 12 || accompanied) {
            console.log("Step Right Up!")
            tokens = tokens - 5;
        } else {
            console.log("Sorry, too young!")
        };
    } else {
        console.log("Sorry, too short!")
    };
} else {
    console.log("Sorry, not enough tokens.")
};


// -------------------------------------

// joke conditional refectored using switch
switch (joke.isFunny) {
  case "yes":
    laugh();
    break;
  case "sort of":
    chortle();
    break;
  case "no":
    stareBlankly();
    break;
};
