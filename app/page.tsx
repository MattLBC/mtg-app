"use client";
import React, { useState } from "react";
import PlayerCard from "./playerCard";
import SetPlayers from "./setPlayers";

export default function Home() {
  const [playerNumber, setPlayerNumber] = useState<number>(0);

  return (
    <main>
      <h1>MAIN</h1>
      {playerNumber === 0 ? (
        <SetPlayers setPlayerNumber={setPlayerNumber} />
      ) : (
        Array.from({ length: playerNumber }).map((_, index) => (
          <PlayerCard
            key={index}
            individualPlayerNumber={index + 1}
            totalPlayerNumber={playerNumber}
          />
        ))
      )}
    </main>
  );
}
