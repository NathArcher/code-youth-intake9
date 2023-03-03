// Define a function called ageCalculator. This function should take 3 parameters:
// name – a string representing someone's name
// yearOfBirth – a number representing their year of birth
// currentYear – a number representing the current year
// The ageCalculator function should return a string explaining how old the person is. For example, if we called ageCalculator("Suzie", 1983, 2015);, the return value should be as follows.
// 5:40
// "Suzie is 32 years old."
console.log ('use a age calculator to determine age with year of birth and current year')
//create a function called ageCalculator w/ parameters for name,yearOfBirth,currentYear
function ageCalculator (name,yearOfBirth,currentYear){
//let the age equal the currentYear minus the yearOfBirth
let age = currentYear-yearOfBirth
console.log (`${name} is ${age} years old`)
}
//define the name/yearOfBirth/currentYear
ageCalculator ('John',1992,2023)


// Given an array of numbers, find the two largest numbers in that array, and sum them together.
console.log ('Sum of two largest numbers in an array')
//create a function to sort the number array and add the two largest numbers
function sumTwoLargestNumbers(arr1) {
  //sort the numbers in the array in descending order with the largest first
  arr1.sort((a, b) => b - a);
  //add the first two numbers in the array
  return arr1[0] + arr1[1];
}
//define array numbers
let num1 = [20, 30, 65, 4, 29, 72];
let result = sumTwoLargestNumbers(num1);
console.log(result);

// 2. Sum of largest and smallest number inn array
console.log ('Sum of largest and smallest numbers in an array')
function sumLargestAndSmallest(arr2) {
  arr2.sort((a, b) => a - b);
  //add the first number of the array and the last number of the array
  return arr2[0] + arr2[arr2.length - 1];
}

const result2 = sumLargestAndSmallest(num1);
console.log(result2);

//count the number of vowels that appear in a given string
console.log ('count the number of vowels that appear in a given string')
let string = 'javascript'

function countStringVowels (string) {
// create two varaibles vowelCount which will keep track of the number of vowels in the string as through a for loop and vowels which consists of an array of vowels
let vowelCount=0;
let vowels = ['a','e','i','o','u'];
// use a for loop to iterate through each character in the string.
for (let i = 0; i<string.length; i++) {

if (vowels.includes(string[i].toLowerCase())) {
  // For each character, check whether it is a vowel by using the includes method of the vowels array to check whether the lowercase version of the character is included in the array. If it is a vowel, increment the vowelCount variable.
  vowelCount++;
  }
}
  console.log (`number of vowels in ${string} is : ${vowelCount}`);
}
// countStringVowels function with the input string string as an argument, which logs the result to the console.
countStringVowels(string);

// Define a function called range
//   The function takes 3 integer parameters: start, end, and step.
//   The function should return an array of numbers from start to end counting by step.
// For example:
// codeoutputrange(0, 10, 2);[ 0, 2, 4, 6, 8, 10 ]range(10, 30, 5);[ 10, 15, 20, 25, 30 ]range(-5, 2, 3);[ -5, -2, 1 ]
// The function should return an empty array [] if given incorrect parameters, such as:
//   start, end, or step being undefined
//   start being greater than end
// step being 0, or negative
function range (start,end,step){
  if (start === undefined || end === undefined || step === undefined) {
    return [];
}
if (step <= 0 || start > end ) {
return [];
}
let result = [];
for (let i = start; i<=end; i+=step){
  result.push(i);
}
return result;
}
let codeOutputRange1 = range (0,10,2)
console.log (codeOutputRange1)
let codeOutputRange2 = range (10,30,5)
console.log (codeOutputRange2)
let codeOutputRange3 =  range (-5,2,3)
console.log (codeOutputRange3)

// Given an array of objects representing TV Shows, we want to create new arrays:
// 1. One including only the titles of the shows
// 2. One including objects that include only the title and the rating properties
// 3. One including only the titles of the shows, but:
//   If the rating is greater or equal to 9, we put the title in upper case.
//   Else, we make the title lower case.
// (hint:You can create these 3 arrays using the map method)
// 4. One including only the TV Shows that were watched ({ watched: true }) filter
// 5. One including only the TV Shows that have a rating greater or equal to 9 filter
// 6. One including only the TV Shows that were first published before 2015 filter
// (hint:You can create these 3 arrays using the filter method)

// Data:const tvShows = [

//     {
  
//       title: 'True Detective',
  
//       publishingYear: 2014,
  
//       rating: 9,
  
//       watched: false,
  
//     },
  
//     {
  
//       title: 'The Boys',
  
//       publishingYear: 2019,
  
//       rating: 8.7,
  
//       watched: true,
  
//     },
  
//     {
  
//       title: 'Game of Thrones',
  
//       publishingYear: 2011,
  
//       rating: 9.3,
  
//       watched: true,
  
//     },
  
//     {
  
//       title: 'Mr. Robot',
  
//       publishingYear: 2015,
  
//       rating: 8.5,
  
//       watched: false,
  
//     },
  
//     {
  
//       title: 'Chernobyl',
  
//       publishingYear: 2019,
  
//       rating: 9.4,
  
//       watched: true,
  
//     },
  
//     {
  
//       title: 'Money Heist',
  
//       publishingYear: 2017,
  
//       rating: 8.3,
  
//       watched: true,
  
//     },
  
//     {
  
//       title: 'Dark',
  
//       publishingYear: 2017,
  
//       rating: 8.8,
  
//       watched: false,
  
//     },
  
//   ];