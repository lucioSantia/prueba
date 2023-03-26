import {Home ,
Landing, 
detailPost,
areaContrato }from "./Views";

import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";


function App() {
  
  return (
    <div className="App">
     <NavBar/>
      <Route exact path="/" render={()=><Landing />}/> 
      <Route path="/home" render={()=> <Home /> }/>
      <Route path="/detail" component={detailPost} />
      <Route path="/contrato" component={areaContrato} />
      

    </div>
  );
}

export default App;
