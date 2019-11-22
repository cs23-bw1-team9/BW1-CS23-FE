import React from "react";

function Data({ gameData }) {
  console.log("gamedata", gameData);
  return (
    <div className="data-container">
      <div className="data-inner-container">
        <h1 className="player-name-head">Player Name:</h1>
        <h2 className="playerName"> {gameData.name}</h2>
        <h1 className="room-name-head">Room:</h1>
        <h2 className="playerName"> {gameData.title}</h2>
        <h1 className="room-description-head">Description:</h1>
        <h2 className="playerName"> {gameData.description}</h2>
      </div>
    </div>
  );
}

export default Data;
//   <h1 className="other-players-head">Other Players In Room:</h1>
//   <h2 className="playerName"> {gameData.players}</h2>
