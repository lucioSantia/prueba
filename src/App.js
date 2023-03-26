import {Home ,
Landing, 
detailPost,
areaContrato }from "./Views";
import NavBar from "../src/components/NavBar/NavBar"


import { Route, useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  return (
    <div className="App">
       {location.pathname !== "/" && <NavBar />}
      
      <Route exact path="/" render={()=><Landing />}/> 
      <Route path="/home" render={()=> <Home /> }/>
      <Route path="/detail" component={detailPost} />
      <Route path="/contrato" component={areaContrato} />
      

    </div>
  );
}

export default App;
