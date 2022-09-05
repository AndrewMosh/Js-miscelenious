/*Дан произвольный массив. Необходимо вывести количество элементов массива, 
затем перебрать его и вывести в консоль каждый элемент массива. */
var x = [1, 3, 5, "Hello", true, false, "Good bye"];
console.log("В массиве " + x.length + " элементов");
var mapX = x.map(function (item, index, array) {
  console.log(item);
});
