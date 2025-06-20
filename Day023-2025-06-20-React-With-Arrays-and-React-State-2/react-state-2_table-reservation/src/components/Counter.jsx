export default function Counter({ numPeople, onIncrementPeople, onDecrementPeople }) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onIncrementPeople}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onDecrementPeople}
          disabled={numPeople === 0}
        >
          -
        </button>
      </div>
    </>
  );
}
