import Home from "./Pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Fellowship from "../src/Pages/Fellowship"

function App() {
  return (
    <BrowserRouter>
      <h1>One Ring</h1>
      <Home/>
      <Routes>                             
        <Route path="/fellowship" element={Fellowship} exact />       
          </Routes>            
      </BrowserRouter>
    
  );
}

export default App;
