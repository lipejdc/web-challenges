export default function App() {
  return(
    <>
    <Smiley isHappy/>
    <Smiley isHappy={false}/>
    </>
  ) 
}



function Smiley( { isHappy }) {
  return <article>{isHappy ? ":)" : ":("}</article>
}