import { useState } from "react";
import "./StartScreen.css";

export default function StartScreen({ onStart }) {
  const [fade, setFade] = useState(false);

  const handleStart = () => {
    setFade(true);
    setTimeout(onStart, 500);
  };

  return (
    <div className={`start-screen ${fade ? "fade-out" : ""}`}>
      <h1 className="game-title">Quiz Relâmpago</h1>
      <button className="start-btn" onClick={handleStart}>
        Iniciar
      </button>
      <p className="studio">TodayHost Studios</p>
    </div>
  );
}
