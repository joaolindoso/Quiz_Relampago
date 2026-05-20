import { useState } from "react";
import StartScreen from "./components/StartScreen";
import GameScreen from "./screens/GameScreen";
import EndScreen from "./screens/EndScreen";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [score, setScore] = useState(0);
  const TOTAL = 10;

  if (screen === "start")
    return <StartScreen onStart={() => setScreen("game")} />;

  if (screen === "game")
    return (
      <GameScreen
        onEnd={(finalScore) => {
          setScore(finalScore);
          setScreen("end");
        }}
      />
    );

  if (screen === "end")
    return (
      <EndScreen
        score={score}
        total={TOTAL}
        onRestart={() => {
          setScore(0);
          setScreen("start");
        }}
      />
    );

  return null;
}
