import React, { useState } from "react";
import LifeCounter from "./lifeCounter";
import CommanderDamage from "./commanderDamage";

export default function PlayerCard() {
  const [playerName, setPlayerName] = useState<string>("Player Name");
  const [newPlayerName, setNewPlayerName] = useState<string>("");
  const [showNameForm, setShowNameForm] = useState<boolean>(false);

  const handlePlayerName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPlayerName === "") {
      setShowNameForm(false);
      return;
    }
    setPlayerName(newPlayerName);
    setNewPlayerName("");
    setShowNameForm(false);
  };

  function togglePlayerNameForm() {
    setShowNameForm(!showNameForm);
  }

  return (
    <div>
      <h1>{playerName}</h1>

      {showNameForm ? (
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
      ) : (
        <button onClick={() => togglePlayerNameForm()}>Change name</button>
      )}
      <LifeCounter />
      <CommanderDamage />
    </div>
  );
}
