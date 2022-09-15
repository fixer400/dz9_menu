export default function Article(props){
  return(
    <article className="article">
      <h1 className="article__title">{props.title}</h1>
      {props.children}
    </article>
  )
}