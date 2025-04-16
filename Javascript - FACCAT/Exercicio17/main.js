alert("Cálculo de média simples")
let nota1 = parseFloat(prompt("Digíte a primeira nota:"))
let nota2 = parseFloat(prompt("Digíte a segunda nota:"))

calcMedia = (nota1 + nota2) / 2

if (calcMedia >= 6) {
    alert("Aluno aprovado")
} else {
    alert("Aluno reprovado")
}

alert(calcMedia)