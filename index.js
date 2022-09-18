'use strict';

//#1 Для решения задач данного блока вам понадобятся следующие методы: concat.
//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

console.log(arr3)
*/ 
//#2 Для решения задач данного блока вам понадобятся следующие методы: reverse.
//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
/*
const arr1 = [1, 2, 3];
arr1.reverse();

console.log(arr1);
*/
//#3 Для решения задач данного блока вам понадобятся следующие методы: push, unshift.
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
//push
/*
const arr1 = [1, 2, 3];
const arr2 = arr1.push(4, 5, 6);

console.log(arr1);
console.log(arr2);

Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
//unshift
const arr1 = [1, 2, 3];
arr1.unshift(4, 5, 6);

console.log(arr1)
*/
//#4 Для решения задач данного блока вам понадобятся следующие методы: shift, pop.
// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
//shift
/*
const arr1 = ['js', 'css', 'jq'];
console.log(arr1);

let shifted = arr1.shift();
console.log(shifted);

//Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его .
//pop
const arr1 = ['js', 'css', 'jq'];
console.log(arr1);

let popped = arr1.pop();
console.log(arr1);
console.log(popped);
*/

//#5 Для решения задач данного блока вам понадобятся следующие методы: slice.
//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
/*
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
const arr2 = arr1.slice(0, 3);
console.log(arr2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
const arr2 = arr1.slice(-2);
console.log(arr2);
*/

//#6 Для решения задач данного блока вам понадобятся следующие методы: splice.

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
/*
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
arr1.splice(1, 2);
console.log(arr1);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
const arr2 = arr1.splice(1, 3);
console.log(arr2);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
arr1.splice(3, 0, 'a', 'b', 'c');
console.log(arr1);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
arr1.splice(1, 4, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
console.log(arr1);

//#7 Для решения задач данного блока вам понадобятся следующие методы: sort.
// Дан массив [3, 4, 1, 12, 7]. Отсортируйте его.

const arr1 = [3, 4, 1, 12, 7];
console.log(arr1);
arr1.sort(function(a, b) {
  return a - b;
});
console.log(arr1);
*/
//#8 Для решения задач данного блока вам понадобятся следующие методы: forEach
//Дан массив со следующими объектами внутри:  					
//{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,} 		Для каждого элемента выведите сообщение в консоль типа “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет”
/*
const arr1 = [
{firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',},
{firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},
{firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},
{firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',}
]

arr1.forEach(element => console.log(`Пользователь ${element.firstName} ${element.lastName} является ${element.gender} и ему сейчас ${element.age} лет`));
*/

//#9 Для решения задач данного блока вам понадобятся следующие методы: map
//Дан массив со следующими объектами внутри:  					
//{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},	{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}		Создайте новый массив на основании старого массива, добавив каждому пользователю в новом массиве свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение).
/*
const arr1 = [
  {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',}, 			{firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		{firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},	{firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',}	
];
console.log(arr1);

const arr2 = arr1.map(function func(element, index) {
  return {
    firstName: element.firstName,
    lastName: element.lastName',
    age: element.age,
    gender: element.gender,
    telephoneNumber: element.telephoneNumber,
    telephoneNumber: 380123456789,
  };
});
console.log(arr2);
*/

//#10 Для решения задач данного блока вам понадобятся следующие методы: filter
// Дан массив со следующими объектами внутри:  					
//{firstName: ‘Test’, lastName: ’Testovich’, age: 27, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,},		{firstName: ‘Undefined’, lastName: ’Undefinovich’, age: 99},			{firstName: ‘Null’, lastName: ’Nullovich’, gender: ‘male’}			
//	Создайте новый массив на основании старого массива, в котором будут только те совершеннолетние пользователи, у которых будет определенный пол.
/*
const arr1 = [
  {firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male',}, 			{firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		{firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		{firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',},		{firstName: 'Undefined', lastName: 'Undefinovich', age: 99},	
  {firstName: 'Null', lastName: 'Nullovich', gender: 'male'},	
];

const filtered = arr1.filter(function func(element){
  return element.gender === 'female' && element.age >= 18;
});
console.log(filtered);
*/

// #11 Для решения задач данного блока вам понадобятся следующие методы: flat
// Дан следующий массив [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]]. Создайте новый массив на основании старого массива, в котором не будет вложенных массивов.
/*
 const arr1 = [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]];

 const arr2 = arr1.flat(Infinity);
 console.log(arr2);
 */