"use client";
import React, { useState } from "react";

export default function CommanderDamage() {
  const [commanderDamage, setCommanderDamage] = useState<number>(0);

  return (
    <div>
      <h1>Commander Damage</h1>
      <button
        className="btn-blue-pill"
        onClick={() => setCommanderDamage(commanderDamage + 1)}
        onAuxClick={() => setCommanderDamage(commanderDamage - 1)}
      >
        {commanderDamage}
      </button>
    </div>
  );
}
