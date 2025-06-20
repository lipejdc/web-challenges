import Card from "./components/Card";
import { fruits } from "../src/utils/fruits.js";

export default function App() {
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card id={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
