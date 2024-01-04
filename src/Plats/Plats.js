import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Plats/Plats.css";

function Plats() {
  const [plats, setPlats] = useState([]);
  const [updateRecipe, setUpdateRecipe] = useState(false);
  const { id } = useParams();
  const [values, setValues] = useState({
    category: "",
    name: "",
    ingredients: "",
    instructions: "",
    image:"",
  });

  const openEdit = () => {
    console.log('here',plats.ingredients);
    setValues({
      category: plats.category,
      name: plats.name,
      ingredients: plats.ingredients.join(';'),
      instructions: plats.instructions,
      image: plats.image,
    });
    setUpdateRecipe(true);
  };

  const closeEdit = () => {
    setUpdateRecipe(false);
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:4000/recipes/${id}`, values)
      .then((res) => {
        setPlats(res.data);
        console.log(res);
        setUpdateRecipe(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const getMoroccanPlats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/recipes/${id}`
        );
        setPlats(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMoroccanPlats();
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
          <h1 className="text-[30px] font-bold font-['Poppins'] ">
            Description:
          </h1>
          <p className="text-xl font-light"> {plats.description}</p>
        </div>

        <div className="mt-6">
          <h1 className="text-[30px] font-bold font-['Poppins'] ">
            Ingredients:
          </h1>
          <ul className="list-disc">
            {plats.ingredients &&
              plats.ingredients.map((item) => {
                return <li className="text-xl pt-3 ml-2">{item}</li>;
              })}
          </ul>
        </div>
        <div className="my-6">
          <h1 className="text-[30px] font-bold font-['Poppins'] ">
            The Steps:
          </h1>
          <ul className="list-decimal ">
            {plats.instructions &&
              plats.instructions.map((item) => {
                return <li className="text-xl pt-3 ml-2">{item}</li>;
              })}
          </ul>
        </div>
      </div>
      <button
        className="bg-lime-700 text-white rounded-lg text-xl font-bold px-8 py-2 ml-3 hover:bg-lime-600"
        onClick={openEdit}
      >
        Edit
      </button>

      {updateRecipe && (
        <div className="fixed flex items-center justify-center top-0 left-0 bottom-0 right-0 z-10 bg-[rgb(0,0,0,0.8)] overflow-y-auto pt-24 ">
          <div className="input-container flex flex-col gap-y-3 text-black bg-white p-10 rounded w-[600px] h-auto relative ">
            <p
              className="absolute top-2 right-5 text-2xl font-bold cursor-pointer"
              onClick={closeEdit}
            >
              x
            </p>
            <p className="text-center font-medium text-3xl">UPDATE RECIPE :</p>
            <label className="input-title">Category :</label>
            <select
              name=""
              id=""
              className="text-black border-black border h-12"
              disabled={true}
            >
              <option value="Moroccan">Moroccan</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Turkish">Turkish</option>
              <option value="German">German</option>
            </select>

            <label className="input-title">Name:</label>
            <input
              type="text"
              name="Name"
              className="input"
              value={values.name}
              onChange={(e) => {setValues({...values, name:e.target.value})}}
            />
            <label className="input-title">Ingredients:</label>
            <textarea
              name="ingredients"
              id=""
              cols="7"
              rows="4"
              className="textarea"
              value={values.ingredients}
              onChange={(e) => { setValues({ ...values, instructions: e.target.value.split(";") })}}
            ></textarea>
            <label className="input-title">Instructions:</label>
            <textarea
              name="instructions"
              id=""
              cols="7"
              rows="4"
              className="textarea"
              value={values.instructions}
              onChange={(e) => {setValues({...values, instructions:e.target.value.split(",")})}}
            ></textarea>
            <button
              className="add-recipe"
              onClick={handleUpdate}
              disabled={!values.name || !values.ingredients || !values.instructions}
            >
              <span>Update</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Plats;
