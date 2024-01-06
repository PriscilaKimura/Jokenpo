const result = document.querySelector('.result'); // Seleciona o elemento HTML com a classe 'result' e armazena na variável 'result'
const humanScore = document.querySelector('#human-score'); // Seleciona o elemento HTML com o ID 'human-score' e armazena na variável 'humanScore'
const machineScore = document.querySelector('#machine-score'); // Seleciona o elemento HTML com o ID 'machine-score' e armazena na variável 'machineScore'

let humanScoreNumber = 0; // Inicializa a variável para armazenar a pontuação do jogador humano
let machineScoreNumber = 0; // Inicializa a variável para armazenar a pontuação do robô

const playHuman = (humanChoice) => { // Declaração da função playHuman que recebe um argumento 'humanChoice'
    playTheGame(humanChoice, playMachine()); // Chama a função playTheGame passando a escolha do jogador humano e a escolha gerada aleatoriamente pela função playMachine
}

const playMachine = () => { // Declaração da função playMachine que gera uma escolha aleatória para o robô
    const choices = ['rock', 'paper', 'scisors']; // Array contendo as opções 'rock', 'paper' e 'scisors'
    const randomNumber = Math.floor(Math.random() * 3); // Gera um número aleatório entre 0 e 2  Math.random() * 3 gera um número aleatório entre 0 (inclusivo) e 3 (exclusivo), o que significa que pode retornar números decimais entre 0 e 2.9999... Para converter esse número para um número inteiro entre 0 e 2, é usado Math.floor() para arredondar para baixo, resultando em um número inteiro.

    console.log(randomNumber); // Exibe o número aleatório gerado no console

    return choices[randomNumber]; // Retorna a escolha aleatória do robô
}

const playTheGame = (human, machine) => { // Declaração da função playTheGame que verifica o resultado do jogo entre o jogador humano e o robô
    console.log('Humano:' + human + "maquina:" + machine); // Exibe no console as escolhas do jogador humano e do robô

    if (human === machine) { // Verifica se houve empate
        result.innerHTML = "Deu empate 😐"; // Exibe mensagem de empate no elemento com a classe 'result'
    } else if (
        (human === 'rock' && machine === 'scissors') || // Verifica se o jogador humano ganhou
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++; // Incrementa a pontuação do jogador humano
        humanScore.innerHTML = humanScoreNumber; // Atualiza a pontuação do jogador humano no elemento com o ID 'human-score'
        result.innerHTML = "Você ganhou! 😊"; // Exibe mensagem de vitória no elemento com a classe 'result'
    } else {
        machineScoreNumber++; // Incrementa a pontuação do robô
        machineScore.innerHTML = machineScoreNumber; // Atualiza a pontuação do robô no elemento com o ID 'machine-score'
        result.innerHTML = "Você perdeu para o robô! 😢"; // Exibe mensagem de derrota no elemento com a classe 'result'
    }
}
