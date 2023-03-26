import { Link } from "react-router-dom"
import style from "./NavBar.module.css"

const NavBar =()=>{
    return(
        <div className={style.mainContainer}>
            <Link to="/detail">Aviso</Link>
            <Link to="/contrato">Contrato</Link>
            <Link to="/home">Home</Link>
            

        </div>
    )
}

export default NavBar