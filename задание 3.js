/*Дана строка. Необходимо вывести в консоль 
перевёрнутый вариант. Например, "Hello" -> "olleH".*/

var x = "Hello";
console.log(x.split("").reverse().join(""));

// или другой вариант

var x = "Hello";
var reversedX = x.split("").reverse().join("");
console.log(reversedX);
