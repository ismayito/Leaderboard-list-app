import displayListUI from './displayListUI.js';

const refresh = async () => {
  const id = localStorage.getItem('gameId');
  const refreshBtn = document.getElementById('btn-refresh');
  const listContainer = document.getElementById('list-container');

  const data = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AVdkzz5NAIgs0R81WwJw/scores`
  );

  const response = await data.json();
  console.log(response);
  refreshBtn.addEventListener('click', () => {
    console.log(response.result);
    listContainer.innerHTML = '';
    displayListUI(response.result);
  });
  return response;
};

export default refresh;
