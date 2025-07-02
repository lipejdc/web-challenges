import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  const lightCount = lights.filter((light) => light.isOn).length;
  const isDimmed = lights.every((light) => !light.isOn);

  function handleToggle(idToToggle) {
    setLights(
      lights.map((light) => {
        return light.id === idToToggle
          ? { ...light, isOn: !light.isOn }
          : light;
      })
    );
  }

  function handleLightsOn() {
    setLights((prevLights) =>
      prevLights.map((light) => ({ ...light, isOn: true }))
    );
  }

  function handleLightsOff() {
    setLights((prevLights) =>
      prevLights.map((light) => ({ ...light, isOn: false }))
    );
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        lightCount={lightCount}
        onLightsOn={handleLightsOn}
        onLightsOff={handleLightsOff}
      />
    </Layout>
  );
}
