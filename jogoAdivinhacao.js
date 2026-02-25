const readline =('readline-sync');

console.log ("jogo da adivinhação, chute um numero de 1a 10: ");

const numeroSecreto = Math.floor(Math.random()*10 +1);

 let palpite = readline.questionInt("qual é o seu palpite? ") ;
let tentativas =1;

while (palpite != numeroSecreto){
    if (palpite < numeroSecreto){
        console.log("O numero Secreto é maior que seu chute. ");
    }
    else{
        console.log("O numero secreto é menor que seu chute.");
    }

    palpite = readline.questionInt("Tente novamente.");
    tentativas++;
}
console.log(`Parabens, voce aacertou o ${numeroSecreto} em ${tentativas} chutes`);