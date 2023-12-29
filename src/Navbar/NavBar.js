import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import FoodLogo from "../Images/FoodLogo.png";
import { useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [submit, setSubmit] = useState(false);
  const [values, setValues] = useState({
    category: "",
    name: "",
    ingredients: "",
    instructions: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/recipes", values)
      .then((res) => console.log(res.data))

      .catch((err) => console.log(err));
    setValues({
      category: "",
      name: "",
      ingredients: "",
      instructions: "",
    });
  };
  const openModel = () => {
    setSubmit(true);
    document.body.classList.add("overflow-hidden");
  };
  const closeModel = () => {
    setSubmit(false);
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <>
      <div className="Navbar-Container">
        <div className="navbar-Logo">
          <Link to="/">
            <img src={FoodLogo} alt="" />
          </Link>
        </div>
        <div className="Navbar-Content">
          <Link to="/">Home</Link>
          <Link to="/Recipe">Recipes</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/Shop">Shop</Link>
          <button onClick={openModel}>Sumbit Recipe</button>
        </div>
      </div>

      {submit && (
        <div className="fixed flex items-center justify-center top-0 left-0 bottom-0 right-0 z-10 bg-[rgb(0,0,0,0.8)] overflow-y-auto ">
          <div className="input-container flex flex-col gap-y-3 text-black bg-white p-10 rounded w-[500px] h-auto relative">
            <p
              className="absolute top-2 right-5 text-2xl font-bold cursor-pointer"
              onClick={closeModel}
            >
              x
            </p>
            <p className="text-center font-medium text-3xl">ADD A RECIPE :</p>
            <label className="input-title">Category :</label>
            <select
              name=""
              id=""
              className="text-black border-black border h-12"
            >
              <option value="">Morrocan</option>
              <option value="">Italian</option>
              <option value="">Japanese</option>
              <option value="">Turkish</option>
              <option value="">German</option>
            </select>
            <label className="input-title">Name:</label>
            <input type="text" name="Name" className="input" />
            <label className="input-title">Ingredients:</label>
            <textarea
              name="ingredients"
              id=""
              cols="10"
              rows="6"
              className="textarea"
            ></textarea>
            <label className="input-title">Instructions:</label>
            <textarea
              name="instructions"
              id=""
              cols="10"
              rows="6"
              className="textarea"
            ></textarea>
            <button className="add-recipe" onClick={handleClick}>
              <span>ADD</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
