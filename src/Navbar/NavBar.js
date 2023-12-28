import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import FoodLogo from '../Images/FoodLogo.png';
import { useState } from 'react';

const Navbar = () => {
    const [submit, setSubmit] = useState(false);
    return ( 
        <>
            <div className="Navbar-Container">
                <div className='navbar-Logo'>
                    <Link to='/'><img src={FoodLogo} alt="" /></Link>  
                </div>
                <div className='Navbar-Content'>
                    <Link to='/'>Home</Link>
                    <Link to='/Recipe'>Recipes</Link>
                    <Link to='/Blog'>Blog</Link>
                    <Link to='/Shop'>Shop</Link>
                    <button onClick={() =>{setSubmit((prev)=>!prev)}}>Sumbit Recipe</button>
                </div>
            </div>
            
            {submit && (
        <div className="recipe-container fixed bg-black-500 flex items-center justify-center	">
          <div className="recipe-box">
           
              <label>
                Category :
                <select name="" id="">
                  <option value="">Morrocan</option>
                  <option value="">Italien</option>
                  <option value="">Japanese</option>
                  <option value="">Turkish</option>
                  <option value="">German</option>
                </select>
              </label>
              <label>Name:</label>
              <input type='text' value="" name='Name'/>
              <label>ingredients:</label>
              <input type='text' value="" name='ingredients'/>
              <label>instructions:</label>
              <input type='text' value="" name='instructions'/>
           
          </div>
        </div>
      )}
      
        </>
     );
}
 
export default Navbar;