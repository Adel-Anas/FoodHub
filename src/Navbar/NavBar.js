import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import FoodLogo from '../Images/FoodLogo.png';
import { useState } from 'react';
import axios from 'axios';

const Navbar = () => {
    const [submit, setSubmit] = useState(false);
    const [values , setValues] = useState({
        category:"",
        name:"",
        ingredients:"",
        instructions:""

    })


    const handleClick =(e) =>{
       e.preventDefault()
        axios.post("http://localhost:4000/recipes" , values)
        .then(res =>console.log(res.data) )
        
        .catch(err => console.log(err))
        setValues({
            category:"",
            name:"",
            ingredients:"",
            instructions:""
        })
    }
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
           <form onSubmit={handleClick}>

           
              <label>
                Category :
                <select name="" id=""  onChange={e=> setValues({...setValues , category:e.target.value})}>
                  <option value="">Morrocan</option>
                  <option value="">Italien</option>
                  <option value="">Japanese</option>
                  <option value="">Turkish</option>
                  <option value="">German</option>
                </select>
              </label>
              <label>Name:</label>
              <input type='text'  name='name' onChange={e => setValues({...setValues , name:e.target.value})}/>
              <label>ingredients:</label>
              <input type='text'  name='ingredients' onChange={e => setValues({...setValues , ingredients:e.target.value})}/>
              <label>instructions:</label>
              <input type='text'  name='instructions' onChange={e => setValues({...setValues , instructions:e.target.value})}/>
              
              <button>Add new recipe</button>
           </form>
          </div>
        </div>
      )}
      
        </>
     );
}
 
export default Navbar;