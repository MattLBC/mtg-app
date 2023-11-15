import React, { useState } from "react";
import LifeCounter from "./lifeCounter";
import CommanderDamage from "./commanderDamage";

export default function PlayerCard() {
  const [playerName, setPlayerName] = useState<string>("Player Name");
  const [newPlayerName, setNewPlayerName] = useState<string>("");

  const handlePlayerName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPlayerName(newPlayerName);
    setNewPlayerName("");
  };

  return (
    <div>
      <h1>{playerName}</h1>
      <form onSubmit={handlePlayerName}>
        <input
          type="text"
          value={newPlayerName}
          placeholder="Change Name"
          onChange={(event) => setNewPlayerName(event.target.value)}
        ></input>
        <button className="btn-blue-pill" type="submit">
          Edit
        </button>
      </form>
      <LifeCounter />
      <CommanderDamage />
    </div>
  );
}
