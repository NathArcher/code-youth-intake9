
//1. Find cube using functions
function num(a)
    {
        cube=a*a*a*a
        console.log (a,'cubed is', cube)
    }
    num(4)

//2. Diameter & area of circle using functions   pi=3.142
function circle (radius)
{
    const pi=3.142;
    let area=pi*radius*radius
    console.log ('area of a circle with a radius',radius, 'is', area)
}
circle(5)

//3. swap two numbers using function
function swapNumbers(x, y) {
    let temp = x;
    x = y;
    y = temp;
    console.log('After swapping: x =',x , 'y = ', y);
  }

//4. program to find the value of one number raised to the power of another using functions. 
function number (a){
    let x = 2;
    let powerOf = a**x;
    console.log (a,'to the power of 2 is', powerOf)
}
number(4);


//5. Functions to perform various arithmetic operations.
function number (a){
    let percent = 0.3 * a
    console.log ('30 percent of', a, 'is', percent)
    
}
number(500)

function average (a, b, c, d) {
    let average = a+b+c+d/4
    console.log ('The average of',a,b,c,d, 'is', average)
}
average (5,10,30,4)

//calculator
function input (num1,calculate, num2){
    switch (calculate){
    case '+': result = num1 + num2;
                console.log (num1, '+', num2, '=', result );
        break;
    case '-': result = num1 - num2;
                console.log (num1, '-', num2, '=', result );
        break; 
    case '*': result = num1 * num2;
                console.log (num1, '*', num2, '=', result );
        break;
    case '/': result = num1 / num2;
                console.log (num1, '/', num2, '=', result );
        break;
    default: console.log ('Invalid answer');
    break;}
}
input (5,'+',4);
input (10, '-', 2);
input (5,'*', 5);
input (10,'/',2);
input();
    
