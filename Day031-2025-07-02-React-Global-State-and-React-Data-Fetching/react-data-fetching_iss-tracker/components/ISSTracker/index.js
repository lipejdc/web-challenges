import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

//Fetcher function
const fetcher = async url => {
  const res = await fetch(url)
 
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }
 
  return res.json()
}

export default function ISSTracker() {

  //useSWR hook calls the fetcher function with the URL provided
  //Returns the data. The values behave like state
  const { data, isLoading, error, mutate } = useSWR(URL, fetcher, { refreshInterval: 5000 })

  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
