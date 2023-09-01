const formStart = document.getElementById('start-form');
const form = document.getElementById('form-input');
const id = localStorage.getItem('gameId');

const gameForm = () => {
  if (id) {
    formStart.style.display = 'none';
    form.style.display = 'block';
  } else {
    formStart.style.display = 'block';
    form.style.display = 'none';
  }
};
export default gameForm;
