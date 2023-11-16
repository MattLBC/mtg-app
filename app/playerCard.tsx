import React, { useState } from "react";
import LifeCounter from "./lifeCounter";
import CommanderDamage from "./commanderDamage";
import CommanderSummon from "./counterButton";

interface PlayerCardProps {
  individualPlayerNumber: number;
  totalPlayerNumber: number;
}

export default function PlayerCard({
  individualPlayerNumber,
  totalPlayerNumber,
}: PlayerCardProps) {
  const [playerName, setPlayerName] = useState<string>(
    `Player ${individualPlayerNumber}`
  );
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
      <div className="PlayerNameBox">
        <h1 className="playerName">{playerName}</h1>
        {showNameForm ? (
          <form onSubmit={handlePlayerName}>
            <input
              type="text"
              value={newPlayerName}
              placeholder="Change Name"
              onChange={(event) => setNewPlayerName(event.target.value)}
            ></input>
            <button
              className={`playerButton${individualPlayerNumber}`}
              type="submit"
            >
              Edit
            </button>
          </form>
        ) : (
          <button
            onClick={() => togglePlayerNameForm()}
            className={`playerButton${individualPlayerNumber} playerNameChange`}
          >
            Change name
          </button>
        )}
      </div>
      <div className="PlayerArea">
        <CommanderSummon index={null} />
        <LifeCounter individualPlayerNumber={individualPlayerNumber} />
        <CommanderDamage totalPlayerNumber={totalPlayerNumber} />
      </div>
    </div>
  );
}
