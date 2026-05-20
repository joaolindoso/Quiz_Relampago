import "./QuestionCard.css";

export default function QuestionCard({
  question,
  options,
  selectedOption,
  correctAnswer,
  onSelect,
  locked,
}) {
  const getClass = (option) => {
    if (!locked) return "";
    if (option === correctAnswer) return "correct";
    if (option === selectedOption && option !== correctAnswer) return "wrong";
    return "";
  };

  return (
    <div className="question-card">
      <h2 className="question-text">{question}</h2>
      <div className="options">
        {options.map((opt) => (
          <button
            key={opt}
            className={`option-btn ${getClass(opt)}`}
            onClick={() => !locked && onSelect(opt)}
            disabled={locked}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
