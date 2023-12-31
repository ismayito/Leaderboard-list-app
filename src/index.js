import './style.css';
import addScore from './modules/addScore.js';
import createId from './modules/createId.js';
import refresh from './modules/refresh.js';
import gameForm from './modules/gameForm.js';

const formStart = document.getElementById('start-form');
const form = document.getElementById('form');
const refreshBtn = document.getElementById('btn-refresh');
const listContainer = document.getElementById('list-container');
const formContainer = document.getElementById('form-input');
const id = localStorage.getItem('gameId');

document.addEventListener('DOMContentLoaded', () => {
  refresh();
  gameForm();
  // displays the list UI even onRefresh
  if (id) {
    listContainer.style.display = 'block';
    refresh();
  }

  // save the id of the game in the localStorage
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
        formStart.style.display = 'none';
        formContainer.style.display = 'block';
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
