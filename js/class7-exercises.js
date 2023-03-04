//Square numbers in an array using map method 
let numbers = [1, 2, 3, 4, 5];

squares = numbers.map((numbers) => numbers**2);

console.log ('square of each element: ', squares);

//Filter numbers that are negative out of an array that contains positive and negative numbers
let numbers2 = [-2, 5, 6, -8, 10, -3, -1];

let negatives = numbers2.filter(num => num < 0);

console.log(negatives);

//find the sum of positive numbers in an array that has positive and negative numbers using reduce
let numbers3 = [-2, 5, 6, -8, 10, -3, -1];
let positivesN =numbers3.filter((posN) => posN>0)
let sum = positivesN.reduce((accumulator, current) => accumulator+current, 0);

console.log('sum of positive numbers is ', sum);

//1.capitalize each string of the array
let colours = ['red','blue','green','yellow','black','white'];

capitalizeStr = colours.map(colour => colour.toUpperCase());

console.log(capitalizeStr);

//2. Given an array of movies, iterate over them using the forEach method of the array type and console.log         every movie in the array preceded by an ascending number.
let movies = ['Devil wears Prada','Happy Feet','Finding Nemo', 'Tangled','Polar Express']

movies.forEach ((movie, index) =>{ 
    
    console.log (index +1, '. ', movie);

});

//3.find the length of each word of the array
let wordLengths = colours.map(colourw => colourw.length);
console.log (wordLengths);

// 4. Round an array of numbers 10.5, 23.5   Math.floor   Math.ceil
let numbers7 = [10.5,23.5,13.6,58.7,91.3]; 
roundNum= numbers7.map ((num) => {
return Math.ceil (num);

}) ;

console.log (roundNum);

// 5. Display only odd numbers from an array
let numbers8 = [5,3,10,24,92,81,60]

let oddNumbers = numbers8.filter (oddNum => oddNum %2 !== 0) 

console.log (oddNumbers)

// 6. Find the product of odd elements in an array
oddSum = oddNumbers.reduce((total,current) => total+current);
console.log (oddSum)


// 7. Find the sum of squares of an array


// 8. Capitalize first letter of each word in an array



