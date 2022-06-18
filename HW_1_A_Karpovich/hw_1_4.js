// [В ответ на 30_QA_Group]
// HW_1* 
// // Задания с разным количеством звездочек:)
// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке


const age2 = 18;
const age3 = 60;

const checkAge = function(age) {
    // age = Number(age)
    // console.log(age)

// if (typeof age == 'number') {
    // if(age) {
    if (age && !isNaN(age)) {
        console.log(age)
        
    if (age < age2) {
        alert('You don’t have access cause your age is '  + age + ' It’s less then ' + age2);
    } else if (age >=  age2 && age <  age3) {
        alert('Welcome  !');
    } else if (age  > age3) {
        alert('Keep calm and look Culture channel');
    } else {
        alert('Technical work');
    } 
} else alert('Not an integer value');
}
let a = prompt('Enter your age')

checkAge(a)

