import displayListUI from './displayListUI.js';

const refresh = async () => {
  const id = localStorage.getItem('gameId');
  const refreshBtn = document.getElementById('btn-refresh');
  const list = document.getElementById('list-id');

  const data = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`,
  );

  const response = await data.json();
  refreshBtn.addEventListener('click', () => {
    list.innerHTML = '';
    displayListUI(response.result);
  });
  return response;
};

export default refresh;
