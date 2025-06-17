export default function App() {
  return (
    <>
      <Greeting name="Felipe" />
      <Greeting name="Roland" />
    </>
  );
}

function Greeting({ name }) {
  return <span>Hello, {name === "Roland" ? "Coach" : name}!</span>;
}
