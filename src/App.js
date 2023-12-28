import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recipes from './Recipes/Recipes';
import Home from './Home/Home';
import NotFound from './NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Home />} />
        <Route exact path = '/Recipes' element={<Recipes  />}  />
        <Route exact path ='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
