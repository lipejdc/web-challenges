import Counter from "./components/Counter";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  const handleIncrementClick = () => {
    setPeople((prevPeople) => prevPeople + 1);
  };

  const handleDecrementClick = () => {
    setPeople((prevPeople) => prevPeople - 1);
  };

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        numPeople={people}
        onIncrementPeople={handleIncrementClick}
        onDecrementPeople={handleDecrementClick}
      />
      <p>{people}</p>
    </div>
  );
}
