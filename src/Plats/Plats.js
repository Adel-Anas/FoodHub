import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../Plats/Plats.css"
function Plats() {
  const [plats, setPlats] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMorrocanPlats = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/recipes/${id}`);
        setPlats(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMorrocanPlats();
  }, [id]);

  return (
    <>
       <div className="Plats-page mb-9 relative">
        <div className="image-filter">
          <img src={plats.image} alt="" className="plat-img" />
          <h1 className="text-center text-[40px] font-bold font-['Poppins'] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {plats.name}
          </h1>
        </div>
      </div>

      <div className="ml-6"> 
        <div>
          <h1 className="text-[30px] font-bold font-['Poppins'] ">Description:</h1>
          <p className="text-xl font-light"> {plats.description}</p>
        </div>

        <div className="mt-6">
          <h1  className="text-[30px] font-bold font-['Poppins'] ">Ingredients:</h1>
          <ul className="list-disc">
            {plats.ingredients&& plats.ingredients.map((item)=>{
              return (
                <li className="text-xl pt-3 ml-2" >{item}</li>
              )
            })}
          </ul>
        </div>
        <div className="my-6">
          <h1  className="text-[30px] font-bold font-['Poppins'] "  >The Steps:</h1>
          <ul className="list-decimal ">
              {plats.instructions&& plats.instructions.map((item)=>{
                return (
                  <li className="text-xl pt-3 ml-2" >{item}</li>
                  )
              })}
          </ul>
        </div>
      </div>
      <Link
        to={`/update/${plats.id}`}
        className="bg-lime-700 text-white rounded-lg text-xl font-bold px-8 py-2 ml-3 hover:bg-lime-600 "
        >
        Edit
        </Link>
    </>
  );
}
export default Plats;
