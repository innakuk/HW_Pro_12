// 1.
// let x = 10;
// let y = 7;
//
// let result = x > y ? 'x больше, чем y' : 'x не больше, чем y';
// alert(result);


// 2.
// const num = prompt('Введите число');
// const result = num % 2;
// if (result === 0) {
//     alert(`Число ${num} четное`);
// } else {
//     alert(`Число ${num} нечетное`);
// }


// 3.
const num = prompt('Введите целое число');
let numLengthResult;

if (+num === 0) {
    alert(`Число ${num} однозначное`);
} else if ( +num > 0) {
    switch (num.length) {
    case 1:
        numLengthResult = 'однозначное';
        break;
    case 2:
        numLengthResult = 'двухзначное';
        break;
    case 3:
        numLengthResult = 'трехзначное';
        break;
    default:
        numLengthResult = 'более чем трехзначное';
}
    alert(`Число ${num} ${numLengthResult} положительное`);
} else if ( +num < 0) {
    switch (num.length) {
        case 2:
            numLengthResult = 'однозначное';
            break;
        case 3:
            numLengthResult = 'двухзначное';
            break;
        case 4:
            numLengthResult = 'трехзначное';
            break;
        default:
            numLengthResult = 'более чем трехзначное';
    }
    alert(`Число ${num} ${numLengthResult} отрицательное`);
}

 // 4.
// const firstNumber = +prompt('Введите первое число');
// const secondNumber = +prompt('Введите второе число');
// const thirdNumber = +prompt('Введите третье число');
//
// if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
//     alert(`${firstNumber}`);
// } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
//     alert(`${secondNumber}`);
// } else if (thirdNumber >= firstNumber && thirdNumber >= secondNumber) {
//     alert(`${thirdNumber}`);
// }

//5.
// const firstLength = +prompt('Введите длину первой стороны треугольника');
// const secondLength = +prompt('Введите длину второй стороны треугольника');
// const thirdLength = +prompt('Введите длину третьей стороны треугольника');
//
// if ((firstLength + secondLength) < thirdLength || (firstLength + thirdLength) < secondLength || (thirdLength + secondLength) < firstLength) {
//     alert('Треугольник не может существовать')
// } else {
//     alert('Треугольник может существовать')
// }
