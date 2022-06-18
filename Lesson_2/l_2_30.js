// console.log('Hello!')

// Булева логика
// Два пайплайна || при наличии true всегда возвращает true
// console.log(true || false)
// console.log(false || true)
// console.log(false || true || false)

// Две амперасанды && при наличии false всегда возвращает false
// console.log(false && true)
// console.log(true && false && true)

// console.log(true && false || true)
// console.log(true && false || true && false)
// console.log(true && false || true && true)


// if (false || true) {
//     console.log('1')
// } else {
//     console.log('2')
// }

// if (false && true) {
//     console.log('1')
// } else {
//     console.log('2')
// }

// if (false || true && false) {
//     console.log('1')
// } else {
//     console.log('2')
// }

// let age = 17
// let money = 900
// let dog = false


// if (age >= 18 && money == 1000 && dog) {
//     console.log('Get ticket')
// } else if (age < 18) {
//     console.log('Early')
// } else  if (money != 1000 || money < 1000) {
//     console.log('Keep calm and work hard!!!')
// } else if (!dog) {
//     console.log('Get Cat')
// }

// if (age >= 18 && money >= 1000 && dog) {
//     console.log('Get ticket')
// } else { if (age < 18) {
//     console.log('Early')
// }   if (money < 1000) {
//     console.log('Keep calm and work hard!!!')
// }  if (!dog) {
//     console.log('Get Cat')
// }}


// Бесконечный цикл
// count = 0
// while (true) {
//     console.log(count, 'Win!!!')
//     count++
// }


// count = 0
// while (count < 10) {
//     console.log(count, 'Win!!!')
//     count++
// }

// count = 0
// while (count < 10) {
//     // console.log(count, 'Win!!!')
//     if (count % 2 == 0){
//         console.log(count, 'even')
//     }
//     count++
// }

// count = 0
// for (let i = 0; i < 10; i++) {
//     console.log(i, 'Win!!!')
// }


// mm = [1,2,3,4,5,6,7,6,5,34,3,6,8]
// for (let i = 0; i < 10; i++) {
//     console.log(mm[i], 'Win!!!')
// }


mm = ['Alla', 'Natalia', 'Milana', 'Anatoly', 'Dmitry']
// console.log(mm.length)

for (let i = 0; i < mm.length +1; i++) {
    console.log(i, mm[i], 'Win!!!')
}