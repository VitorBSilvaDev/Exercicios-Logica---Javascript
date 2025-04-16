alert("Cálculo de início/fim do jogo de Xadrez")
let horaInicial = parseInt(prompt("Digíte a hora de início do jogo:"))
let horaFinal = parseInt(prompt("Digíte a hora de término do jogo:"))

let calculoDuracao = horaFinal - horaInicial

if (calculoDuracao < 0 ) {
    calculoDuracao = calculoDuracao + 24
} 

alert("Duração do jogo = " + calculoDuracao)

