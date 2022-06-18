// [В ответ на 30_QA_Group]
// HW_1* 
// Задания с разным количеством звездочек:)
// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number


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
        console.log('You don’t have access cause your age is '  + age + ' It’s less then ' + age2);
    } else if (age >=  age2 && age <  age3) {
        console.log('Welcome  !');
    } else if (age  > age3) {
        console.log('Keep calm and look Culture channel');
    } else {
        console.log('Technical work');
    } 
} else console.log('Not an integer value');
}
checkAge(17)
checkAge(18)
checkAge(61)
checkAge('aaa')
checkAge('20')
checkAge('0')
checkAge('')
