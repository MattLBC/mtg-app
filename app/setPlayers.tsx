"use client";
import React, { useState } from "react";

interface SetPlayersProps {
  setPlayerNumber: React.Dispatch<React.SetStateAction<number>>;
}

export default function SetPlayers({ setPlayerNumber }: SetPlayersProps) {
  return (
    <main>
      <h1>SET PLAYERS</h1>
      <button className="btn-blue-pill" onClick={() => setPlayerNumber(1)}>
        1
      </button>{" "}
      <button className="btn-blue-pill" onClick={() => setPlayerNumber(2)}>
        2
      </button>{" "}
      <button className="btn-blue-pill" onClick={() => setPlayerNumber(3)}>
        3
      </button>{" "}
      <button className="btn-blue-pill" onClick={() => setPlayerNumber(4)}>
        4
      </button>{" "}
      <button className="btn-blue-pill" onClick={() => setPlayerNumber(5)}>
        5
      </button>
    </main>
  );
}
