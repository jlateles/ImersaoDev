// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    attempts++;

    const messageElement = document.getElementById('message');
    const attemptCountElement = document.getElementById('attemptCount');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = 'Por favor, insira um número de 1 a 100.';
    } else if (userGuess === secretNumber) {
        messageElement.textContent = `Parabéns! Você acertou! ${secretNumber} em ${attempts} tentativas.`;
        attemptCountElement.textContent = attempts;
        messageElement.style.color = '#61dafb';
        attemptCountElement.style.color = '#61dafb';
        document.getElementById('userGuess').disabled = true;
    } else {
        const hint = userGuess < secretNumber ? 'maior' : 'menor';
        messageElement.textContent = `Incorreto! Tente um  número ${hint}.`;
    }

    attemptCountElement.textContent = attempts;
}
