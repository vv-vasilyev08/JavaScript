/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв
Проверки: 'case', 'Case', 'Check-list'*/

let w = function getWordStructure(word) {
    let vowels = /[aeiou]/g;
    let consonants = /[qwrtpsdfghjklzxcvbnm]/g
    let check = word.toLowerCase();
    let resultV = check.match(vowels).length;
    let resultC = check.match(consonants).length;
    console.log(`Слово ${word} состоит из ${resultV} гласных и ${resultC} согласных букв`);
}
w("case")
w("Case")
w("Check-list")