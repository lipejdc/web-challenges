import avatar from "../img/avatar.jpg";
import Image from "./Image";

export default function Avatar() {
  return (
    <>
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <Image src={avatar} alt="avatar"/>
      </button>
    </>
  );
}
