import displayListUI from './displayListUI.js';

const refresh = async () => {
  const id = localStorage.getItem('gameId');
  const list = document.getElementById('list-id');
  const listContainer = document.getElementById('list-container');

  const data = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`,
  );

  const response = await data.json();

  // showing the list container dynamically
  if (response.result.length === 0) {
    listContainer.style.display = 'none';
  } else {
    listContainer.style.display = 'block';
  }
  list.innerHTML = '';
  if (id) {
    displayListUI(response.result);
  }
  return response;
};

export default refresh;
