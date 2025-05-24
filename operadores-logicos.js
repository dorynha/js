/* Operadores lógicos:
&& (e logico) - retorna verdadeiro se ambos os operandos forem verdadeiros  
|| (ou logico) - retorna verdadeiro se pelo menos um dos operandos for verdadeiro
! (não logico) - inverte o valor lógico do operando
*/
// Exemplos
let resultado1 = 1==1 && 2==2; //true
let resultado2 = true && false; //false
let idade = 18;
let resultado3 = idade >= 18 && idade <= 45; //true


let totalcompra = 200;
let idadecliente1 = 30;
let descontoclientes = idadecliente1 >= 45 || totalcompra >= 200;