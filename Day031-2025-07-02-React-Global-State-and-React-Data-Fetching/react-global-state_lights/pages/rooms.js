import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({ lights, toggleLight, onToggle }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Rooms</h1>
      <Lights lights={lights} toggleLight={toggleLight} onToggle={onToggle} />
    </>
  );
}
