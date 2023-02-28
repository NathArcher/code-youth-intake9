
    let cube = (a) => a*a*a 
    console.log (cube(4))

    //let fname= (a) => {return 'Hello',fname (Nathan)}



    //arrays
    //literal method
    let marks = [25,50,75,100]
    //create an array w/value later
    let arr =[];
    arr[0]=10;
    arr[1]=20;
    arr[4]=40;
    console.log(arr);

    //constructor metod
    let arr1=new Array (10,20,30,40,50);
    console.log(arr1);
    
    //array side: marks.length
    //console.log ("data array size",data.length);

    //colors array
    let Colors = ["red","cyan","green","black","white","blue"];
   console.log ("first element",Colors[0]);
   console.log ("fourth Element", Colors [3]);
   console.log ('array size', Colors.length);
   console.log("last element", Colors[Colors.length-1]);
   console.log ("all the colors within this array are:", Colors);

// Ex: using arrow functions:
// 1. return greater of 2 numbers
// if (d>e && d > f) {
//     console.log ( 'd is greater')}
// let numbers = (a,b) => b=b-a, a=a-b
// console.log ('the greater of 4 and 5 is:', numbers(4,5))


//2. return average of 4 numbers
let average= (a,b,c,d) => a+b+c+d/4
console.log ('average of 5,10,15,20 is',average(5,10,15,20) )

//whats 30 percent of 500
let num=(a)=> 0.3*a
console.log ('30% of 500 is:', num(500))

//3. check if leap year or not , return true/false
let leapY = (year) => year%4 == 0
console.log ('is this a leap year?', leapY(2023) )

//Ex: using arrays
//1. read n number of values in an array and display it in reverse order.

//2. sum and average of marks
let scores=[28,30,80,98,63,40]
for (let i=0;i<=5;i++){
    sum=scores [0] + scores[1] + scores[2] + scores[3] + scores[4] + scores [5]
    ave=sum/5
}
console.log ('the sum of all scores is', sum)
console.log ('the average of all scores is', ave)
//let sum = scores [0] + scores[1] + scores[2] + scores[3] + scores[4] + scores [5]
//let ave = (scores [0] + scores[1] + scores[2] + scores[3] + scores[4] + scores [5])/6


//3. to count total number of even and odd elements in an array.

//4. to print all negative elements in an array.
//make array numbers
//set index
//sort into negatives and positive numbers
//print negative numbers

let num5 = [-4,-10,-15,20,30,40];
function negative (num5){
for (let i=0;i<=num5.length;i++){
if (num5[i]<=0)
   { console.log ('negative numbers:', num5 [i] );}
   
}}
negative (num5)
//5. search an element in array

let arr9 =[4,10,30,'one','two','three']
const number=4
function search (number, arr9){
for (let i=0;i<=arr9.length;i++){
if (arr9 [i]=number)
return i;
}
else 
{console.log ('error')}
    
}

// //6. copy the elements of one array into another array. 
// let arr4 = [-4,-10,-15,20,30,40]
// let arr5 = [10,20,30,40,50]
//7. find the smallest element in an array.