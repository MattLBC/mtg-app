import React from "react";
import CommanderDamageCounter from "./commanderDamageCounter";

interface commanderDamageProps {
  totalPlayerNumber: number;
}

export default function CommanderDamage({
  totalPlayerNumber,
}: commanderDamageProps) {
  return (
    <div>
      <h1>Commander Damage</h1>
      {Array.from({ length: totalPlayerNumber }).map((_, index) => (
        <CommanderDamageCounter key={index} index={index}/>
      ))}
    </div>
  );
}
