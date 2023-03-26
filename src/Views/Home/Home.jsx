import { Fragment } from "react";
import React from "react";
import SideBar from "../../components/sideBar/SideBar";
import style from "../../components/sideBar/SideBar.module.css"

const Home = () => {
  return (
    <>
       <h1>Home</h1>
      <h2>
        aqui veriamos el componente Navbar, con una searchBar, el logo, acceso o
        informacion de la cuenta, notificaciones del para el usuario, el acceso
        a calificar el trabajo realizado o no. y el acceso al formulario para
        publicar un aviso
      </h2>
      <h2>
        el componente CardsContainer, donde se verian 6 avisos, primero
        determinado, luego los que coincidan con la busqueda. debajo otro
        
      </h2>
      <h2> una sideBar de filtros </h2>
      <h2>footer</h2>
    
<Fragment>
<div className={style.side}>
        
        <SideBar />
       
      </div>
</Fragment>
</>
  );
};

export default Home;
