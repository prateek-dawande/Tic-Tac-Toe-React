// import React from "react";

// eslint-disable-next-line react/prop-types
const Message = ({ winner, onReset }) => {
  const getMessage = () => {
    if (winner === "Draw") return "It's a Draw!";
    return `Player ${winner} Wins!`;
  };

  return (
    <div
      className="result-overlay d-flex justify-content-center align-items-center flex-column"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        color: "#fff",
        zIndex: 1000,
        fontSize: "3rem",
        fontWeight: "bold",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <p>{getMessage()}</p>
      <button
        className="btn btn-light mt-4"
        onClick={onReset}
        style={{
          fontSize: "1.5rem",
          padding: "1rem 2rem",
          borderRadius: "10px",
        }}
      >
        Start New Game
      </button>
    </div>
  );
};

export default Message;
