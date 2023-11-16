import React from "react";

interface SetPlayersProps {
  setPlayerNumber: React.Dispatch<React.SetStateAction<number>>;
}

export default function SetPlayers({ setPlayerNumber }: SetPlayersProps) {
  return (
    <div className="setPlayerCard">
      <h1 className="SetPlayersTitle">Select Player Number</h1>
      <div className="setPlayerButtons">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            className={`playerButton${index + 1}`}
            onClick={() => setPlayerNumber(index + 1)}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
