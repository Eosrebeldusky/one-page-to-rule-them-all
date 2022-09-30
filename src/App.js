import Home from "./Pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Fellowship from "../src/Pages/Fellowship"
import Towers from "./Pages/Towers";
import ReturnKing from "./Pages/ReturnKing";


function App() {
  return (
    <BrowserRouter>
      <h1>One Ring</h1>
      <Home/>
      <Routes>                             
        <Route path="/fellowship" element={<Fellowship/>} exact />       
        <Route path="/fellowship" element={<Towers/>} exact />       
        <Route path="/fellowship" element={<ReturnKing/>} exact />       
          </Routes>            
      </BrowserRouter>
    
  );
}

export default App;
