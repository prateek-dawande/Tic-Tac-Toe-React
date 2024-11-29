// import React from "react";

// eslint-disable-next-line react/prop-types
const Box = ({ value, onClick, isWinner }) => {
  // Define dynamic background colors for the box based on the value and winner state
  const getBackgroundColor = () => {
    if (isWinner) return "#343a40"; // Dark gray for winning boxes
    if (value === "X") return " #00FF00"; // Dark green for X
    if (value === "O") return "#FF0000"; // Dark red for O
    return "#6c757d"; // Dark gray for empty boxes
  };

  return (
    <button
      className="box btn d-flex justify-content-center align-items-center m-1"
      onClick={onClick}
      disabled={!!value}
      style={{
        height: "100px",
        width: "100px",
        fontSize: "2rem",
        backgroundColor: getBackgroundColor(), // Dynamic background color
        color: "#ffffff", // White text color for better contrast
        border: "2px solid #000",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontWeight: "bold",
      }}
    >
      {value}
    </button>
  );
};

export default Box;
