import "./Card.css";

export default function Card({ name, color }) {
  const backgroundColorClass = `card card--${color}`;
  return <p className={backgroundColorClass}>{name}</p>;
}
