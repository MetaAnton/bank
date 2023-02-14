//console.warn("Good work!");

//ВЫВОД ЧИСЛА

//const num = 5;
//const num2 = 10;
//console.log(num + num2)

 //ДЕЙСТВИЯ
 //var num = 10;
 //var num1 = 15;
 //console.log("Результат:" + (num+num1)); 

 //var num = 5;
 //var num2 = 10;
 //num2 += 10;
 //console.log("Результат;" +(num+num2));

 //ПРОВЕРКА УСЛОВИЯ
 //var stroka = "word";

 //   switch(stroka) {
//        case "4":
 //           console.log("переменная 4");
 //           break;
 //   }
 //МАССИВЫ//
/*var arr = [0, 5, 8, -100, "true"];
console.log(arr[3]);*/

/*var matrix = [
    [2,3,4], ["strroka", 6.8],[-100]
];
matrix [0] [1] = 4000;
console.log(matrix);//здесь заменяем один элемент списка на другой*/

//alert("hello")//всплывающее окно
/*function onClickButton()  {
    alert("вы нажали на меня");
}*/
//таймеры и интеравалы

/*var id = setInterval(my_func, 1000);
var counter = 0;
function my_func() {
    counter++;
console.log("Counter"+ counter);
if(counter == 3)//тут мы ограничиваем интервал до 3ех
clearInterval(id);
}*/

/* 0;
setInterval(function() {
    counter++;
console.log("Прошло секунд: " + counter);
},1000);*/

//таймер

/*setTimeout(function() {
console.log("wake up!!!");
},7000);//здесь мы установили время,через которое выведется сообщение*/

//дата
//var date = new Date();
/*console.log(date.getMonth() + 1 )//вывели месяц
console.log(date.getFullYear());//здесь мы вывели текущий год
console.log(date.getHours());//время
//можно выводить время,минуты, и т.д
date.setHours(23);//выводим свое время*/
//console.log("Время :" + date.getHours() +":"  + date.getMinutes());

//МАССИВЫ
//var arr = [8,2,5,7,8,9];
//console.log(arr.join("///"));
//console.log(arr.sort());//сорт по величине
//console.log(arr.reverse().join("/"));//комбинации
//var stroka = arr.reverse().join(", ");
//console.log(stroka.split(", "));

//КЛАССЫ
/*class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;//создали класс и добавили к нему хар-ки
    }
}
var alex = new Person('Alex', 45, true);//здесь уже создали переменную и вписали хар-ки
var bob = new Person('Bob', 23, false);
console.log(alex.name);
console.log(bob.name);*/