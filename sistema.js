let numeroDeAlunos = 10;

 for (let contador = 1; contador <= numeroDeAlunos; contador++) {
    
    if (contador === 0) { 
    console.log ("O número atual é ZERO!");
 } else if (contador % 2 == 0 && contador > 5) {
    console.log ("O número " + contador + " é par e maior que 5!")
 } else if (contador % 2 == 0) {
    console.log ("O número " + contador + " é par!")
 } else {
        console.log ("O número " + contador + " é ímpar!")
 }}

// let listaDeAlunos = ["Marcelo", "Juh", "Cleber", "Wesley", "Adriano"]

// for (const aluno of listaDeAlunos) {
//    console.log (aluno);
//  }

// listaDeAlunos.forEach(element) => 
//     console.log (element);
// )}
