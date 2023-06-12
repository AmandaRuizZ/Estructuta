/*
 
Escribe un programa que muestre por consola (con un print) los
números de 1 a 100
sustituyendo los siguientes:
Múltiplos de 3 por la palabra "fizz".
Múltiplos de 5 por la palabra "buzz".
Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz". */

function fizzbuzz()

for(let i=0; i <= 100; i++){
    if (i % 3 == 0)
    console.log("fizz");

} else (i % 5 == 0){
    console.log("fizzbuzz")
}