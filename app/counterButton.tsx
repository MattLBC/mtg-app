import React, { useState } from "react";

interface CounterButtonProps {
  index: number | null;
}

export default function CounterButton({ index }: CounterButtonProps) {
  const [counterValue, setCounterValue] = useState<number>(0);

  const counterValueClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (event.button === 0) {
      setCounterValue(counterValue + 1);
    } else {
      counterValue <= 0 ? null : setCounterValue(counterValue - 1);
    }
  };

  if (index === null) {
    return (
      <div className="CommanderDamage">
        <button
          className="CommanderSummonButton"
          onClick={counterValueClick}
          onContextMenu={counterValueClick}
        >
          {counterValue}
        </button>
      </div>
    );
  }

  return (
    <button
      className={`playerButton${index + 1}`}
      onClick={counterValueClick}
      onContextMenu={counterValueClick}
    >
      {counterValue}
    </button>
  );
}
