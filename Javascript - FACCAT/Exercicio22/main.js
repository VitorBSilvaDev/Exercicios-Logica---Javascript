alert("Cálculo hora extra")
let horasTrabalhadas = parseFloat(prompt("Digíte o total de horas trabalhadas em um mês:"))
let salarioHora = parseFloat(prompt("Digíte o valor do salário por hora:"))
let horaExtra
let calculoFinal

if (horasTrabalhadas > 160) {
    horaExtra = horasTrabalhadas - 160
    calculoFinal = salarioHora * horasTrabalhadas + salarioHora * horaExtra * 50/100
    alert("Valor total do salário: " + calculoFinal)
} else {
    calculoFinal = salarioHora * horasTrabalhadas
    alert("Valor total do salário: " + calculoFinal)
}


