import React, { useState } from "react";

interface commanderDamageButtonProps {
  index: number;
}

export default function commanderDamageCounter({
  index,
}: commanderDamageButtonProps) {
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
    <button
      className={`playerButton${index + 1}`}
      onClick={commanderDamageClick}
      onContextMenu={commanderDamageClick}
    >
      {commanderDamage}
    </button>
  );
}