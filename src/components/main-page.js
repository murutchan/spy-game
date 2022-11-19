import React, { useEffect, useState } from "react";

import Counter from "./counter";
import PlayersPage from "./players-page";
import ZCounter from "./z-counter";

const MainPage = () => {
  const [wordsList] = useState([
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
    "Zero (number)",
    "USSR (sovetskiy soyuz)",
    "Africa",
    "zebra",
    "euro (currency)",
    "Canada goose",
    "mars",
    "BMW car",
    "Iphone 4",
    "tesla",
    "frozen yogurt",
    "UGGs shoes",
    "IKEA",
    "DUD' yura",
    "Sharpie pen",
    "Camry",
    "Hong Kong",
    "chicken tikka masala",
    "A-studio gruppa",
    "Dollar",
    "Snikers chocolate",
    "Orbit gum",
    "Egypt",
    "Turkey",
    "Sweden",
    "ALaska",
    "Columbia brand",
    "D&G brand",
    "french fries",
    "Tetris",
    "Samovar",
    "Green tea",
    "Tom Hanks",
    "Brad Pitt",
    "Tarantino",
    "chess",
    "polar bear",
    "crocodile",
    "thor (marvel hero)",
    "mickey mouse",
    "spider man",
    "batman",
    "superman",
    "Wonder Woman",
    "Aquaman",
    "colgate",
    "Jackie Chan",
    "Moloko",
    "deputat (kyrgyz)",
    "ghost",
    "Vaccine",
    "vitamin D",
    "koidun mayi (sheep's fat)",
    "Big mac (Mc Donald's burger)",
    "Crazy rich Asians (movie)",
    "Santa Barbara (serial)",
    "goroskop",
    "python (snake)",
    "tourism",
    "keyboard",
    "boss",
    "nanny (nyanya)",
    "HERMES (brand)",
  ]);

  let [currentWord, setCurrentWord] = useState("");
  let [isPlayerShown, setIsPlayerShown] = useState(false);

  let [numOfPlayers, setNumOfPlayers] = useState(3);

  let [numOfZayac, setNumOfZayac] = useState(1);

  useEffect(() => {
    let randomNum = Number(Math.floor(Math.random() * (wordsList.length - 1)));

    setCurrentWord(wordsList[randomNum]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //START GAME BUTTON
  const startGame = () => {
    setIsPlayerShown(true);
    let randomNum = Number(Math.floor(Math.random() * (wordsList.length - 1)));

    setCurrentWord(wordsList[randomNum]);
  };

  return !isPlayerShown ? (
    <React.Fragment>
      {" "}
      <h3> The epic SPY Game</h3>
      <h2 className="mb-5 lg">🕵🏻‍🕵🏻‍♂🕵🏻‍♂️🕵🏻‍♂️🕵🕵🏻‍♂️🕵🏻‍♂️🕵🏻‍♂️</h2>
      <hr className="mb-5" />
      <h5 className="mt-3 mb-4">Select the number of Players🤠</h5>
      <Counter numOfPlayers={numOfPlayers} setNumOfPlayers={setNumOfPlayers} />
      <hr className="my-5" />
      <h5 className="my-4">Select the number of spies🕵</h5>
      <ZCounter numOfZayac={numOfZayac} setNumOfZayac={setNumOfZayac} />
      <button className="btn btn-danger mt-5 mb-3" onClick={startGame}>
        {" "}
        START THE GAME{" "}
      </button>
      <hr />
      <p className="bg-gray">
        {" "}
        <em className="text-danger "> RULES OF THE GAME: </em> <br />" Everyone
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
