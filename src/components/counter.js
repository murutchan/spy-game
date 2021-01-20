import React from "react";

const Counter = ({ numOfPlayers, setNumOfPlayers }) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row align-items-center">
          <button
            onClick={() =>
              numOfPlayers > 0 ? setNumOfPlayers(numOfPlayers - 1) : 0
            }
            className="btn btn-outline-primary w-25 ml-5"
          >
            -
          </button>
          <h3 className="mb-0 mx-4">{numOfPlayers}</h3>
          <button
            onClick={() =>
              numOfPlayers < 15 ? setNumOfPlayers(numOfPlayers + 1) : 15
            }
            className="btn btn-outline-primary w-25 "
          >
            +
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
