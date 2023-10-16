'use client';
import { useState } from "react";

export default function LifeCounter() {
    const [lifeTotal, setLifeTotal] = useState<number>(40); 

    return (
      <div>
         <h1>LIFE COUNTER</h1>
         <h1>{lifeTotal}</h1>
         <button className="btn-blue-pill" onClick={() => setLifeTotal(lifeTotal+1)}>+</button>
         <button className="btn-blue-pill" onClick={() => setLifeTotal(lifeTotal-1)}>-</button>
      </div>
    )
  }