import React, { useEffect, useState } from "react";

const PlayersPage = ({
  numOfPlayers,
  numOfZayac,
  setIsPlayerShown,

  currentWord,
}) => {
  let [playerNum, setPlayerNum] = useState(1);
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  let [showWord, setShowWord] = useState([]);

  //
  const playerList = [];
  const randomPlayerList = () => {
    for (let i = 0; i < numOfPlayers - numOfZayac; i++) {
      playerList.push(currentWord);
    }
    for (let i = 0; i < numOfZayac; i++) {
      playerList.push("zayac");
    }
    playerList.sort(() => Math.random() - 0.5);
    console.log(playerList.sort(() => Math.random() - 0.5));
  };

  //use Effect
  useEffect(() => {
    randomPlayerList();
    console.log(playerList);
    setShowWord([...playerList.sort(() => Math.random() - 0.5)]);
  }, []);

  //START A GAME BUTTON
  const startGame = () => {
    setIsPlayerShown(false);
  };

  //Change player button

  const nextPlayer = (e) => {
    e.preventDefault();
    setPlayerNum((playerNum = playerNum + 1));
  };

  //helper function

  const playerRender = () => {
    if (playerNum > numOfPlayers) {
      return (
        <div className="mt-5">
          <h3 className="text-danger mb-5">You are all set :)</h3>
          <button
            className="btn btn-outline-primary d-block w-75 ml-5 my-3"
            onClick={startGame}
          >
            START A NEW GAME{" "}
          </button>
        </div>
      );
    }
    while (playerNum <= numOfPlayers) {
      return isAnswerShown ? (
        <div className="mt-5">
          <h4>
            {showWord[playerNum - 1] === "zayac"
              ? "You are a SPY 🕵🏻‍♂️ , no word for you"
              : "Memorize your word: " + showWord[playerNum - 1]}
          </h4>
          <button
            className="btn btn-outline-primary d-block w-50 w-75 ml-5 mt-5"
            onClick={() => setIsAnswerShown(false)}
          >
            {" "}
            OK, got it
          </button>
        </div>
      ) : (
        <div className="container mt-5">
          <h4 className="mb-5">PLAYER--{playerNum}</h4>

          <button
            className="btn btn-outline-danger d-block w-50 w-75 ml-5"
            onClick={() => setIsAnswerShown(true)}
          >
            Show the WORD
          </button>

          <button
            className="btn btn-outline-primary d-block w-75 ml-5 mt-3"
            onClick={nextPlayer}
          >
            {" "}
            NEXT PLAYER{" "}
          </button>
        </div>
      );
    }
  };

  return playerRender();
};

export default PlayersPage;
