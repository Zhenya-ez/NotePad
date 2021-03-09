// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let userName = prompt('Введіть ім"я');
let userSurname = prompt('По-батькові');
let age = prompt('Ваш вік');

document.write(`Вітаю ${userName} ${userSurname}. Тобі ${age} років`);   //все пробелы учитываются

// - За допомогою prompt() отримати 3 числа. Привести їх до числа. Вивести їх в консоль.
let number1 = +prompt('Введіть номер 1');   //знак + перед prompt приводит значение в число
let number2 = +prompt('Введіть номер 2');
let number3 = +prompt('Введіть номер 3');
console.log(number1, number2, number3);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх. Просумувати їх між собою. Результат вивести в консоль.
let float1 = prompt('enter float');
let number1 = parseFloat(float1);   //получить число с плавающей точкой, например 1.5
let round1 = Math.round(number1);   //Math.round - округляет число

let float2 = prompt('enter float');
let number2 = parseFloat(float2);
let round2 = Math.round(number2);

let float3 = prompt('enter float');
let number3 = parseFloat(float3);
let round3 = Math.round(number3);
console.log(round1 + round2 + round3);

// - За допомогою prompt() отримати 2 цілих числа.
// Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
// За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25 
let number = prompt('number');
let pow = prompt('pow');
let result = Math.pow(number, pow);   //Math.pow - возвышение в степень
console.log(result);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a, b, c);   //typeof определяет тип оператора

// У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
let n = 3;
let m = 4;
let l = Math.pow(n, 2) + Math.pow(m, 2);
let k = Math.sqrt(l);   //Math.sqrt() возвращает квадратный корень числа
console.log(k);

// Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
let fio = 'Zhuzha Yevhen Mukolaevitch';
let age = 32;
let hobby = 'sport';
alert(fio + '\n' + age + '\n' + hobby);   // \n - выводит данные с новой строки

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let empty = [];
empty[0] = 100;
empty[1] = 999999;
empty[2] = 'layout';
console.log(empty);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
	document.write('<div>Lorem '+ i +' </div>');   //i - выводит индекс
	}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 0;
while(i < 20) {
	document.write('<h1>Lorem '+ i +'</h1>');
	i++;   //без этого страница зависнет
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let num = [10, 100, 1000, 10000, 100000, 20, 200, 2000, 20000, 200000];
for (let i = 0; i < num.length; i++) {
	console.log(num[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let array = [7, 1, 13, 69, 'Marina', 'Nastya', 'Kolya', true, true, false];
for (let i = 0; i < array.length; i++) {
	if (typeof array[i] === 'number') {
		console.log(array[i]);
	}
}

// - Створити порожній масив. Наповнити його 5 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let empty = [];
empty[0] = 'yes';
empty[1] = 'no';
empty[2] = 'age';
empty[3] = 666;
empty[4] = 777;

for (let i = 0; i < empty.length; ++i) {
	console.log(empty[i]);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i = i+=2) { 
	console.log(`step : ${i}`);
	document.write(`step : ${i} </br>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i < 100; i = i+=2) { 
	console.log(`step : ${i}`);
	document.write(`step : ${i} </br>`);
}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for (let m = 0; m <= 1; m++) {
	for (let s = 0; s < 60; s++) {
		document.write(`Хвилини: ${m} Секунди: ${s} <br>`)
		if (m === 1 && s === 59) break 
	}
}

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for (let h = 0; h <= 2; h++) {
	for (let m = 0; m < 60; m++) {
		if (h === 2 && m === 21) break
		for (let s = 0; s < 60; s++) {
			document.write(`Години: ${h} Хвилини: ${m} Секунди: ${s} <br>`)
			if (m === 20 && s === 0) break
		}
	}
}

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let array = ['a', 'b', 'c'];
for (let i = 1; i <= 3; i++) {
	array.push(i);   //пушит элементы в конец масива
}
console.log(array);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let array = [1, 2, 3];
let newArray = array.reverse();   //делает reverse
console.log(array);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let array = [1, 2, 3];
for (let i = 6; i >= 4; i--) {
	array.unshift(i);   //добавляет элементы в начало масива
	
}
console.log(array);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let array = ['js', 'css', 'jq'];
let first = array.shift();   //вырезает первый элемент 
console.log(first);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let array = ['js', 'css', 'jq'];
let last = array.pop();   //вырезает последний элемент
console.log(last);

// arr.slice([start], [end])
// Он возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end). Оба индекса start и end могут быть отрицательными. В таком случае отсчёт будет осуществляться с конца массива.
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) );   // e,s копирует с 1 до 3
alert( arr.slice(-2) );   // s,t копирует с -2 до конца

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let num = [1, 2, 3, 4, 5];
console.log(num.slice(3));   //указываем какие элементы удалить с 3 включительно

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let num = [1, 2, 3, 4, 5];
console.log(num.slice(0, 2));   //указываем какие элементы оставить с 2 включительно

// удалить 3 первых элемента и заменить их другими
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
arr.splice(0, 3, "Давай", "танцевать");
alert( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

// Здесь видно, что splice возвращает массив из удалённых элементов:
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
let removed = arr.splice(0, 2);   // удалить 2 первых элемента
alert( removed );   // "Я", "изучаю" <-- массив из удалённых элементов

// Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0:
let arr = ["Я", "изучаю", "JavaScript"];
// с позиции 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");
alert( arr );   // "Я", "изучаю", "сложный", "язык", "JavaScript"

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
	if (num[i]%2 === 0) {
		console.log(num[i]);
	}
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push() скопіювати значення одного масиву в інший
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let empty = [];
for (let i = 0; i < num.length; i++) {
	empty.push(num[i]);
}
console.log(empty);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// Тоже самое что выше, но без использования push()
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let empty = [];
for (let i = 0; i < num.length; i++) {
	empty[i] = num[i];
}
console.log(empty);

// перебрати циклом for та вивести  числа тільки з непарним індексом
let num = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < num.length; i++) {
	if (num[i] % 2 !== 0) {
		console.log(num[i]);
	}
}

// перебрати циклом while та вивести  числа тільки парні  значення
let num = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < num.length) {
	if (num[i] % 2 === 0) {
		console.log(num[i]);
	}
	++i;
}

// замінити кожне число кратне 3 на слово "okten"
let num = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < num.length; i++) {
	if (num[i] % 3 === 0) {
		(num[i] = 'okten');
	}
}
console.log(num);

//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
let num = [];
for (let i = 0; i < 50; i++) {
	num[i] = i*2;
}
console.log(num);

// - заповнити його 50 непарними числами за допомоги циклу.
let num = [];
for (let i = 0; i < 50; i++) {
	num[i] = i*2+1;
}
console.log(num);

// используя Math.random заполнить массив из 10 элементов в диапазоне от 1 до 100
let num = [];
for (let i = 0; i < 10; i++) {
	num[i] = Math.floor((Math.random()*100-1)+1)
	
}
console.log(num);

// масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
let prices = [100, 250, 50, 168, 120, 345, 188];
let result = (100 + 250 + 50 + 168 + 120 + 345 + 188)/prices.length;
console.log(result);

// створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом, додати його в інший масив.
let array = ['Vasya', 'Petya', 'Marysya', 10, 13, 999];
let newArray = [];
for (let i = 0; i < array.length; i++) {
	if(typeof array[i] === 'number') {
		newArray.push(array[i]);
	}
}
console.log(newArray);

// - При помощи Object.keys вывести все ключи всех объектов
let user = {
	name: 'Mario',   //name - это ключ
	platform: 'Dendy',
	bits: 8,
	skills: ['speed', 'run', 'jump'],
	wife: {name: 'princes', age: 20},
}
console.log(Object.keys(user));

// - взять объект и превратить каждый в json
let user = {
name: 'John',
surname: 'Rambo',
age: 70,
};

let userJson = JSON.stringify(user);
console.log(userJson);

// - взять json и превратить его обратно в объект
let userParse = JSON.parse(userJson);
console.log(userParse);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let users = [
	{name: 'Rick', age: 32, skills: ['html', 'java']},
	{name: 'Grisha', age: 22, skills: ['js', 'java']},
	{name: 'Lana', age: 42, skills: ['html', 'css', 'java']},
	{name: 'Liana', age: 19, skills: ['english', 'figma']},
	{name: 'Misha', age: 12, skills: ['html', 'pyton']},
]

for (let i = 0; i < users.length; i++) {
	console.log(users[i]); 
	console.log(users[i].skills);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
let users = [{
name: 'vasya',
age: 31,
status: false,
address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
name: 'petya',
age: 30,
status: true,
address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, ];

for (let i = 0; i < users.length; i++) {
	const user = users[i];
	const div = document.createElement('div');
	div.innerText = `${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
	document.body.appendChild(div);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (let i = 0; i < users.length; i++) {
	const user = users[i];
	const div = document.createElement('div');
	const name = document.createElement('h3');
	const age = document.createElement('p');
	const status = document.createElement('p');
	const address = document.createElement('div');

	for (const item in user.address) {
	const temp = document.createElement('div');
	temp.innerHTML = user.address[item];
	address.appendChild(temp);
		}

	name.innerText = user.name;
	age.innerText = user.age;
	status.innerText = user.status;

	div.appendChild(name);
	div.appendChild(age);
	div.appendChild(status);
	div.appendChild(address);
	document.body.appendChild(div);
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
let usersCities = [];

for(const user of usersWithId) {
	for(const city of citiesWithId) {
		if(user.id === city.user_id) {
			user.address = city;
		}
	}
}
usersCities.push(usersWithId);
console.log(usersCities);

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
const elementById = document.getElementById('content');
const innerText = elementById.innerText;
console.log(innerText);

const elementsByClassName = document.getElementsByClassName('rules');
for (const element of elementsByClassName) {
	element.innerText = 'asdsdasdasdasdsadasdasdsad'
	console.log(element);
}

const elementsByTagName = document.getElementsByTagName('h2');
for (let element of elementsByTagName) {
	element.innerText = 'sadadadadadadadadadsadadsadsad'
		console.log(element);
	
}

// - змінити висоту та ширину блоку використовуючи селектори id
const elementById = document.getElementById('content');
const innerText = elementById.innerText;
content.style.width = '500px';
content.style.height = '500px';

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
const table = document.createElement('table');
const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');
td1.innerText = '1111111111111111111111111';
td2.innerText = '2222222222222222222222222';
td3.innerText = '3333333333333333333333333';
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
table.appendChild(tr);
document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
const table = document.createElement('table');
for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');
	let td3 = document.createElement('td');
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	table.appendChild(tr);
}
document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
let n = prompt('рядки');
let m = prompt('ячейки');
let table = document.createElement('table');
for (let i = 0; i < n; i++) {
	let tr = document.createElement('tr');
	for (let i = 0; i < m; i++) {
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	table.appendChild(tr);
}
document.body.appendChild(table);

//  - знайти всі елементі, які мають class
const elementsByClassName = document.querySelectorAll('[class]');
console.log(elementsByClassName);

//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
const elementsByTagName = document.getElementsByTagName('p');
for (const tag of elementsByTagName) {
	tag.innerText = 'hello oktenweb!'
	}

// - знайти всі div та змінити ім колір на червоний
const elementsByTagName = document.getElementsByTagName('*');
for (const tag of elementsByTagName) {
	if(tag.getAttribute ('id')) {
		tag.style.color = 'red'
		console.log(tag);
	}
}

// при помощи fetch получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
fetch('https://jsonplaceholder.typicode.com/posts')
.then(value => value.json())
.then(posts => {

for (const post of posts) {
	post.comments = [];
	fetch('https://jsonplaceholder.typicode.com/comments')
			.then(value => value.json())
			.then(comments => {
				for (const comment of comments) {
					if (post.id === comment.postId) {
						post.comments.push(comment);
					}
				}

				document.write('div');
				document.write(`post id - ${post.id} - ${post.title}`);
				document.write('<ul>');
				for (const comment of post.comments) {
					document.write(`<li>${comment.body}</li>`)
				}
				document.write('</ul>');
				document.write('</div>');
			});
}
});

// - створити функцію яка виводить масив
let array = [10, 20, 30, 40];
	function printArray(arr) {
		console.log(arr);
	}
printArray(array);

// - створити функцію яка заповнює масив рандомними числами та виводить його.
function createArray(length, min, max) {
	let array = [];
	for (let i = 0; i < length; i++) {
		array.push(Math.floor(Math.random() *(max-min)+min))
	}
	console.log(array);
	return array;
}
const array1 = createArray(10, 10, 100);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
	function returnMinFromThree(a, b, c) {
		let min;

		if(a <= b && a <= c) min = a;
		if(b <= a && b <= c) min = b;
		if(c <= b && c <= a) min = c;

		console.log(min);
		return min;
	}
const min = returnMinFromThree(5, 10, 15);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function returnMaxFromThree(a, b, c) {
	let max;

	if (a >= b && a >= c) max = a;
	if (b >= a && b >= c) max = b;
	if (c >= a && c >= b) max = c;

	console.log(max);
	return max;
}
const max = returnMaxFromThree(100, 200, 300);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function returnMinPrintMax () {
	let min = arguments[0];
	let max = arguments[0];
	for (const argument of arguments) {
		if (argument > max) max = argument;
		if (argument < min) min = argument;
	}
	console.log('max', max);
	return min;
}
	const min = returnMinPrintMax (11,22,33);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function addNum(array) {
	let sum = 0;
		for (const item of array) {
			sum += item
		}
		return sum;
	}
const addNum1 = addNum([5, 10, 15]);
console.log(addNum1);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function mean(array) {
	let sum = 0;
	for (const item of array) {
		sum += item;
	}
	return sum/array.length;
}
const mean1 = mean([100, 500, 1000]);
console.log(mean1);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let cities = [
	{name: 'Khmelnitsky', country: 'Ukraine', population: 250000, region: 'Khmelnitskyi'},
	{name: 'Kyiv', country: 'Ukraine', population: 2000000, region: 'Kyivskyi'},
	{name: 'Lviv', country: 'Ukraine', population: 900000, region: 'Lvivsky'},
	{name: 'Dnipro', country: 'Ukraine', population: 1000000, region: 'Dnipropetrovsky'},
	{name: 'Zimbabve', country: 'Africa', population: 20000, region: 'Blackregion'},
];

	function countObj(arrayObj) {
		let count = 0;
		for (const item of arrayObj) {
			if(typeof item === 'object') {
				count++;
			}
		}
		return count;
	}
let num = countObj(cities);
console.log(num);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
function zeroEnd(array) {
	let zero = [];
	let number = [];
	for (const item of array) {
		if(item === 0){
			zero.push(0);
		} else {
			number.push(item);
		}
	}
return number.concat(zero);
}
console.log(zeroEnd([1,0,6,0,3]));

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
let car = {
	model: 'x6', 
	producer: 'bmw', 
	year: 2010,
	maxSpeed: 300, 
	size: 4.0,
	driver:'',
	drive: function() {
		console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
	},
	info: function() {
		console.log(this);
	},
	increaseMaxSpeed: function(newSpeed) {
		this.maxSpeed = this.maxSpeed + newSpeed;
	},
	changeYear: function(newValue) {
		this.year = newValue
	},
	addDriver: function(driver) {
		this.driver = driver;
	},
}

car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(1999);
car.addDriver('Sasha');
console.log(car);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, size) {
	this.model = model || 'x6';
	this.producer = producer || 'bmw';
	this.year = year || 2010;
	this.maxSpeed = maxSpeed || 300;
	this.size = size || 4.0;
	this.newSpeed = newSpeed;
	this.driver = driver;
	this.drive = function () {
		console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
	}; 
	this.info = function () {
		console.log(`
		model: ${this.model} 
		producer: ${this.producer} 
		year: ${this.year} 
		maxSpeed: ${this.maxSpeed}  
		size: ${this.size} `);
	};
	this.increaseMaxSpeed = function(newSpeed) {
		this.newSpeed = this.maxSpeed + newSpeed
		console.log(this.newSpeed);
		
	};
	this.changeYear = function(newValue) {
		this.year = newValue
	};
	this.addDriver = function(driver) {
		this.driver = driver;
	};
}

let model = 'x6';
let producer = 'bmw';
let year = 2010;
let maxSpeed = 300;
let size = 4.0;
let newSpeed = '';
let driver = '';

let car = new Car(model, producer, year, maxSpeed, size);
car.increaseMaxSpeed(100);
car.changeYear(2021);
car.addDriver();
car.info();
console.log(car);

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car {
	constructor(model, producer, year, maxSpeed, size) {
	this.model = model || 'x6';
	this.producer = producer || 'bmw';
	this.year = year || 2010;
	this.maxSpeed = maxSpeed || 300;
	this.size = size || 4.0;
	this.newSpeed = newSpeed;
	this.driver = driver;
	}
	drive() {
		console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
	}
	info() {
		console.log(`
		model: ${this.model} 
		producer: ${this.producer} 
		year: ${this.year} 
		maxSpeed: ${this.maxSpeed}  
		size: ${this.size} `);
	}
	increaseMaxSpeed(newSpeed) {
		this.newSpeed = this.maxSpeed + newSpeed;
		console.log(this.newSpeed);
		
	}
	changeYear(newValue) {
		this.year = newValue;
	}
	addDriver(driver) {
		this.driver = driver;
	}
}

let model = 'x6';
let producer = 'bmw';
let year = 2010;
let maxSpeed = 300;
let size = 4.0;
let newSpeed = '';
let driver = '';

let car = new Car(model, producer, year, maxSpeed, size);
car.increaseMaxSpeed(150);
car.changeYear(2021);
car.addDriver('Boris');
car.info();
console.log(car);

// replaceAll() - замена одних символов на другие
let str = 'okten is cool';
let replaceAll = str.replaceAll('o', '0');
console.log(replaceAll);

// toUpperCase() - символи с большой буквы
let str = 'okten is cool';
console.log(str.toUpperCase());

// Function Declaration - создание функии
function foobar() {
	document.write('<div>hello </div>');   //тело функции
	document.write('<div>test </div>');
	document.write('<div>bye </div>');
}
foobar(); //ее запуск

// Функция создания <div> и текстом внутри
function createDOMElement() {
	let element = document.createElement('div');
	element.innerText = ' hello world!!!';
	document.body.appendChild(element);   //помещаем наш div с текстом в body
}
createDOMElement();

// Функция с аргументом, который можно менять
function createDOMElement(tag, txt) {   //tag, txt - аргументы которые можно менять
	let element = document.createElement(tag);
	element.innerText = txt;
	document.body.appendChild(element);
}
createDOMElement('div', 'okten is cool');
createDOMElement('h2', 'hello world');

// Функция return, вычисляем периметр
function calcPermimetr(a, b) {
	let result = (a + b) * 2;
	return result;   //без return не сможем нигде использовать результат
}
let permimetr1 = calcPermimetr(100, 200);
let permimetr2 = calcPermimetr(200, 300);

let permimetr = calcPermimetr(permimetr1, permimetr2);
console.log(permimetr);

// Функция калькулятор
function calculator(a, b, action) {   //action - действие, которое выставляем
	let result;
	if (action === '+') {
		result = a + b;
	} else if (action === '-') {
		result = a - b;
	}
	//......
	return result;
}

let res1 = calculator(10, 20, '+');
console.log(res1);

// Функция вывода любого массива
function printArray(array) {
	for (const arrayElement of array) {    //цикл for of
		console.log(arrayElement);
	}
}

let users = [
	{name: 'vasya', age: 31, status: false},
	{name: 'petya', age: 30, status: true},
	{name: 'kolya', age: 29, status: true},
	{name: 'olya', age: 28, status: false},
	{name: 'max', age: 30, status: true},
	{name: 'anya', age: 31, status: false},
	{name: 'oleg', age: 28, status: false},
	{name: 'andrey', age: 29, status: true},
	{name: 'masha', age: 30, status: true},
	{name: 'olya', age: 31, status: false},
	{name: 'max', age: 31, status: true}
];

printArray(users);

// Видимость переменных (scope) есть только внутри функции
function scopeDemo() {
	let a = 100500;
	var b = 200600;
	console.log(b);    //сработает нормально
}
console.log(b);    //выдаст ошибку

// Функция в функции калькулятор +, -, calculate
function add(a, b) {
	return a + b;
}

function minus(a, b) {
	return a - b;
}

function calculate(a, b, action) {
	//debugger - для проверки багов функции, после проверки нужно закоментить
	if (action === '+') {
		return add(a, b);
	} else if (action === '-') {
		return minus(a, b);
	}
	return 'error';    //когда нету action выдает error
}

calculate(100, 200, '+');

// Hoisting - всплытие функции. Можем ее использовать выше, чем мы ее описали
hoisting
hoist();
function hoist() {}

// Funcion expression - функциональное выражение (отличается тем, что есть let, var, const)
let expressionFunc = function (a, b, c) {
	console.log('test');
};
expressionFunc(10, 20, 30);   //здесь не будет работать hoisting (всплытие)

// Arrow function - стрелочная функция (синтаксический сахар) => значит следовательно
// Arrow function позволяет сделать только funcion expression
// Более короткая запись функции той, что выше
let expressionFunc = (a, b, c)=> {
	console.log('test');
};
expressionFunc(10, 20, 30);

//Если в стрелочной функции 1но действие, то можно записывать без {} и если 1 аргумент можно записывать без ()
let expressionFunc = a => console.log(a);
expressionFunc('hello');

//Два варианта записи функции с return
let expressionFunc = (a, b) => {
	let result = a + b;
	console.log(result);
	return result;
};
let num = expressionFunc(10, 20);

// Сокращенный вариант той же функции
let expressionFunc = (a, b) => /*return*/ a + b;   //return там есть, но он не пишется
let num = expressionFunc(10, 20);
console.log(num);

// Arguments - псевдо-массив всех аргументов
function calc() {
	console.log(arguments);
	}
calc(10, 20, 30, 40);   //4 аргумента
calc(10, 20, 30, 40, 50);   //5 аргументов

// Усложнение того же
function calc() {
	let bascket = 0;
	for (const argument of arguments) {
		bascket += argument;
	}
	console.log(bascket);
}
calc(10, 20, 30, 40);
calc(10, 20, 30, 40, 50);
calc(10500, 13, 43654.999 - 90);

// Selfinvoke function
// В html - при нажатии на кнопку вызывается функция
<button onclick="clickX()">
press me
</button>

// В js
function clickX() {
	console.log('click done')
}

// Тоже самое но запись в линию в html
// Функция сразу описана и вызвана
<button onclick="(function (msg){ console.log(msg)})('hello')">
	press me
</button>

// Recursion (рекурсия)
// Как цикл while но с большими возможностями
function increment(num) {
	if (num > 10) {
		return;   //нужен обязательно иначе зависнет браузер
	}
	num++;
	console.log(num);
	increment(num);
}
increment(0);   //с какой цифры начинаем

// Функция в объекте
let user = {
	name: 'vasya',
	age: 123,
	greeting: function () {
		console.log('hello - ' + this.age + ' ' + this.name);
		console.log(this);
		}
	};

	console.log(user);
user.greeting();

// Функция конструктор для объекта, в котором attribytes - это массив объектов
function Tag(titleOfTag, action, attrs) {   //Tag должен быть с большой буквы
	this.titleOfTag = titleOfTag;
	this.action = action; 
	this.attrs = attrs;
}

let title = '<a>';
let action = 'Тег <a> является одним из важных элементов HTML'
let attribytes = [
{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
{titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'},
{titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'},
]

let a = new Tag(title, action, attribytes);   //без new не будет работать
console.log(a);

// Тоже самое, но уже запись с class
class Tag {
	constructor(titleOfTag, action, attrs) {   //появляется слово constructor вместо function
		this.titleOfTag = titleOfTag;
		this.action = action; 
		this.attrs = attrs;
	}
	}
	
	let title = '<a>';
	let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.'
	let attribytes = [
	{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
	{titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'},
	{titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'},
	]
	
	let a = new Tag(title, action, attribytes);
	console.log(a);
	
// Extends (наследование) классов
// --створити класс попелюшка з полями ім'я, вік, розмір ноги
// --створити 10 попелюшок , покласти їх в масив
// --сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// --за допоиоги циклу знайти яка попелюшка повинна бути з принцом
class Human {
	constructor(name, age) {
		this.name = name || 'No name';   //если не будет указано значение name - будет No name
		this.age = age || 'No age';
	}
}

class Cinderella extends Human {
	constructor(name, age, footSize) {
		super(name, age);   //наследование от Human (name, age)
		this.footSize = footSize || 'No footSize';
	}
}

class Princ extends Human {
	constructor(name, age, shoeSize) {
		super(name, age);   //наследование от Human (name, age)
		this.shoeSize = shoeSize || 'No shoeSize';
	}

	findCinderell(array) {
		let find = null;
		for (const item of array) {
			if(item.footSize === this.shoeSize) {
				find = item;
			}
		}
		if(find) {
			console.log('My cinderella name '+ find.name);
		} else {
			console.log('I not find my cinderell');
		}
	}
}

let cinderella1 = new Cinderella('Tanya', 16, 36);
let cinderella2 = new Cinderella('Katya', 17, 37);
let cinderella3 = new Cinderella('Lilya', 18, 38);
let cinderella4 = new Cinderella('Olya', 19, 39);
let cinderella5 = new Cinderella('Kira', 20, 40);
let cinderella6 = new Cinderella('Nastya', 21, 41);
let cinderella7 = new Cinderella('Yana', 22, 33);
let cinderella8 = new Cinderella('Marina', 23, 35);
let cinderella9 = new Cinderella('Natasha', 24, 38);
let cinderella10 = new Cinderella('Marusya', 100, 45);

let arrayCinderells = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];

const princ = new Princ('Ivan', 19, 39);
princ.findCinderell(arrayCinderells);

//Тоже самое, что выше но через функцию constructor
function Cinderella (name, age, footSize) {
	this.footSize = footSize || 'No footSize';
	this.name = name || 'No name';
	this.age = age || 'No age';
}

function Princ (name, age, shoeSize) {
	this.shoeSize = shoeSize || 'No shoeSize';
	this.name = name || 'No name';
	this.age = age || 'No age';


this.findCinderell = function(array) {
	let find = null;
	for (const item of array) {
		if(item.footSize === this.shoeSize) {
			find = item;
		}
	}
	if(find) {
		console.log('My cinderella name '+ find.name);
	} else {
		console.log('I not find my cinderell');
	}
}
}

let cinderella1 = new Cinderella('Tanya', 16, 36);
let cinderella2 = new Cinderella('Katya', 17, 37);
let cinderella3 = new Cinderella('Lilya', 18, 38);
let cinderella4 = new Cinderella('Olya', 19, 39);
let cinderella5 = new Cinderella('Kira', 20, 40);
let cinderella6 = new Cinderella('Nastya', 21, 41);
let cinderella7 = new Cinderella('Yana', 22, 33);
let cinderella8 = new Cinderella('Marina', 23, 35);
let cinderella9 = new Cinderella('Natasha', 24, 38);
let cinderella10 = new Cinderella('Marusya', 100, 45);

let arrayCinderells = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];

const princ = new Princ('Vasya', 20, 38);
princ.findCinderell(arrayCinderells);

// Sort - cортировка числового массива по возростанию
let numbers = [11, 22, 0, -1, 78];
console.log(numbers);
numbers.sort(function (a, b) { return a - b;});   //будет работать и так numbers.sort();
console.log(numbers);

// Sort - cортировка числового массива по убыванию
let numbers = [11, 22, 0, -1, 78];
console.log(numbers);
numbers.sort(function (a, b) { return b - a;});
console.log(numbers);

// foreEach - замена цикла. Переберает все значения и логнет каждое
let users = [
	{name: 'vasya', age: 31, status: false},   //index 0
	{name: 'petya', age: 30, status: true},   //index 1
	{name: 'kolya', age: 29, status: true},   //index 2
]

users.forEach(value => console.log(value));

// filter фильтр статуса объектов
let filter = users.filter(value => value.status);
console.log(filter);

// map - добавляет каждому объекту id которое = index
let map = users.map((value, index) => {
	value.id = index;
	return value;
});
console.log(map);

//  map - добавляет объекту max id unique, а остальным такую как index
let map = users.map((value, index) => {
	if (value.name == 'max') {
		value.id = 'unique';
	} else {
		value.id = index;
	}
	return value;
});
console.log(map);

// find - поиск, но только одного значения max
let find = users.find(function (user){   //запись через стандартную function
	return user.name === 'max';
});
console.log(find);

// filter - можно найти всех max
let filter = users.filter(value => value.name === 'max');   //запись через => стрелочною функцию
console.log(filter);

// используем filter и достаемся до объекта в объекте, который находится в массиве
let usersWithAddress = [
	{
	id: 1,
	name: 'vasya',
	age: 31,
	status: false,
	address: {city: 'Lviv', street: 'Shevchenko', number: 16}
	},
	{
	id: 3,
	name: 'kolya',
	age: 29,
	status: true,
	address: {city: 'Lviv', street: 'Shevchenko', number: 121}
	},
];

// находим user у которых number больше 50
console.log(usersWithAddress.filter(user => user.address.number > 50));

// сортируем номер дома в порядке возростания
console.log(usersWithAddress.sort((a, b) => a.address.number - b.address.number));

// callback
function print(arr, callback) {   //arr - массив, callback - функция, которая использует arr
	callback(arr);
}

let callback = function (array) {
	for (const arrayElement of array) {
		console.log(arrayElement);
	}
};

print([1, 2, 3, 4, 5], callback);

// внутри callback - ritar обратный цикл - выводит числа по убыванию
print([11, 22, 33, 44, 55], function (arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		const arrElement = arr[i];
		console.log(arrElement);
	}
});

// callback функции калькулятор
function calculator(a, b, callback) {
	return callback(a, b);
}

console.log(calculator(10, 20, (a, c) => a + a + a - c));   //1-й вариант

console.log(calculator(100, 200, (a, b) => a * b - b));   //2-й вариант

// -- при помощи filter получить числа кратные 3
let num = [1, 13, 55, 80]
let num1 = num.filter(value => value % 3 === 0 && value !== 0);   //работает как цикл где нужно указать if
console.log(num1);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let num = [1, 13, 55, 80]
let map = num.map(value => value*3)
console.log(map);

// - создать массив со словами на 15-20 элементов.
let stringArr = ['porshe', 'toyota', 'ferrari', 'lada', 'mercedes', 'honda', 'zil', 'zaporoshec', 'tavria', 'mazda', 'man', 'reno', 'shkoda', 'hammer', 'suzucki'];

// -- отсортировать его по алфавиту в восходящем порядке.
let newStringArr = stringArr.sort((a, b)=> {
	if(a.toLowerCase() > b.toLowerCase()) return 1;
	if(a.toLowerCase() < b.toLowerCase()) return -1;
	return 0;
});
console.log(newStringArr);

// -- отфильтровать слова длиной менее 4х символов
let newStringArr = stringArr.filter(value => value.length < 4);
console.log(newStringArr);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// map лучше обворачивать в {} иначе при короткой записи, как выше, могут быть ошибки
let newStringArr = stringArr.map(value => {
	value += '!'
	return value;
});
console.log(newStringArr);

// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
let newUsers = users.sort((a, b) => a.age - b.age);
console.log(newUsers);

let newUsers = users.sort((a, b) => b.age - a.age);
console.log(newUsers);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let newUsers = users.sort((a, b) => a.name.length - b.name.length);
console.log(newUsers);

let newUsers = users.sort((a, b) => b.name.length - a.name.length);
console.log(newUsers);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let newUsers = users.map((value, index) => {
	value.id = index;
	return value;
});
console.log(newUsers);

// - відсортувати його за індентифікатором
newUsers.sort((a, b) => a.id - b.id);
console.log(newUsers);

// - наисать функцию калькулятора с 3мя числами и колбеком 
function calculator(a, b, c, callback) {
	return callback(a, b, c);
}

let result = calculator(1359, 777, -2890, (a, b, c) => c * b / a);
console.log(result);

// создать DOM структуру в html
// будет в html выведен массив users, отсортирован по возрасту и статусу
let users = [
	{name: 'vasya', age: 31, status: false},
	{name: 'petya', age: 30, status: true},
	{name: 'kolya', age: 29, status: true},
];

users   //слово должно быть
	.filter(value => value.status)   //сортировка по статутсу
	.sort((a, b) => a.age - b.age)   //сортировка по возрасту
	.forEach(value => {   //работает как цикл, где value - это наш каждый user
		let div = document.createElement('div');   //создаем div
		div.innerText = JSON.stringify(value);   //превращаем массив в стрингу и вставляем его в div
		document.body.appendChild(div);   //вставдяем этот div в body
	});

// создание input form button в html
// value - уже введен текст
// placeholder - подсказка
<form action="urla">
	<input type="text" name="imya" value="serj"></input>   
	<input type="text" name="vik" placeholder="enter your age"></input>
	<button>send</button>
</form>

// создание кнопки которая будет собирать name и age - создавать объект и выводить в консоль
/* <input type="text" name="imya"></input>
<input type="text" name="vik"></input>
<button onclick="getObject()">send</button> */

function getObject() {
	let inputs = document.getElementsByTagName('input');   //находит элемент по тегу
	let name = inputs[0].value;
	let age = inputs[1].value;
	let user = {name, age};   //короткая запись от name: name, age: age
	console.log(user);
}

// если нужно несколько функций привязать к onclick (по умолчанию нельзя)
target.addEventListener('click', () => console.log('hello'));

// изменение цвета при наведении и отведении мышки
let inputs = document.getElementsByTagName('input');

for (const input of inputs) {
input.addEventListener('mouseover', () => {
	input.style.background = 'silver';
});

input.addEventListener('mouseleave', () => {
	input.style.background = 'white';
});
}

// при движении мышки изменяется цвет box (который нужно создать в html и застелизовать в css)
let box = document.getElementById('box');

box.onmousemove = function (e) {   //e - event
	console.log(e.x, e.y);
	this.style.background = `rgb(${e.x},${e.y},${e.x})`;
};

// box уменьшается в 2 раза при клике мышкой
let box = document.getElementById('box');
box.onclick = (e) => {
	let height = +getComputedStyle(box).height.replaceAll('px', ''); // 200px
	box.style.height = height / 2 + 'px';
};

// пишем текст в input и он добавляется в box
/* <input type="text" name="imya"></input>   //закоментил потому, что много подчеркиваний
<input type="text" name="vik"></input>
<button onclick="getObject()">send</button>
<div id="box"></div> */

function getObject() {
	let inputs = document.getElementsByTagName('input');
	let name = inputs[0].value;
	let age = inputs[1].value;
	let user = {name, age};
	console.log(user);
}

let inputs = document.getElementsByTagName('input');
let box = document.getElementById('box');

inputs[0].oninput = function () {
	box.innerText = this.value;
};

//  cоздать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let text = document.getElementById('text');
let button = document.getElementById('button');

button.onclick = ev => {   //ev - event должен быть обязательно
	if (text.style.display === 'block') {
		text.style.display = 'none'
		} else {
			text.style.display = 'block'
		}
	}

// решение той же задачи, но через hidden
button.onclick = ev => {
	if (text.hidden) {
		text.hidden = false
		} else {
			text.hidden = true
		}
	}

// та же запись, но сокращенно через тернарный оператор
button.onclick = ev => {
	text.hidden
	? text.hidden = false
	: text.hidden = true
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let button = document.getElementById('button');
let input = document.getElementById('input');

button.onclick = ev => {
	const value = input.value;
	if(value < 18 && value >0) {
		alert('Yuo are soo yang')
	}
}

// меню которое появляется и прячется
// html
<ul id="menu">
<li>
	<a href="#" id="a1">Пункт меню</a>
	<ul id="subMenu">
		<li>
		<a href="#">Пункт 1</a>
	</li>
	<li>
		<a href="#">Пункт 2</a>
	</li>
	<li>
		<a href="#">Пункт 3</a>
	</li>
	</ul>
</li>
</ul>

// javascript
let button = document.getElementById('a1');
let input = document.getElementById('subMenu');
let flag = false;

a1.onclick = event => {
	if(flag) {
		subMenu.style.display = 'block';
		flag = false;
	} else {
		subMenu.style.display = 'none';
		flag = true
	}
}

// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.
let commentArray = [
	{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
	{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
	{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
	{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
	{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
	{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
];

commentArray.forEach(item => {
	const div = document.createElement('div');
	const h2 = document.createElement('h2');
	const p = document.createElement('p');
	const button = document.createElement('button');
	
	button.innerText = 'Hide';
	h2.innerText = item.title;
	p.innerText = item.body;
	
	button.onclick = () => {
		if (p.hidden) {
			p.hidden = false;
		} else {
			p.hidden = true;
		}
	}
	
	div.appendChild(h2);
	div.appendChild(p);
	div.appendChild(button);
	content.appendChild(div);
});

// Часы
let clock = document.getElementById('clock');
setInterval(() => {
	let date = new Date();
	clock.innerText = date.getHours() + ' ' + date.getMinutes() + ' ' + date.getSeconds();
}, 1000);

//*- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let obscene=['fuck', 'shit', 'ass', 'bitch', 'bastard', 'dick', 'whore', 'stupid', 'sucker'];

let check=document.getElementById('check');
check.onclick=function () {
    let input=document.getElementsByTagName('input');
    let str=input[0].value;
    let arr=str.split(' ');
    for(let a of arr){
        for(let ob of obscene){
            if(a===ob){
                alert('You can`t use obscene words!!!');
            }
        }
    }
}

//Задержка вывода на 2 секунды
setTimeout(() => console.log('Hello, World!'), 2000);

// пример шаблона fetch - для запроса получения массива users
fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())   //response - ответ, json - вытягивает только чистые данные
	.then(users => {    //здесь делаем нужные действия
	});

// тоже самое, но уже полностью заполненое действие
// сначала создаем <div id="userBlock"></div>, получаем массив юзеров, создаем параграф в который вставляем полученные данные
let usersBlock = document.getElementById('usersBlock');
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
	for (const user of users) {
		let item = document.createElement('p');
		item.innerText =   //item - можно задавать любое другое имя
			`${user.id} ${user.name} ${user.email} ${user.company.name}`;
		usersBlock.appendChild(item);
	}
});

// тоже самое но усложненный вариант
fetch('https://api.sampleapis.com/futurama/characters')
.then(response => response.json())
.then(heroes => {
	futuramaCharacters = heroes;
	for (const hero of heroes) {
		let info = document.createElement('p');
		let anchor = document.createElement('a');
		anchor.href =   // ?name=  идут дополнительные параметры урлы дальше нужно &surname= и тд
			`characterDetails.html?name=${hero.name.first}&surname=${hero.name.last}&full=${JSON.stringify(hero)}`;
		anchor.innerText = `info`;
		info.appendChild(anchor);
		let img = document.createElement('img');
		img.src = hero.images.main;
		usersBlock.appendChild(info);
		usersBlock.appendChild(img);
	}
});

console.log(futuramaCharacters);

// вытягиваем значение из урлы, та, что сделана выше и вставляем в страницу
console.log(location);
console.log(location.search);
let url = new URL(location);
console.log(url);
let name = url.searchParams.get('name');
console.log(name);
let surname = url.searchParams.get('surname');
console.log(surname);
let full = url.searchParams.get('full');
console.log(JSON.parse(full));

let h1 = document.getElementsByTagName('h1')[0];
h1.innerText = `${name} ${surname}`;

// setTimeout задержка каждой буквы на 1 сек
setTimeout(() => {
	console.log('h');
	setTimeout(() => {
		console.log('e');
		setTimeout(() => {
			console.log('l');
			setTimeout(() => {
				console.log('l');
			}, 1000);
		}, 1000);
	}, 1000);
}, 1000);

// скрипт который показывает googl maps
let map;

function initMap() {
	navigator.geolocation.getCurrentPosition(position => {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: position.coords.latitude, lng: position.coords.longitude},
			zoom: 12,
		});
	});
}

<script async
	src="https://maps.googleapis.com/maps/api/js?callback=initMap">   //*google api, ключ удаленный
</script>
