import useSWR from "swr";

const characterApiUrl = "/api/random-character";

const fetcher = async (characterApiUrl) => {
  const response = await fetch(characterApiUrl);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function HomePage() {
  const { data: characters, isLoading, error } = useSWR(characterApiUrl, fetcher);

if (isLoading) return <p>Loading characters...</p>;
if (error) return <p>Error while fetching characters: {error.message}</p>;

  return (
    <>
      <h1>Random Character</h1>
      <p><strong>Name:</strong> {characters.firstName} {characters.lastName}</p>
      <p><strong>Age:</strong> {characters.age}</p>
      <p><strong>Profession:</strong> {characters.profession}</p>
      <p><strong>Twitter:</strong> {characters.twitterName}</p>
      <p><strong>Geohash:</strong> {characters.geohash}</p>
    </>
  );
}
