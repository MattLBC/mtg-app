import React, { useState } from "react";

interface lifeCounterProps {
  individualPlayerNumber: number;
}

export default function LifeCounter({
  individualPlayerNumber,
}: lifeCounterProps) {
  const [lifeTotal, setLifeTotal] = useState<number>(40);
  const [newLifeTotal, setNewLifeTotal] = useState<string>("");

  const handleLifeTotal = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const activeElement = document.activeElement as HTMLButtonElement | null;

    if (!activeElement) {
      return;
    }

    const buttonValue = activeElement.value;

    if (newLifeTotal === "") {
      return;
    }

    switch (buttonValue) {
      case "set":
        setLifeTotal(Number(newLifeTotal));
        break;
      case "remove":
        setLifeTotal(lifeTotal - Number(newLifeTotal));
        break;
      case "add":
        setLifeTotal(lifeTotal + Number(newLifeTotal));
        break;
      default:
        break;
    }

    setNewLifeTotal("");
  };

  return (
    <div className="life-counter">
      <div className="container-buttons-life">
        <button
          className={`playerButton${individualPlayerNumber}`}
          onClick={() => setLifeTotal(lifeTotal + 1)}
        >
          +
        </button>
        <h1 className="life-total-text">{lifeTotal}</h1>
        <button
          className={`playerButton${individualPlayerNumber}`}
          onClick={() => setLifeTotal(lifeTotal - 1)}
        >
          -
        </button>
      </div>
      <div className="container-buttons">
        <button
          className={`playerButton${individualPlayerNumber}`}
          onClick={() => setLifeTotal(lifeTotal * 2)}
        >
          Double
        </button>
        <button
          className={`playerButton${individualPlayerNumber}`}
          onClick={() => setLifeTotal(Math.round(lifeTotal / 2))}
        >
          Halve
        </button>
      </div>
      <form onSubmit={handleLifeTotal}>
        <input
          className="form-submit-box"
          type="number"
          min="0"
          step="1"
          name="lifeTotalSet"
          onChange={(event) => setNewLifeTotal(event.target.value)}
          value={newLifeTotal}
          placeholder="Change Life Total"
        ></input>
        <div className="container-buttons">
          <button
            type="submit"
            name="submit"
            value="set"
            className={`playerButton${individualPlayerNumber}`}
          >
            Set
          </button>
          <button
            type="submit"
            name="submit"
            value="add"
            className={`playerButton${individualPlayerNumber}`}
          >
            Add
          </button>
          <button
            type="submit"
            name="submit"
            value="remove"
            className={`playerButton${individualPlayerNumber}`}
          >
            Remove
          </button>
        </div>
      </form>
    </div>
  );
}
