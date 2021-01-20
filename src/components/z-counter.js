import React from "react";

const ZCounter = ({ numOfZayac, setNumOfZayac }) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row align-items-center">
          <button
            onClick={() => (numOfZayac > 0 ? setNumOfZayac(numOfZayac - 1) : 0)}
            className="btn btn-outline-primary w-25 ml-5 "
          >
            -
          </button>
          <h3 className="mb-0 mx-4">{numOfZayac}</h3>
          <button
            onClick={() => (numOfZayac < 5 ? setNumOfZayac(numOfZayac + 1) : 5)}
            className="btn btn-outline-primary w-25 "
          >
            +
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ZCounter;
