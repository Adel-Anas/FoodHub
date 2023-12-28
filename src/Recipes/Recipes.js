import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Recipes(){
    const [recipes , setRecipes] = useState([]);
    const{categ} = useParams();

    useEffect(() =>{
        const getMorrocanData = async() => {
            try {
                const response = await axios.get(`http://localhost:4000/recipes?category=${categ}`);
                setRecipes(response.data)
               console.log(response.data);
                
            } catch (error) {
              console.log(error);  
            }


        }
        
            getMorrocanData();
    }, [categ]);
    return ( 
        <div>
            <h1>Plats {categ}</h1>
           {recipes.map(recipe => (
            <div key={recipe.id}>
                <Link to={`/plats/${recipe.id}`}>{recipe.name}</Link>

            </div>
           ))}
        </div>
     );
}
 
export default Recipes;