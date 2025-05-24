/*estrutura básica de um if
 if (condição) {
codigo a ser executado caso a condição seja verdadeira
} else if (outra condição){
 codigo a ser executado caso a condição seja verrdadeira
} else {
 caso todas as condições anteriores sejam falsas, este codigo será executado}
*/

// Exemplo de if
let idade = 30;
if (idade >= 21 && idade <= 29){
    console.log('Você pode beber!'); 
} else {
    console.log('Você não pode beber!');
}
// Exemplo de if
let compra = 700;
if (compra >= 750 || idade >= 3) {
    console.log('Você ganhou um desconto de 8%');   
}