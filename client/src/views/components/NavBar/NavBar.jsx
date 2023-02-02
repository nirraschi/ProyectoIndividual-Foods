import { Link } from "react-router-dom"
import style from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={style.mainContainer}>
            <Link to="/home" className={style.text}>Home</Link>
            <Link to="/create" className={style.text}>Create!</Link>
        </div>
    )
}

export default NavBar;