
document.addEventListener('DOMContentLoaded', function () {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const guessInput = document.getElementById('guessInput');
    const submitGuess = document.getElementById('submitGuess');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const restartGame = document.getElementById('restartGame');

    submitGuess.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = 'Please enter a valid number between 1 and 100.';
            feedback.style.color = 'red';
        } else {
            attempts++;
            if (userGuess === randomNumber) {
                feedback.textContent = `Correct! You guessed the number in ${attempts} attempts.`;
                feedback.style.color = 'green';
                restartGame.style.display = 'inline-block';
                submitGuess.disabled = true;
            } else if (userGuess < randomNumber) {
                feedback.textContent = 'Too low! Try again.';
                feedback.style.color = 'orange';
            } else {
                feedback.textContent = 'Too high! Try again.';
                feedback.style.color = 'orange';
            }
            attemptsDisplay.textContent = `Attempts: ${attempts}`;
        }

        guessInput.value = '';
    });

    restartGame.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        feedback.textContent = '';
        attemptsDisplay.textContent = 'Attempts: 0';
        guessInput.value = '';
        restartGame.style.display = 'none';
        submitGuess.disabled = false;
    });
});
