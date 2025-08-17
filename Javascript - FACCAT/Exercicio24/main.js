/* Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que 
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que 
ultrapassar este valor, calcular e escrever o seu salário total.*/

/*

1 - Declarar os valores de desconto e o valor limite como constantes para maior flexibilidade e legibilidade

2 - Criar a função que verifica a entrada do usuário
3 - Chamar a função dentro das variaveis de salario fixo e o total de venda
4 - Construir a lógica condicional para o obter o valor da comissao seguindo as regras de negócio
    4.1 - Se o valor total de vendas for menor ou igual o valor limite, deve ser acrescido 3% sobre esse valor
    4.2 - Se o valor total de vendas for maior que o valor limite então deve ser acrescido 5% sobre o que ultrapassar 
  // esse limite
5 - Exibir o resultado do salário fixo, total de vendas e salário total*/


// Importa o módulo 'prompt-sync' para ler entradas do usuário, executa a função 'prompt'
// a função principal que permite ler dados do terminal e atribui o resultado à variável 'prompt'.
const prompt = require('prompt-sync')();

// Valor de comissão para vendas abaixo do valor limite
COMISSAO_BASE = 0.03;

// Valor de comissão para vendas acima do valor limite
const COMISSAO_EXTRA = 0.05;

// Valor que define o limite de comissão 
const VALOR_LIMITE = 1500;

// Função que verifica a entrada do usuário e retorna um valor. 
// É o que vai ser utilizado para resgatar o valor do salário fixo e total de vendas

function lerEntrada(mensagem) {
    while (true) {
        let valor = parseFloat(prompt(mensagem));

        if (isNaN(valor) || valor <= 0) {
            console.log("Erro: Digite um valor numérico válido, maior que zero")
        } else {
            // Retorna o valor validado e sai do loop
            return valor
        }
    }
}

let salarioFixo = lerEntrada("Digite o valor do seu salario fixo:");
let totalVenda = lerEntrada("Digite o valor total de venda:");

let comissao = 0;
if (totalVenda > 1500){
    const valor_excedente = totalVenda - VALOR_LIMITE;
    const comissaoBase = VALOR_LIMITE * COMISSAO_BASE;
    const comissaoExtra = valor_excedente * COMISSAO_EXTRA;
    comissao = comissaoBase + comissaoExtra;
} else {
    comissao = totalVenda * COMISSAO_BASE;
}

const salarioTotal = salarioFixo + comissao;

console.log(`\nSalário fixo = ${salarioFixo}`);
console.log(`Total venda = ${totalVenda}`);
console.log(`Comissão = ${comissao}`);
console.log(`Salário total = ${salarioTotal}`);




