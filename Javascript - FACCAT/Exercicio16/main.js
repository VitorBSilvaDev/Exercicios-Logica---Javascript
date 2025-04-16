alert("Cálculo de maçãs compradas")
let macasCompradas = parseInt (prompt("Digíte o número de maçãs compradas:"))
let valorMaca

if (macasCompradas <= 12) {
    valorMaca = 1.30
} else {
    valorMaca = 1.00
}

calcFinal = macasCompradas * valorMaca

alert(calcFinal)

