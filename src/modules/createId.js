const createId = async () => {
  const gameName = document.querySelector('.start-game');

  try {
    const result = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
      {
        method: 'POST',
        body: JSON.stringify({ name: gameName.value }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    const returnedData = await result.json();
    console.log(returnedData);
    return returnedData;
  } catch (e) {
    return e.message;
  }
};

export default createId;
