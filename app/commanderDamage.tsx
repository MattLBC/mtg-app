"use client";
import React, { useState } from "react";

export default function CommanderDamage() {
  const [commanderDamage, setCommanderDamage] = useState<number>(0);

  const commanderDamageClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (event.button === 0) {
      setCommanderDamage(commanderDamage + 1);
    } else {
      commanderDamage <= 0 ? null : setCommanderDamage(commanderDamage - 1);
    }
  };

  return (
    <div>
      <h1>Commander Damage</h1>
      <button
        className="btn-blue-pill"
        onClick={commanderDamageClick}
        onContextMenu={commanderDamageClick}
      >
        {commanderDamage}
      </button>
    </div>
  );
}
