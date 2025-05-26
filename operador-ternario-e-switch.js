/* O switch parece com o if, porém, em alguns casos, o uso dele é melhor e mais apropriado.
após os : você pode adicionar o que quiser, para o caso daquela condição seja verdadeira.
O switch testa apenas igualdade, ou seja, quando o valor da variável referida for igual ao valor do case, o código será executado.
O "else" do switch é o default, que é o que será executado caso nenhuma das condições anteriores sejam verdadeiras.
Obs: Em cada case, você precisa colocar o break, para que o código não continue executando os outros cases.
*/ 

/* O operador ternário é uma forma reduzida de escrever um if, ele utiliza o ? e o : para separar a condição do resultado.
Se a condição for verdadeira, o resultado será o que estiver antes do : e se for falsa, o resultado será o que estiver depois do :.
Assim, os casos de utilização do operador ternário são em situações em que você tem apenas duas opções de resultado.
*/ 

// Exemplo de operador ternário

let idade = 18;
let resultado = (idade >= 18) ? 'Você pode beber!' : 'Você não pode beber!';
console.log(resultado);

// Exemplo de switch

let opcao = 1;
switch (opcao) {
    case 1:
        console.log('Você ganhou!!!');
        break;
    case 2:
        console.log('Você perdeu!!!');
        break;
    default:
        console.log('Opção inválida!!!');
        break;
}