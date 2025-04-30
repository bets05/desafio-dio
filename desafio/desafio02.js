function ranked(win, lose){
    return win - lose;
}

let saldo = ranked (77, 33);

if (saldo <= 10) {
    nivel = "Ferro"
}
if (saldo >= 11 && saldo <= 20){
    nivel = "Bronze"
}
if (saldo >= 21 && saldo <= 50){
    nivel = "Prata" 
}
if (saldo >= 51 && saldo <= 80){
    nivel = "Ouro"
}
if (saldo >= 81 && saldo <= 90){
    nivel = "Diamante"
}
if (saldo >= 91 && saldo <= 100){
    nivel = "Lendário"
}
if (saldo >= 101){
    nivel = "Imortal"
}

console.log(`O Herói tem o saldo de ${saldo} está no nível ${nivel}!`);