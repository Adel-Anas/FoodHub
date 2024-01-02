import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Plats from "../Plats/Plats";

function Recipes(){
    const [recipes , setRecipes] = useState([]);
    const{categ} = useParams();

    // GET ALL DATA  -----------------------------------------------------------------------
 const getMorrocanData = async() => {
            try {
                const response = await axios.get(`http://localhost:4000/recipes?category=${categ}`);
                setRecipes(response.data)
               console.log(response.data.reverse());
                
            } catch (error) {
              console.log(error);  
            }
        }
    useEffect(() =>{
       
    getMorrocanData();
           
    }, []);

    // DELETE  A RECIPE -----------------------------------------------------------------------
 
    const handleDelete =async(id)=>{
        //
        try {
         const result  =await  axios.delete("http://localhost:4000/recipes/" + id )
         console.log(result)
        } catch (error) {
         console.log(error)   
        }
        getMorrocanData()

      }
    return ( 
        <div>
            <h1>Plats {categ}</h1>
           
           {recipes.reverse().map(recipe => (
            <div key={recipe.id}>
                          
                <Link to={`/plats/${recipe.id}`}>{recipe.name}</Link>
                     <button onClick={e =>handleDelete(recipe.id)}>DELETE</button> 
            </div>
           ))}
        </div>
  );
}

export default Recipes;
