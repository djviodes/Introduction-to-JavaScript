/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 17;

if(votingAge > 18){
    console.log('true');
} else {
    console.log('false');
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let age = 24;

age = age * 2;

console.log(age);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


console.log(parseInt("1999"));


//Task d: Write a function to multiply a*b 

function multiply(a,b){
    return a * b;
}

console.log(multiply(2,3));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age){
    return age * 7;
}

console.log(dogYears(24));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function food(pounds, age){
    if (age >= 1){
        if (pounds <= 5){
            return pounds * .05;
        } else if (pounds >= 6 && pounds <= 10){
            return pounds * .04;
        } else if (pounds >= 11 && pounds <= 15){
            return pounds * .03;
        } else {
            return pounds * .02;
        }
    } else {
        if (age >= .167 && age < .333){
            return pounds * .1;
        } else if (age >= .333 && age < .583){
            return pounds * .05;
        } else {
            return pounds * .04;
        }
    }
}

console.log(food(15, 1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

 let computerPlay = Math.floor(Math.random() * 3);

 let computerChoice = computerPlay
  
 function roeShamBoe(computerChoice, userChoice){
    if (computerChoice === 2 && userChoice === 2){
        return 'It is a tie! Try again.';
    } else if (computerChoice === 2 && userChoice === 1){
        return 'You lose... Scissors beats Paper.';
    } else if (computerChoice === 2 && userChoice === 0){
        return 'You WIN! Rock beats Scissors.';
    } else if (computerChoice === 1 && userChoice === 2){
        return 'You WIN! Scissors beats Paper.';
    } else if (computerChoice === 1 && userChoice === 1){
        return 'It is a tie! Try again.';
    } else if (computerChoice === 1 && userChoice === 0){
        return 'You lose... Paper beats Rock';
    } else if (computerChoice === 0 && userChoice === 2){
        return 'You lose... Rock beats Scissors';
    } else if (computerChoice === 0 && userChoice === 1){
        return 'You WIN! Paper beats Rock.';
    } else if (computerChoice === 0 && userChoice === 0){
        return 'It is a tie! Try again.';
    } else {
        return 'This should have never happened. Please try again.'
    }
 }

 console.log(roeShamBoe(computerChoice, 2));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function metricConverter(kilometers){
    return kilometers * 0.621371;
}

console.log(metricConverter(5));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCm(feet){
    return feet * 30.48;
}

console.log(feetToCm(5));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(num){
    for(i = 99; i > 0; i--){
        console.log(i + ' bottles of soda on the wall, ' + i + ' bottles of soda, take one down, pass it around, you got ' + (i - 1) + ' bottles of soda on the wall.');
    }
}

console.log(annoyingSong(99));

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grades(num){
    if (num >= 90){
        return 'A';
    } else if (num < 90 && num >= 80){
        return 'B';
    } else if (num < 80 && num >= 70){
        return 'C';
    } else if (num < 70 && num >= 60){
        return 'D';
    } else {
        return 'F';
    }
}

console.log(grades(95));  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

const vowels = ['a', 'e', 'i', 'o', 'u'];

function vowelCount(string){
    let counter = 0;
    for (let letter of string.toLowerCase()){
        if (vowels.includes(letter)){
            counter++
        }
    }
    console.log(`The text contains ${counter} vowel(s)`);
    return counter;
}

vowelCount('The quick fox jumped over the lazy brown dog.');

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

let computerPlay2 = Math.floor(Math.random() * 3);

let computerChoice2 = computerPlay2

let userChoice2 = prompt('Enter your Choice!').toLowerCase();

console.log(computerChoice2, userChoice2);

function roeShamBoe(computerChoice2, userChoice2){
    if(userChoice2 == 'rock'){
        userChoice2 = 0;
    } else if (userChoice2 == 'paper'){
        userChoice2 = 1;
    } else if (userChoice2 == 'scissors'){
        userChoice2 = 2;
    } else {
        console.log('Do you even know how to play Rock, Paper, Scissors?');
    }
    if (computerChoice2 === 2 && userChoice2 === 2){
        return 'It is a tie! Try again.';
    } else if (computerChoice2 === 2 && userChoice2 === 1){
        return 'You lose... Scissors beats Paper.';
    } else if (computerChoice2 === 2 && userChoice2 === 0){
        return 'You WIN! Rock beats Scissors.';
    } else if (computerChoice2 === 1 && userChoice2 === 2){
        return 'You WIN! Scissors beats Paper.';
    } else if (computerChoice2 === 1 && userChoice2 === 1){
        return 'It is a tie! Try again.';
    } else if (computerChoice2 === 1 && userChoice2 === 0){
        return 'You lose... Paper beats Rock';
    } else if (computerChoice2 === 0 && userChoice2 === 2){
        return 'You lose... Rock beats Scissors';
    } else if (computerChoice2 === 0 && userChoice2 === 1){
        return 'You WIN! Paper beats Rock.';
    } else if (computerChoice2 === 0 && userChoice2 === 0){
        return 'It is a tie! Try again.';
    } else {
        return 'This should have never happened. Please try again.';
    }
}

console.log(roeShamBoe(computerChoice2, userChoice2));


