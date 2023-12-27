import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recipes from './Recipes/Recipes';
import Home from './Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Home />} />
        <Route exact path = '/Recipes' element={<Recipes  />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
