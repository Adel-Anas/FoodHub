import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import FoodLogo from '../Images/FoodLogo.png'

const Navbar = () => {
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
                    <button>Sumbit Recipe</button>
                </div>
            </div>
        </>
     );
}
 
export default Navbar;