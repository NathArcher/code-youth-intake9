// create an object student with properties:
let student ={
id: 87023802,
Name: 'John Doe',
Address:{
City:'Sydney',
State:'NSW',
Country:'Australia',
},
email:'john.doe@gmail.com',
phone :12345676890,
Marks:[60,75,89,99,64],
Course: 'Hospitality',
Hobbies:['cooking','drawing','biking', 'gymnastics'],
};
console.log (`student ${student.Name} with ID: ${student.id} from ${student.Address.City}, ${student.Address.State} got ${student.Marks[0]} marks in the first subject of their ${student.Course} course and is interested in these hobbies ${student.Hobbies}`)
// in string form display:
// student John with id(1) and country(US) got (45) marks in first subject and is interested in these things
//count total number of student properties
let count = 0;
for (let key in student) {
  count++;
  console.log(key, student[key]);
}
console.log(`Total number of properties: ${count}`);

// - The Recipe Card

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

console.log ('Favourite Recipe');
let recipe = {
    Recipe: 'Yorkshire Puddings',
    PrepTime: '10 minutes',
    CookTime: '30 minutes',
    TotalTime: '40 minutes',
    Servings: 12,
    Ingredients: [
       '3 eggs',
       '1 cup milk',
       '1 cup all-purpose flour',
       '2 tablespoons butter',
    ],
  };
  
  for (let key in recipe) {
    console.log(key + ': ' + recipe[key]);
  }
  
  for (let key in recipe.Ingredients) {
    console.log(recipe.Ingredients[key]);
  }

// - The Reading List
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
let library = [ 
{
 title: 'The Road Ahead',
 author: 'Bill Gates',
 readingStatus: true
},
{
 title: 'Steve Jobs',
 author: 'Walter Isaacson',
 readingStatus: true
},
{
 title: 'Mockingjay: The Final Book of The Hunger Games',
 author: 'Suzanne Collins',
 readingStatus: false
}];

console.log('Library Books:');
library.forEach((book) => {
    console.log (`${book.title} by ${book.author}`)
    if (book.readingStatus) {
        console.log (`You already read ${book.title} by ${book.author}`) 
    }
    else 
    {console.log (`You still need to read ${book.title} by ${book.author}`)}
});

console.log('Star Wars Characters Questions');
// * Get characters with mass greater than 100
// * Get characters with height less than 200
// * Get all male characters
const characters = [
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: 202,
      mass: 136,
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: 150,
      mass: 49,
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: 188,
      mass: 84,
      eye_color: "blue",
      gender: "male",
    },
  ];

  let largeMass = characters.filter(char => char.mass > 100);
  console.log(`These characters have a mass greater than 100: ${largeMass.map(char => char.name)}`);
  
  let smallHeight = characters.filter(char => char.height < 200);
  console.log(`These characters have a height less than 200: ${smallHeight.map(char => char.name)}`);
  
  let maleChars = characters.filter(char => char.gender === "male");
  console.log(`These characters are all male: ${maleChars.map(char => char.name)}`);

