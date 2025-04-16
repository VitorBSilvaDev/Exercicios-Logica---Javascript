alert("Validação de voto")
let anoAtual = parseInt(prompt("Digíte o ano atual (sem abreviar):"))
let anoDeNascimento = parseInt(prompt("Digíte o seu ano de nascimento:"))

let calculoFinal = anoAtual - anoDeNascimento

if (calculoFinal < 0) {
    alert("Valor inválido")
} else if (calculoFinal < 16) {
    alert("Não pode votar")
} else {
    alert("Pode votar")
} 

alert("Idade: " + calculoFinal)
