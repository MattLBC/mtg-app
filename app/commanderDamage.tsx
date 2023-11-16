import React from "react";
import CounterButton from "./counterButton";

interface commanderDamageProps {
  totalPlayerNumber: number;
}

export default function CommanderDamage({
  totalPlayerNumber,
}: commanderDamageProps) {
  return (
    <div className="CommanderDamage">
      {Array.from({ length: totalPlayerNumber }).map((_, index) => (
        <CounterButton key={index} index={index} />
      ))}
    </div>
  );
}
