import React, { useState } from "react";
import LifeCounter from "./lifeCounter";
import CommanderDamage from "./commanderDamage";
import CommanderSummon from "./counterButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

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

  const handlePlayerName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPlayerName === "") {
      togglePlayerNameForm();
      return;
    }
    setPlayerName(newPlayerName);
    setNewPlayerName("");
    togglePlayerNameForm();
  };

  function togglePlayerNameForm() {
    const playerNameForm = document.getElementById(
      `playerNameForm${individualPlayerNumber}`
    );

    if (playerNameForm) {
      if (playerNameForm.style.display === "block") {
        playerNameForm.style.display = "none";
      } else {
        playerNameForm.style.display = "block";
        const playerNameFormInput = document.getElementById(
          `playerNameFormInput${individualPlayerNumber}`
        );
        if (playerNameFormInput) {
          playerNameFormInput.focus();
        }
      }
    } else {
      console.error("Element not found.");
    }
  }

  return (
    <div>
      <div className="PlayerNameBox">
        <h1 className="playerName">{playerName}</h1>
        <button
          onClick={() => togglePlayerNameForm()}
          className={`playerButton${individualPlayerNumber} playerNameChange dropdown`}
        >
          <FontAwesomeIcon icon={faPencil} className="faButtonIcon" />
        </button>
        <form
          onSubmit={handlePlayerName}
          id={`playerNameForm${individualPlayerNumber}`}
          className="dropdown-content"
        >
          <input
            type="text"
            value={newPlayerName}
            id={`playerNameFormInput${individualPlayerNumber}`}
            placeholder="Change Name"
            onChange={(event) => setNewPlayerName(event.target.value)}
          ></input>
          <button
            className={`playerButton${individualPlayerNumber}`}
            type="submit"
          >
            <FontAwesomeIcon icon={faPencil} className="faButtonIcon" />
          </button>
        </form>
      </div>
      <div className="PlayerArea">
        <CommanderSummon index={null} />
        <LifeCounter individualPlayerNumber={individualPlayerNumber} />
        <CommanderDamage totalPlayerNumber={totalPlayerNumber} />
      </div>
    </div>
  );
}
