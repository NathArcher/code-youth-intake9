// Variables Review
// Beginner Questions
// Question 1: Create a variable called firstName and set it to your first name
let myName = 'Nathan';
// Question 2: Create a variable called lastName and set it to your last name
let myLastName = 'Clement';
// Question 3: console.log() Both names together to say your name
console.log (myName +' '+ myLastName);

// Intermediate Questions
// Question 1: Create a variable called myNum. set it to 45
let myNum = 45;
// Question 2: divide the variable myNum by 5 and console.log() the result
console.log ('Variables - Question 2')
let divide = 45 / 5;
console.log (divide);

// For Loop Review
// Beginner questions
// Question 1: Create a for loop that counts up to 10 and log each number
console.log ('For Loop - Question 1')
for (let i=1;i <= 10; i++){
console.log (i)}

// Questions 2: Create a for loop that counts down from 10 and log each number
console.log ('For Loop - Question 2')
for (let i=10;i>=1; i--){
    console.log (i)
}
// Question 3: Create a for loop that logs "For loops are easy" 5 times
console.log ('For Loop - Question 3');
let f = 'For loops are easy'
for(let i=1;i<=5;i++){
    let text1= f;
    console.log (text1);
};


// Intermediate Questions
// Question 4: Create an array than in for loop, log out each item in it
console.log ('For Loop - Question 4');
let arr1 = [30,'seconds', 'later'];

for(let i=0;i<arr1.length;i++){

    console.log (arr1[i]);
};

// Question 5: Create a string than in a for loop, log out each character in it
console.log ('For Loop - Question 5');
let string1= 'this is fun';
for(let i=0;i<string1.length; i++){
    console.log (string1[i]);
};
// Question 6: Create an empty array, than fill it up with 5 items using a for loop
console.log ('For Loop - Question 5');
let arr2 = []
console.log (arr2)
for (let i=0;i<=5;i++){
    
    arr2.push(1,2,3,4,5)
    i=arr2
    console.log(i)
}


// If statement review
// Beginner Questions
// Question 1: Create an if statement that checks if a number is greater than another and log that it is or isn't
console.log ('If statement - Question 1')
n1=4
n2=10
if (n1>n2) {
    console.log (`${n1} is greater than${n2}`)}
else 
    {console.log (`${n2} is greater than ${n1}`)
}

// Question 2: Create an if statement that checks if a number is smaller than another and log that it is or isn't
console.log ('If statement - Question 2')
n3=15
n4=30

if (n3<n4) {
    console.log( `${n3} is smaller than ${n4}` )}

else
{console.log (`${n4} is smaller than ${n3}`)
}
// Question 2: Create an if statement that checks if a number is equal to another than log that it is or isn't
console.log ('If statement - Question 3')

n5 = 70;
n6 = 60;

if (n5 === n6){
    console.log ( `${n5} is equal to ${n6}`)}

else {console.log (`${n5} is not equal to ${n6}`)}


// Intermediate Questions
// Question 4: Create an if statment that checks if a password is longer than 7 characters (log either password accepted or password too short)
console.log ('If statement - Question 4')
let pswrd1 = 'wddwqsda'

if (pswrd1.length >= 7){
    console.log ( 'Password accepted')
}
else{console.log ('Password too short')}

// Question 5: Create an if statement that checks if an array named cart has less than 5 items (log please pay full amount or please remove items)
console.log ('If statement - Question 5')
let cart1 = ['eggs', 'milk', ' onions', 'bellpeppers']
// let cart2= ['vanilla ice cream', 'tumbler']
// cart1.push(...cart2);
if (cart1.length <= 5) {
console.log ('please pay full amount')
}
else {console.log ('please remove items')}
// Question 6: Create an if statement that checks a series of grades and logs A+ for 90-100, A for 80-90, B for 70-80, C for 60-70, and D for 50-60
console.log ('If statement - Question 6')
let grades = 60;

if (grades >= 90 && grades <=100){
    console.log ('A+')
}
else if (grades >=80 && grades <=90 ){
console.log('A')
}
else if (grades >=70 && grades <=80 ){
    console.log('B')
}else if (grades >=60 && grades <=70 ){
    console.log('C')
}else if (grades >=50 && grades <=60 ){
    console.log('D')}
else 
{console.log(F)}

// For Loops
// Question 1: Use for loop to count up to 10
console.log ('For loops - Question 1')
for( let i=10; i<=100; i+=10){
    console.log (i)
}
// Question 2: Use for loop to count down from 10
console.log ('For loops - Question 2')
for ( let i=10; i>=1; i--){
    console.log (i)
}
// Question 3: Use a loop to count up 10 and go up by 2
console.log ('For loops - Question 3')
for (let i=0; i<=10; i+=2){
    console.log (i)
}
// Question 4: Use a loop to count down from 10 and go down by 2
console.log ('For loops - Question 4')
for (let i=10; i>=0; i-=2){
    console.log (i)
}