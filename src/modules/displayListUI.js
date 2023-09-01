const list = document.getElementById('list-id');
const listContainer = document.getElementById('list-container');

// Display list UI function
const displayListUI = (data) => {
  listContainer.style.display = 'block';

  if (list) {
    data.forEach((response) => {
      const listItem = document.createElement('li');
      listItem.innerText = `${response.user} : ${response.score}`;
      list.appendChild(listItem);
      listContainer.appendChild(list);
    });
  }
};
export default displayListUI;
