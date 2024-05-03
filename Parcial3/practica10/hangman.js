let words = ['murcielago'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = Array(selectedWord.length).fill('_');
let attempts = 6;

document.getElementById('wordToGuess').textContent = guessedLetters.join(' ');

function makeGuess() {
    let guessInput = document.getElementById('guess');
    let letter = guessInput.value.toLowerCase();
    guessInput.value = ''; // Limpia el campo de entrada

    if (letter.length === 1 && /^[a-zA-ZñÑ]$/.test(letter)) { // Asegura que sea una letra
        if (!selectedWord.includes(letter)) {
            attempts--;
            updateMessage(`Incorrecto, te quedan ${attempts} intentos.`);
            if (attempts === 0) {
                updateMessage('Game Over! La palabra era: ' + selectedWord);
                return;
            }
        } else {
            updateGuessedLetters(letter);
        }
    } else {
        updateMessage('Por favor, introduce una letra válida.');
    }
}

function updateGuessedLetters(letter) {
    let hasUpdated = false;

    selectedWord.split('').forEach((char, index) => {
        if (char === letter && guessedLetters[index] === '_') {
            guessedLetters[index] = letter;
            hasUpdated = true;
        }
    });

    document.getElementById('wordToGuess').textContent = guessedLetters.join(' ');

    if (!guessedLetters.includes('_')) {
        updateMessage('¡Felicidades! Has adivinado la palabra.');
    } else if (hasUpdated) {
        updateMessage('Bien hecho, sigue así!');
    }
}

function updateMessage(msg) {
    document.getElementById('message').textContent = msg;
}
