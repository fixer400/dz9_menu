import { NavLink } from "react-router-dom"
export default function Navigation(props){
  const paths = props.paths
  console.log(paths)

  return(
    <nav className="menu">
      {paths.map((e) => <NavLink className="menu__item" to = {e.path}>{e.name}</NavLink>)}
    </nav>
  )
}