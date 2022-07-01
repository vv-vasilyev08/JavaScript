/*2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)*/

function printSmile(smile, x) {
    for (i = 1; i <= x; i++) {
      console.log(smile.repeat(i));
    }
  }
  printSmile(':)', 5)