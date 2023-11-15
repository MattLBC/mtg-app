import React from "react";

interface SetPlayersProps {
  setPlayerNumber: React.Dispatch<React.SetStateAction<number>>;
}

export default function SetPlayers({ setPlayerNumber }: SetPlayersProps) {
  return (
    <main>
      <h1>SET PLAYERS</h1>
      {Array.from({ length: 5 }).map((_, index) => (
        <button
          className="btn-blue-pill"
          onClick={() => setPlayerNumber(index + 1)}
          key={index}
        >
          {index + 1}
        </button>
      ))}
    </main>
  );
}
