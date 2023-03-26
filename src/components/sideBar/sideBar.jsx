import { Link } from "react-router-dom"
import style from "./SideBar.module.css"

const SideBar =()=>{
    return(
        <div className={style.side}>
            <Link to="/detail">Aviso</Link>
            <Link to="/contrato">Contrato</Link>
            <Link to="/home">Home</Link>
            

        </div>
    )
}

export default SideBar

