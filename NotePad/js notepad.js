// ФУНКЦИИ

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
function Tag(titleOfTag, action, attrs) {
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
