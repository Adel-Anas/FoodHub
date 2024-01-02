import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Update() {
  const { id } = useParams();
  const [values, setValues] = useState({
    category: "",
    name: "",
    ingredients: "",
    instructions: "",
  });
  // const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/recipes/${id}`)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:4000/recipes/${id}`, values)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
    window.history.back();
  };
  return (
    <>
      <form onSubmit={handleUpdate}>
        <div className="fixed flex items-center justify-center top-0 left-0 bottom-0 right-0 z-10 bg-[rgb(0,0,0,0.8)] overflow-y-auto ">
          <div className="input-container flex flex-col gap-y-3 text-black bg-white p-10 rounded w-[500px] h-auto relative">
            <p
              onClick={handleUpdate}
              className="absolute top-2 right-5 text-2xl font-bold cursor-pointer"
            >
              x
            </p>
            <p className="text-center font-medium text-3xl">
              Update A RECIPE :
            </p>
            <label className="input-title">Category :</label>
            <select
              name=""
              id=""
              className="text-black border-black border h-12"
              value={values.category}
            >
              <option value="Morrocan">Morrocan</option>
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
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <label className="input-title">Ingredients:</label>
            <textarea
              name="ingredients"
              id=""
              cols="10"
              rows="6"
              className="textarea"
              value={values.ingredients}
              onChange={(e) =>
                setValues({ ...values, ingredients: e.target.value })
              }
            ></textarea>
            <label className="input-title">Instructions:</label>
            <textarea
              name="instructions"
              id=""
              cols="10"
              rows="6"
              className="textarea"
              value={values.instructions}
              onChange={(e) =>
                setValues({ ...values, instructions: e.target.value })
              }
            ></textarea>
            <button
              onClick={handleUpdate}
              className="bg-orange-400 hover:bg-green-600 text-white font-bold  rounded"
            >
              <span>SAVE</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Update;
