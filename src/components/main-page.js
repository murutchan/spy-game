import React, { useEffect, useState } from "react";

import Counter from "./counter";
import PlayersPage from "./players-page";
import ZCounter from "./z-counter";

const MainPage = () => {
  const [wordsList, setWordsList] = useState([
    "google",
    "dallas",
    "Mr Joe biden",
    "netflix",
    "tv show office",
    "grand canyon",
    "steve jobs",
    "april 1st",
    "kaynene",
    "Sulaiman too",
    "New York",
    "nivea cosmetics",
    "anekdot",
    "DisneyLand",
    "8-Marta",
    "Bishkek",
    "skripka",
    "butterfly",
    "break dance",
  ]);

  let [currentWord, setCurrentWord] = useState("");
  let [isPlayerShown, setIsPlayerShown] = useState(false);

  let [numOfPlayers, setNumOfPlayers] = useState(3);

  let [numOfZayac, setNumOfZayac] = useState(1);

  //RANDOM WORD PICKER
  // const playerList = [];
  // const randomPlayerList = () => {
  //   for (let i = 0; i < numOfPlayers - numOfZayac; i++) {
  //     playerList.push(currentWord);
  //   }
  //   for (let i = 0; i < numOfZayac; i++) {
  //     playerList.push("zayac");
  //   }
  //   playerList.sort(() => Math.random() * 0.5);

  // };
  useEffect(() => {
    let randomNum = Number(Math.floor(Math.random() * (wordsList.length - 1)));

    setCurrentWord(wordsList[randomNum]);
  }, []);

  //START GAME BUTTON
  const startGame = () => {
    setIsPlayerShown(true);

    console.log("current Word ", currentWord);
    // randomPlayerList();
  };

  return !isPlayerShown ? (
    <React.Fragment>
      {" "}
      <h3> The epic SPY Game</h3>
      <h2 className="mb-5 lg">🕵🏻‍🕵🏻‍♂🕵🏻‍♂️🕵🏻‍♂️🕵🕵🏻‍♂️🕵🏻‍♂️🕵🏻‍♂️</h2>
      <hr className="mb-5" />
      <h5 className="mt-3 mb-4">Select the number of Players🥷🏻</h5>
      <Counter numOfPlayers={numOfPlayers} setNumOfPlayers={setNumOfPlayers} />
      <hr className="my-5" />
      <h5 className="my-4">Select the number of spies🕵</h5>
      <ZCounter numOfZayac={numOfZayac} setNumOfZayac={setNumOfZayac} />
      <button className="btn btn-outline-success mt-5 mb-3" onClick={startGame}>
        {" "}
        START THE GAME{" "}
      </button>
      <hr />
      <p className="bg-gray">
        {" "}
        <em className="text-danger"> RULES OF THE GAME: </em> <br />" Everyone
        will be shown one word (exact same word), except the SPY. Its a game
        where you have a spy who doesnt know the secret word. You go one by one
        & tell sth close (synonym) to the secret word. The spy should try to
        figure out the word.Players vote and if people figure out who is spy,
        spy will have last chance to tell the word. If spy gives correct word,
        spy is the winner, otherwise people win. <br /> GOOD LUCK, SPY"
      </p>
    </React.Fragment>
  ) : (
    <PlayersPage
      currentWord={currentWord}
      numOfPlayers={numOfPlayers}
      numOfZayac={numOfZayac}
      setIsPlayerShown={setIsPlayerShown}
    />
  );
};

export default MainPage;
