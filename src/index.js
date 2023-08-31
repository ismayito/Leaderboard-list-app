import './style.css';
import addScore from './modules/addScore.js';
import createId from './modules/createId.js';
import refresh from './modules/refresh.js';

const formStart = document.getElementById('start-form');
const form = document.getElementById('form');

refresh();

document.addEventListener('DOMContentLoaded', () => {
  if (formStart) {
    formStart.addEventListener('submit', (e) => {
      e.preventDefault();
      let gameId = createId();
      gameId.then((response) => {
        gameId = response.result;
        gameId = gameId.substr(14, 20);

        // store game ID into local storage
        if (gameId) localStorage.setItem('gameId', gameId);
        formStart.reset();
      });
    });
  }

  form.addEventListener('submit', (e) => {
    const nameInput = document.getElementById('name-input').value.trim();
    const scoreInput = document.getElementById('score').value.trim();

    const userObject = { name: nameInput, score: scoreInput };
    console.log(userObject);
    e.preventDefault();
    addScore(userObject);
    form.reset();
  });
});
