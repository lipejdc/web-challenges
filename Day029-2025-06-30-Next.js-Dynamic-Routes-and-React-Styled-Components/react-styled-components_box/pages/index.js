import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStylesComponents from "@/components/BoxWithStyledComponents/BoxWithStylesComponents.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />

      <BoxWithStylesComponents />
      <BoxWithStylesComponents $isBlack />
    </div>
  );
}
