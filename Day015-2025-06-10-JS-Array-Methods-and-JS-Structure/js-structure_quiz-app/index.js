import App from "./components/App/App.js";
import { Form } from "./components/Form/Form.js";


// The render function renders the app to the DOM
export default function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
