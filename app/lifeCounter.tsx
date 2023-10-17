"use client";
import React, { useState } from "react";

export default function LifeCounter() {
  const [lifeTotal, setLifeTotal] = useState<number>(40);
  const [newLifeTotal, setNewLifeTotal] = useState<string>("");

  const handleLifeTotal = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLifeTotal(Number(newLifeTotal));
    setNewLifeTotal("");
  };

  return (
    <div>
      <h1>LIFE COUNTER</h1>
      <h1>{lifeTotal}</h1>
      <button
        className="btn-blue-pill"
        onClick={() => setLifeTotal(lifeTotal + 1)}
      >
        +
      </button>
      <button
        className="btn-blue-pill"
        onClick={() => setLifeTotal(lifeTotal - 1)}
      >
        -
      </button>
      <form onSubmit={handleLifeTotal}>
        <input
          type="number"
          min="0"
          step="1"
          name="lifeTotalSet"
          onChange={event => setNewLifeTotal(event.target.value)}
          value={newLifeTotal}
          placeholder="Set Life Total"
        ></input>
        <br/>
        <button type="submit" className="btn-blue-pill">
          Set
        </button>
      </form>
    </div>
  );
}
