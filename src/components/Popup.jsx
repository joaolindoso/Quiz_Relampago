import "./Popup.css";

export default function Popup({ message, visible }) {
  return <div className={`popup ${visible ? "show" : ""}`}>{message}</div>;
}
