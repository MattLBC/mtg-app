import React from "react";
import LifeCounter from "./lifeCounter";
import CommanderDamage from "./commanderDamage";

export default function PlayerCard() {
  return (
    <div>
      <h1>PLAYER CARD</h1>
      <LifeCounter />
      <CommanderDamage />
    </div>
  );
}
