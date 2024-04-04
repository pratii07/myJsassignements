// 1. Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
// const input = require('readline-sync')
// const a = parseInt(input.question().split(',').map(Number))
// const b = parseInt(input.question().split(',').map(Number))
// console.log('sum =', a+b);
// console.log('difference =', a-b);
// console.log('product =', a*b);
// console.log('quotient =', a/b);
// console.log('modulus =', a%b);

// 2. Take two numbers and only print the integer part when a is divided by b.
// const input = require('readline-sync')
// const [a,b] = input.question('enter: ').split(',').map(Number)
// console.log(Math.floor(a/b));


// 3. Take two numbers a,b and print the exponential power of the first number raised by the second.
// const input = require('readline-sync')
// const [a,b] = input.question('enter: ').split(',').map(Number)
// let e=1;
// for(let i=0;i<b;i++){
//     e=e*a
// }
// console.log(e)

// 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.
// const input = require('readline-sync')
// const [a,b] = input.question('enter: ').split(',').map(Number)
// let ans=a/b;
// let re=ans%1
// console.log(re)

// 5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.
// const input = require('readline-sync')
// const [A,B,C,D,E] = input.question().split(',').map(Number)
// let average= A+B+C+D+E;
// console.log(average/5);

// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.
// const input = require('readline-sync')
// const [a,b] = input.question('enter: ').split(',').map(Number)
// if(a<b){
//     console.log('profit = ',b-a)
// }
// else{
//     console.log('No Profit.')
// }

// 7. Take a number and print out the last digit of the number.
// const input = require('readline-sync')
// const a = input.question('enter: ').split(',').map(Number)
// let ans=a%10;
// console.log('last number is ',ans);

// 8. Take a 2 digit number and return the first and last digits.
// const input = require('readline-sync')
// const a = input.question('enter: ').split(',').map(Number)
// let first= Math.floor(a/10);
// console.log('first number is ',first);
// let ans=a%10;
// console.log('last number is ',ans);

// 9. Write a JavaScript program to find the largest of three numbers.
// const input = require('readline-sync')
// const [a,b,c] = input.question('enter: ').split(',').map(Number)
// console.log(Math.max(a,b,c))

//10. Write a JavaScript program to check whether a number is even or odd.
//  const input = require('readline-sync')
// const a = input.question('enter: ').split(',').map(Number)
// if(a%2==0){
//     console.log('It is Even.');
// }
// else{
//     console.log('It is Odd.')
// }
// 11. Write a JavaScript program to check whether a given number is prime or not.
// const input = require('readline-sync')
// const a = input.question('enter: ').split(',').map(Number)
// function prime(a){
//     if(a<=1){
//         return false;
//     }
//     for(let i=2;i<a/2;i++){
//         if(a%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// if(prime(a)){
//     console.log('it is prime number.')
// }
// else{
//     console.log('it is not prime number.')
// }
// 12. Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa.
function celtofah(Celsius){
    let Fahrenheit = (Celsius * 9/5) + 32;
    return Fahrenheit;
}

function fahtocel(Fahrenheit){
    let Celsius = (Fahrenheit - 32) * 5/9;
    return Celsius;
}

let celsiusTemp = 25;
let fahrenheitTemp = celtofah(celsiusTemp);
console.log(fahrenheitTemp,'°F');

let fahrenheitTemp2 = 98.6;
let celsiusTemp2 = fahtocel(fahrenheitTemp2);
console.log(celsiusTemp2, '°C')
