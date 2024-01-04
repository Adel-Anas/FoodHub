import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../Recipes/Recipes.css";
import Navbar from "../Navbar/NavBar";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const { categ } = useParams();



  // GET ALL DATA  -----------------------------------------------------------------------
  const getAllData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/recipes?category=${categ}`
      );
      setRecipes(response.data);
      console.log(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllData();
  }, []);

  // DELETE  A RECIPE -----------------------------------------------------------------------

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/recipes/${id}`);
      getAllData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="Recipe-page">
        <Navbar getAllData={getAllData} />
        <h1 className="text-center pt-44 text-white text-[60px] font-bold font-['Poppins'] ">
          Category : {categ}
        </h1>
      </div>

      <div className="flex w-full items-center justify-center   ">
        <div className=" grid grid-cols-3 w-4/5	gap-9	">
          {recipes.reverse().map((recipe, id) => {
            return (
              <div key={id}>
                <div className="nav-recipe-page w-[400px] h-[500px] bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden">
                  <div>
                    <Link to={`/plats/${recipe.id}`}>
                      <img
                        className="rounded w-full h-80 scale-100 hover:scale-[1.05] transition-all duration-300"
                        src={recipe.image}
                        alt=""
                      />
                    </Link>
                    <div className="p-5">
                    <Link to={`/plats/${recipe.id}`}>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-lime-600 hover:cursor-pointer	">
                        {recipe.name}
                      </h5>
                      </Link>
                    </div>
                  </div>
                  <div className="p-5">
                    <button
                      onClick={(e) => handleDelete(recipe.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Recipes;
