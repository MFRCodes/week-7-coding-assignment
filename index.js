// #1 I started off by declaring the ages that were provided with a let statement. The ages are the elements in the index and the first element is always counted as a 0.
// The final number in the index is found by subtracting the number 1 from ages.length. To find the difference between the first and last number
// in the index, I used const and declared difference as my operation. Then, I subtracted ages[0] aka 3 from ages[lastIndex] aka 93.
// I chose 50 as the new age to be pushed through the array. I then repeated the previous steps.
// As for the loop, the "let sum = 0" declares the variable. The variable known as "i", will start at 0. This "i < ages.length; i++)"" indicates that
// will keep looping if it's smaller than how long the ages are.
// This part "sum += ages[i];", will take the element at "i" and combine it with the sum of the variable. To find the average, I declared it and plugged in the previously declared parameters.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
const lastIndex = ages.length - 1;
const difference = ages[lastIndex] - ages[0];
console.log(difference);

let newAge = 50;
ages.push(newAge);

const newLastIndex = ages.length - 1;
const newDifference = ages[newLastIndex] - ages[0];
console.log(newDifference);

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
const average = sum / ages.length;
console.log(average);

// #2 I declared the names with a let statement and put the names that were provided in strings. Letters is then declared as a variable with a let statement.
// This "for (let i = 0; i < names.length; i++)", is a for loop which allows the code to run each name. To count the letters in all the names, I used this " letters = letters + names[i].length;", which takes the lenghth of 
// each name and adds them to the variable "letters". To find the average, I just declared it, and put the quotient symbol
// in between the variables being measured. This "let concatenatedNames = " ";", allows for spaces in between the names when printed.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

let letters = 0;
for (let i = 0; i < names.length; i++) {
    letters = letters + names[i].length;
    averageLettersPerName= letters / names.length;
}

console.log(averageLettersPerName);

let concatenatedNames = " ";

// #3 You declare the length of the array and then subtract 1. It's as follows "array.length - 1".

// #4 You declare the length of the array and then put "0" in brackets. It's as follows "array.length[0]".

// #5 I declare the variable with a let statement. The for loop will go through all the elements in the array known as names. 
// " nameLengths.push(names[i].length);", this is saying that the length of each name will be discovered and pushed to the array known as nameLengths.
// the result is printed via console.log.
let nameLengths = [];
for (let i = 0; i < nameLengths; i ++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// #6 I declared the variable "sumNames" using a let statement. I then used a for loop which is what iterates over the array. To get the sum
// I added the variable with nameLenghths which is what holds the length of each string. Console.log is used to print the results. 

let sumNames = 0
for (let i = 0; i < nameLengths.length; i++) {
    sumNames += nameLengths[i];
}
console.log(sumNames)

// #7 I named my function "myMessage" and used the provided parameters. I then declared "myMessage" as a variable with a  let statement
// open quotes so that my message would return as a string. I used a for loop to iterate over the array. I then used a const statement and console.log to
// produce the result I wanted which is "Good Morning" printed twice.
function myMessage (word, n) {
    let myMessage = "";
    for (let i = 0; i < n; i++) {

    }
    return myMessage;
}
const result = myMessage("Good Morning", 2);
console.log(result);

// #8 I named the function fullName and used the given parameters. I then used a return statement to bring about how I want
// the full name to appear. The quotation marks in between the two parameters allows for a space to appear in between said parameters
// once the code is printed. I used console.log to print my first and last name. 
function fullName (firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("Marie", "Rousseau"));

// #9 I named my function and then used a const statement to declare "sum" as the variable. 
//  This section "const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);", 
// adds up what's in the "numbers" array via the reduce method. This section "return sum > 100;", is what allows "true"
// to be printed if the sum of the numbers is greater than 100. I then use const statements to name each array and plugged in
// the below chosen numbers. Lastly, I used console.log to print my desired results. 

function sumOfMyNumbers(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum > 100;

}
const numbersArray2 = [26, 37, 68, 94];
const numbersArray3 = [44, 71, 80];
console.log(sumOfMyNumbers(numbersArray2));
console.log(sumOfMyNumbers(numbersArray3));

// #10 I named my function "findAverage". I then declared "sum" as my variable. I then used a for loop to iterate over the array. 
// I used a return statement to divide the sum of the numbers by the length of the array. That's what gives the average. I chose a random 
// set of numbers and used console.log to print the results. 
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i <arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
const arr = [7, 2, 19, 30, 17];
console.log(findAverage(arr));


// #11 I named my function and then my arrays. I then used the reduce method to get the average of each array. 
// The elements in each array is added up and then divided by the lenghth of each array. 
// I then used a return statement to print true if the average of the first array is greater than the average of the second array. 
// I declared the numbers in each array and then used console.log to print the results. 

function comparisonOfAverage(array4, array5) {
    const averageArray4 = array4.reduce((sum, num) => sum + num, 0) / array4.length;
    const averageArray5 = array4.reduce((sum, num) => sum + num, 0) / array5.length;

    return averageArray4 > averageArray5;

}
const array4 = [34, 26, 6, 9];
const array5 = [55, 17, 13, 9];

const result = comparisonOfAverage(array4, array5);
console.log(result);

// #12 I named my function and parameters as provided in the instructions. I used a return statement and a logical "AND" operator to return 
// "true" if both conditions are met. I then used const statements to declare my variables. I used console.log to print my results.

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;

}

const todayIsHot = true;
const myMoney = 46.27;


const result = willBuyDrink(todayIsHot, myMoney);
console.log(result);


// #13 I decided to create a function that calculates the number of letters in my first and last name. It's something I've always been curious about.
// I started off by naming my function and then declared each variable. I used a return statement to calculate the amount of letters in my name.
// I then used const statements to name the function with my name and to calculate the results. I used console.log to print the results. 
// There is an error in this code's syntax and I can't figure out what it is. Instead of printing my desired result which should be 13, 
// "undefined" gets printed.

function countLettersInFull(name) {
    const justLetters = name.replace(/[^a-zA-Z ]/g, '');
    const amountOfLetters = justLetters.length;
    return amountOfLetters;
}

const name = "Marie Rousseau";
const result = countLettersInFull(name);
console.log(`My name "${name}" is ${result} letters long.`);

