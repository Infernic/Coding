let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const restartBtn = document.getElementById('restart');

submitGuess.addEventListener('click', function() {
  const userGuess = Number(guessInput.value);
  if (isNaN(userGuess) || guessInput.value === '') {
    feedback.textContent = '⚠️ Please enter a valid number!';
    feedback.style.color = 'red';
    document.body.style.backgroundColor = '#FFCC00';
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    feedback.textContent = `🎉 Correct! The number was ${randomNumber}`;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    submitGuess.disabled = true;
    restartBtn.style.display = 'block';
    feedback.style.color = 'black';
    document.body.style.backgroundColor = '#32CD32';
  } else if (userGuess < randomNumber) {
    feedback.textContent = '📉 Too low! Try again.';
    feedback.style.color = 'black';
    document.body.style.backgroundColor = '#E93E67';
  } else if (userGuess > randomNumber) {
    feedback.textContent = '📈 Too high! Try again.';
    feedback.style.color = 'black';
    document.body.style.backgroundColor = '#319FE7';
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = '';
  guessInput.focus();
});

restartBtn.addEventListener('click', function() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  feedback.textContent = '';
  attemptsDisplay.textContent = '';
  guessInput.value = '';
  submitGuess.disabled = false;
  restartBtn.style.display = 'none';
});
