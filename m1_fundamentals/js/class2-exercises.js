let num1=4
let num2=6
let num3=7
let num4=9
let addition= num1+num2+num3+num4
let average= addition / 4
console.log ('the average of 4, 6, 7, 9 is',average)

let a=10
let b=4
if (a > b){
    console.log('a is greater')
}
else if (a<b) { console.log ('b is greater')}
else {console.log ('a equals b')}

if(a>5 && b>5){
    console.log ('both greater than 5')
}
else {console.log("less than 5")}

let dow='Friday';
if (dow=='monday'|| dow=='tuesday' || dow=='wednesday'|| dow=='thursday'||dow=='friday'){
    console.log ('its a weekday') ;
}
else if (dow=='saturday'||dow=='sunday'){
    console.log ('its the weekend');
};
// 1. find the greater of three numbers

let d=4; 
let e=6; 
let f=10;
if (d>e && d > f) {
    console.log ( 'd is greater')}

if (e>d && e>f) {console.log( 'e is greater')}
if (f>d && f>e) {console.log( 'f is greater')};

//2. even or odd
{let g=25;
if (g % 2 == 0)
 console.log('this number is even')

else console.log ('this number is odd')}

//3. postive, negative or zero
{let h=-4
if (h>=0)
console.log('this number is positive')
else 
console.log('this number is negative')
}

//4. check leap year
{let year=2023
    if ((year % 400) == 0)
    console.log ('2023 is a leap year')
    else if ((year % 100)==0)
    console.log ('2023 is not a leap year')
    else if ((year % 4)==0)
    console.log ('2023 is a leap year')
    else 
    console.log ('2023 is not a leap year')
}

//5. divisible by 5 or 11
{let I=}

//6. check whether a character is vowel or consonant
{let j='f'
if (j == 'a' || j == 'e' || j =="i" || j == 'o' || j == 'u')
console.log ('this is a vowel')
else ('this is a consonant')
}
//7. find no. of days in a month
{ let january=1
    let february=number prompt('what year is it?')
    let march= 3
    let april=4
    let may=5
    let june=6
    let july=7
    let august=8
    let september=9
    let october=10
    let  november=11
    let december=12
    let month=prompt ('enter the month you were born')
    if (month == 4 || month== 6 || month ==9 || month == 11)
    console.log ("days in", month, "equals 30")
    else if (month == 2 )
    console.log ('days in' , month , 'equals 28')
    else 
    console.log ('days in', month , 'equals 31')
    
}
//8. if no. divisible by 3, print three, if divisible by 5 print five, if by both 3 and 5, print threefive
//9. read temperature in centigrade and display a suitable message according to temperature state below : 
//Temp < 0 then Freezing weather
//Temp 0-10 then Very Cold weather
//Temp 10-20 then Cold weather
//Temp 20-30 then Normal in Temp
//Temp 30-40 then Its Hot
//Temp >=40 then Its Very Hot
