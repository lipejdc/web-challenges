export default function App() {
  return(
    <>
    <Sum valueA={5} valueB={10}/>
    <Sum valueA={534} valueB={9}/>
    <Sum valueA={234} valueB={123}/>
    <Sum valueA={34573408573498} valueB={329476032478}/>
    </>
  )
}



function Sum( { valueA, valueB }) {
  return <p>{valueA + valueB}</p>
}