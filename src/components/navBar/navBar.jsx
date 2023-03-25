import { Link } from "react-router-dom"
import style from "./navBar.module.css"

const navBar =()=>{
    return(
        <div className={style.mainContainer}>
            <Link to="/detail">Aviso</Link>
            

        </div>
    )
}

export default navBar