const id = localStorage.getItem('gameId');

// function to addScore
const addScore = async (userObject) => {
  try {
    const data = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(userObject),
      },
    );
    return await data.json();
  } catch (e) {
    return e.message;
  }
};

export default addScore;
