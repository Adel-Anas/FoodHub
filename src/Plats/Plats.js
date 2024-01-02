import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
    <div>
      <h1>Plat</h1>
      <img src={plats.image} alt="" />
      <h3> {plats.name}</h3>
      <li> {plats.instructions}</li>
      <p>{plats.ingredients}</p>
      <Link
        to={`/update/${plats.id}`}
        className="bg-yellow-400 text-white btn btn-sm btn-info me-2 rounded-md"
      >
        Edit
      </Link>
    </div>
  );
}
export default Plats;
