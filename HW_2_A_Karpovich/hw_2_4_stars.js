/*4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)
Проверки: 'abba', 'Abba'*/

function isPalindrom(word) {
    return word.split('').reverse().join('') == word;
  }
console.log(isPalindrom("abba"))
console.log(isPalindrom("Abba"))