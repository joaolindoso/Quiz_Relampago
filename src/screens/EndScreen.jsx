import "./EndScreen.css";

export default function EndScreen({ score, total, onRestart }) {
  return (
    <div className="end-screen">
      <h1>Fim do Quiz!</h1>
      <p>
        Você acertou <strong>{score}</strong> de <strong>{total}</strong>{" "}
        perguntas.
      </p>
      <button className="restart-btn" onClick={onRestart}>
        Jogar novamente
      </button>
    </div>
  );
}
