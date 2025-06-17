export default function App() {

  function handleClick(message) {
    alert(message);
  }

  return (
    <>
      <Button
        text="Black button"
        color="black"
        disabled
        backgroundColor="white"
        onClick={() => handleClick("You clicked the black text button!!")}
      />
      <Button
        text="Blue button"
        color="blue"
        backgroundColor="yellow"
        onClick={() => handleClick("You clicked the blue text button!!")}
      />
      <Button
        text="Red button"
        color="red"
        disabled
        backgroundColor="grey"
        onClick={() => handleClick("You clicked the red text button!!")}
      />
      <Button
        text="Green button"
        color="green"
        backgroundColor="black"
        onClick={() => handleClick("You clicked the green text button!!")}
      />
    </>
  );
}

function Button({ text, color, disabled, backgroundColor, onClick }) {
  
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        height: "6rem",
        borderRadius: "5px",
        fontFamily: "Roboto",
        fontSize: "1.25rem",
        border: "1px solid black",
        padding: "0.75rem 1.5rem",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {text}
    </button>
  );
}
