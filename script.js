function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    if (b === 0){
        return 'No se puede dividir entre 0';
    }
    return a / b;
}

//Prueba 1

console.log('Suma 5 + 5 =', sumar(5, 5));
console.log('Resta 8 - 4 =', restar(8, 4));
console.log('Multiplicacion 8 x 8 =', multiplicar(8, 8));
console.log('Division 15 / 3 =', dividir(15, 3));
console.log('Division entre 0, 5 / 0', dividir(5, 0))

//Prueba 2 Sumando strings

let num1 = '10';
let num2 = '20';
function pruebasuma(num1, num2){
    return num1 + num2
}
console.log('Suma de strings prueba:', pruebasuma(num1, num2));