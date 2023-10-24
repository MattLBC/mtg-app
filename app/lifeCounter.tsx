"use client";
import React, { useState } from "react";

export default function LifeCounter() {
  const [lifeTotal, setLifeTotal] = useState<number>(40);
  const [newLifeTotal, setNewLifeTotal] = useState<string>("");

  const handleLifeTotal = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newLifeTotal === "") {
      return;
    } else if (document.activeElement.value === "set") {
      setLifeTotal(Number(newLifeTotal));
    } else if (document.activeElement.value === "remove") {
      setLifeTotal(lifeTotal - Number(newLifeTotal));
    } else if (document.activeElement.value === "add") {
      setLifeTotal(lifeTotal + Number(newLifeTotal));
    }
    setNewLifeTotal("");
  };

  return (
    <div className="life-counter">
      <div className="container-buttons-life">
        <button
          className="btn-blue-pill"
          onClick={() => setLifeTotal(lifeTotal + 1)}
        >
          +
        </button>
        <h1 className="life-total-text">{lifeTotal}</h1>
        <button
          className="btn-blue-pill"
          onClick={() => setLifeTotal(lifeTotal - 1)}
        >
          -
        </button>
      </div>
      <div className="container-buttons">
        <button
          className="btn-blue-pill"
          onClick={() => setLifeTotal(lifeTotal * 2)}
        >
          Double
        </button>
        <button
          className="btn-blue-pill"
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
            className="btn-blue-pill"
          >
            Set
          </button>
          <button
            type="submit"
            name="submit"
            value="add"
            className="btn-blue-pill"
          >
            Add
          </button>
          <button
            type="submit"
            name="submit"
            value="remove"
            className="btn-blue-pill"
          >
            Remove
          </button>
        </div>
      </form>
    </div>
  );
}
