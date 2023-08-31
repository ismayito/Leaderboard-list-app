const list = document.getElementById('list-id');
const listContainer = document.getElementById('list-container');

console.log(list);
const displayListUI = (data) => {
  if (list) {
    data.forEach((response) => {
      const listItem = document.createElement('li');
      listItem.innerText = `${response.user}  ${response.score}`;
      list.appendChild(listItem);
      listContainer.appendChild(list);
    });
  }
};
export default displayListUI;
