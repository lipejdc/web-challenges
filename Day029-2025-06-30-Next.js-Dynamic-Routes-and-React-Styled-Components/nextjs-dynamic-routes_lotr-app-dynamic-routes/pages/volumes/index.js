import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {

  const router = useRouter();
  console.log("router: ", router);
  const { slug } = router.query;
  console.log("slug: ", slug);

  function getRandomVolume(volume) {
    const randomIndex = Math.floor(Math.random() * volume.length);
    const randomVolume = volume[randomIndex];
    router.push(`/volumes/${randomVolume.slug}`);
  }


  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => getRandomVolume(volumes)}>Go To Random Volume</button>
    </>
  );
}
