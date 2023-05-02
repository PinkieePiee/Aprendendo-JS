//Tipos de saída:
document.getElementById("texto").innerHTML="Meu primeiro texto <b>JS</b>!"; //Mesma função que o document.write.

alert(10 + 5);

console.log('Oi, eu sou feito com console'); //Aparece na área de programação, mais discreto.

//Variáveis
var nome, sobrenome, nomeCompleto;
nome = "Lola";
sobrenome = 'Garcia';
nomeCompleto = nome + ' ' + sobrenome;
//Concatenização, unir informações através de variáveis

/* Let torna a variável única, não pode ser redeclarada
Const não permite que a variável declarada seja alterada
Var pode ser redeclarada várias vezes, alterando o seu valor*/

document.getElementById("texto").innerHTML = nomeCompleto;
//Utilizado para testes e funções. é uma saída

