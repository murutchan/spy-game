import React, { useEffect, useState } from "react";
import imgSecret from "./secret.png";
import spy from "./spy.jpeg"
import "./players.page.styles.css";

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
  };

  //use Effect
  useEffect(() => {
    randomPlayerList();

    setShowWord([...playerList.sort(() => Math.random() - 0.5)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //START A GAME BUTTON
  //This comment was extra
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
        <div className=" player-page mt-5">
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
        <div className=" player-page mt-5 ">
          <h4 className="bg-info border p-3 text-light">
            {showWord[playerNum - 1] === "zayac" ? (
              "You are a SPY 🕵🏻‍♂️"
            ) : (
              <span>
                {" "}
                <span className="text-warning bg-white">
                  {" "}
                  The Secret word is : 🤐{" "}
                </span>{" "}
                <span className="display-4 mt-5">
                  {showWord[playerNum - 1]}
                </span>
              </span>
            )}
          </h4>
          <img
            src={showWord[playerNum - 1] === "zayac" ? spy : imgSecret}
            alt="secret"
            width="70%"
            className="rounded mt-5"
          />
          <button
            className="btn btn-primary d-block w-50 w-75 ml-5 mt-5"
            onClick={(e) => {
              setIsAnswerShown(false);
              nextPlayer(e);
            }}
          >
            {" "}
            OK, got it
          </button>
        </div>
      ) : (
        <div className="container player-page mt-5">
          <h4 className="mb-5">PLAYER--{playerNum}</h4>

          <button
            className="btn btn-outline-danger d-block w-50 w-75 ml-5"
            onClick={() => setIsAnswerShown(true)}
          >
            Show the WORD
          </button>
        </div>
      );
    }
  };

  return playerRender();
};

export default PlayersPage;
