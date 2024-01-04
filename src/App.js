import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from "./Recipes/Recipes";
import Home from "./Home/Home";
import Plats from "./Plats/Plats";
import Navbar from "../src/Navbar/NavBar";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:categ" element={<Recipes />} />
        <Route exact path="/plats/:id" element={<Plats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
