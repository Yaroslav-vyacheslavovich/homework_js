

// Homework2

//Задание 1

//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2 т.к. инкремент имеет префиксную форму, то сначала выполняется сложение т.е. а+1 = 2
//d = b++; alert(d);           // 1 2 т.к. инкремент имеет постфиксную форму, то сначала выполняется выводим b=1, а потом уже прибавляем  1
//c = (2 + ++a); alert(c);      // 5 переменная а из предыдущей строки равна двум, т.о. а=2+1 c=(2+3)=5
//d = (2 + b++); alert(d);      // 4 переменная b из предыдущей строки равна двум, икремент с постфиксной формой, получаем d=2+2=4, а потом b=2+1 = 3
//alert(a);                    // 3 
//alert(b);                    // 3

//Задание 2

//var a = 2;
//var x = 1 + (a *= 2);  // x = 5

//Задание 3

// var a = +prompt("Введите любое целое число");
// var b = +prompt("Введите любое целое число");

// if (a >= 0 && b >= 0) {
//     alert(a - b);
// }
// else if (a < 0 && b < 0) {
//     alert(a * b);
// }
// else {
//     alert(a + b);
// }

//Задание 4

// var a = +((Math.random() * 14).toFixed(0));
// alert(a);
// switch (a) {
//     case 0:
//         console.log(a);
//         a++;
//     case 1:
//         console.log(a);
//         a++;
//     case 2:
//         console.log(a);
//         a++;
//     case 3:
//         console.log(a);
//         a++;
//     case 4:
//         console.log(a);
//         a++;
//     case 5:
//         console.log(a);
//         a++;
//     case 6:
//         console.log(a);
//         a++;
//     case 7:
//         console.log(a);
//         a++;
//     case 8:
//         console.log(a);
//         a++;
//     case 9:
//         console.log(a);
//         a++;
//     case 10:
//         console.log(a);
//         a++;
//     case 11:
//         console.log(a);
//         a++;
//     case 12:
//         console.log(a);
//         a++;
//     case 13:
//         console.log(a);
//         a++;
//     case 14:
//         console.log(a);
//         a++;
//     case 15:
//         console.log(a);
//         break;
// }

//Задание 5

// function sum(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     return a - b;
// }
// function mult(a, b) {
//     return a * b;
// }
// function dif(a, b) {
//     return a / b;
// }

//Задание 6

// var a = +prompt("Введите любое целое число");
// var b = +prompt("Введите любое целое число");

// switch (true) {
//     case (a >= 0 && b >= 0):
//         var operation = sub;
//         break;
//     case (a < 0 && b < 0):
//         var operation = mult;
//         break;
//     default:
//         var operation = sum;
//         break;
// }

// function mathOperation(a, b, operation) {
//     return operation(a, b);
// }
// var c = mathOperation(a, b, operation);
// alert(c);

//Задание 8

// var val = +prompt("Введите любое целое число");
// var pow = +prompt("Введите любое целое число");
// var x = val
// function power(pow, val) {
//     if (pow == 1) {
//         alert(val);
//         return;
//     }
//     power((pow - 1), (val * x));
// }
// var c = power(pow, val);

