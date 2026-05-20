import { useEffect, useState } from "react";
import "./GameScreen.css";
import { questions as baseQuestions } from "../data/questions";
import { shuffle } from "../utils/shuffle";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import Popup from "../components/Popup";

const TOTAL_QUESTIONS = 10;

export default function GameScreen({ onEnd }) {
  const [questions] = useState(() =>
    shuffle(baseQuestions)
      .slice(0, TOTAL_QUESTIONS)
      .map((q) => ({
        ...q,
        options: shuffle(q.options),
      })),
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  const currentQuestion = questions[currentIndex];

  const handleSelect = (option) => {
    if (locked) return;
    setSelectedOption(option);
    setLocked(true);

    const isCorrect = option === currentQuestion.answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setPopupMsg("Resposta correta!");
    } else {
      setPopupMsg("Resposta incorreta!");
    }
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      setSelectedOption(null);
      setLocked(false);

      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        onEnd(score + (isCorrect ? 1 : 0));
      }
    }, 1500);
  };

  return (
    <div className="quiz-screen">
      <h1>Quiz Relâmpago</h1>

      <ProgressBar current={currentIndex} total={questions.length} />

      <p className="question-counter">
        Pergunta {currentIndex + 1} de {questions.length}
      </p>

      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedOption={selectedOption}
        correctAnswer={currentQuestion.answer}
        onSelect={handleSelect}
        locked={locked}
      />

      <Popup message={popupMsg} visible={showPopup} />
    </div>
  );
}
