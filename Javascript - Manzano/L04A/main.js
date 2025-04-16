// a) Apresentar os quadrados dos números inteiros de 15 a 200

let contador = 15
let cauculoDeQuadrado

do {
    cauculoDeQuadrado = contador * contador
    console.log(contador, "² =" , cauculoDeQuadrado)
    contador++
} while (contador < 201);