import displayListUI from './displayListUI.js';

const refresh = async () => {
  const id = localStorage.getItem('gameId');

  const list = document.getElementById('list-id');

  const data = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`,
  );

  const response = await data.json();
  list.innerHTML = '';
  displayListUI(response.result);

  return response;
};

export default refresh;
