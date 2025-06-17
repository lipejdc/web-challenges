import "./styles.css";

export default function App() {
  return < Article />
}


function Article() {
  return <article className="article">
    <h2 className="article__title">This is an article, man!</h2>
    <label htmlFor="text-input"></label>
    <input type="text" id="text-input" />
    <a href="#lalala" className="article__link">This is an anchor tag!</a>
  </article>
}