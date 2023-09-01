import './style.css';
import addScore from './modules/addScore.js';
import createId from './modules/createId.js';
import refresh from './modules/refresh.js';

refresh();

const formStart = document.getElementById('start-form');
const form = document.getElementById('form');
const refreshBtn = document.getElementById('btn-refresh');
const listContainer = document.getElementById('list-container');

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
    const nameInput = document.getElementById('name-input').value;
    const scoreInput = document.getElementById('score').value;

    const userObject = { user: nameInput, score: scoreInput };
    e.preventDefault();
    addScore(userObject);
    form.reset();
  });
});

refreshBtn.addEventListener('click', () => {
  refresh();
  listContainer.style.display = 'block';
});
