// Ejercicios de internet para practicar 
// Variables y tipos de datos ----------------------------------------------------------------

let user = {
    name: 'Luis',
    age: 34,
    favoriteColor: 'Verde'
}

console.log('Acá esta la información del usuario:');
console.log(user);


// Condicionales ------------------------------------------------------------------------------

// First excersice
let isItFriday = true;
if (isItFriday) {
    console.log("It's Friday!");

} else {
    console.log("Not Friday yet.");
}

// Second Excersice
let number = 7;
if (number % 2 == 0){
    console.log("Even number");
} else{
    console.log("Odd number");
}

//Otro con if ternario
let parImpar = number % 2 == 0 ? "Even number" : "Odd number";

console.log(parImpar);


// Funciones ---------------------------------------------------------------------------------

// First excersice
function greet(name) {
    console.log('Hello sir ' + name);
}

greet('Luis');

// Second Excersice
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(6, 8));


// Arrays ----------------------------------------------------------------------------------------

let myArray = [222, 58, 497, 366, 45, 00, 96, 357, 159, 52, 485, 365];

console.log(myArray.length);

console.log(myArray[0]);

console.log(myArray[myArray.length-1]);
//Another way
console.log(myArray.slice(-1));



// Strings ------------------------------------------------------------------------------------------

let myString = 'Padre Creador!';
console.log(myString.length);
console.log(myString[0]);
console.log(myString.length -1);



// Ciclos -------------------------------------------------------------------------------------------------

for (let i = 1; i <= 10; i++) {
    console.log(i);

}

// Numeros pares
for (let i = 0; i <=10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    };
    
}

// console.log(0 % 2 !== 0);


function numeroUsuario(numero) {
let contar = 0;
for (let i= 0; i <=10; i++) {
    if (numero % 2 == i) {
        contar ++;
    }

}
return contar;

}

console.log(numeroUsuario(10));


// Ejercicio PG - obtener factorial ------------------------------------------------------------------

function ObtenerFactorial (numero){
    // if (numero <= 1){
    // return 1
    // }
    let resultado = 1
    for (let i=2;i<=numero;i++){
    resultado = i*resultado
    }
    return resultado
    }

    console.log(ObtenerFactorial(4));