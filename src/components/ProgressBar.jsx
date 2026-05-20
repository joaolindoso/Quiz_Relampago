import "./ProgressBar.css";

export default function ProgressBar({ current, total }) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }} />
    </div>
  );
}
