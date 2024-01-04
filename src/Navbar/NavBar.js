import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import FoodLogo from "../Images/FoodLogo.png";
import { useState } from "react";
import axios from "axios";

const Navbar = ({ getAllData }) => {
  const [submit, setSubmit] = useState(false);
  const [values, setValues] = useState({
    category: "Moroccan",
    name: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  // Upload image to clowdinary -------------------------------------------------
  const [image, setImage] = useState();
  const upload_preset = "ml_default";
  const cloud_name = "dyznlverr";

  const handleFile = async (event) => {
    const file = event.target.files[0];
    // console.log(file)
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset);
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      );
      const data = response.data;
      // console.log(data.secure_url);
      setValues({ ...values, image: data.secure_url });
    } catch (error) {
      console.log(error);
    }
  };

  //  POST DATA -----------------------------------------------------------

  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:4000/recipes", values);
      console.log(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    setValues({
      category: "",
      name: "",
      ingredients: "",
      instructions: "",
    });
    window.location.reload();
    closeModel();
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
      <div className="Navbar-Container absolute z-10">
        <div className="navbar-Logo">
          <Link to="/">
            <img src={FoodLogo} alt="" />
          </Link>
        </div>
        <div className="Navbar-Content">
          <Link to="/">Home</Link>
          <Link to="/">Recipes</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/Shop">Shop</Link>
          <button onClick={openModel}>Sumbit Recipe</button>
        </div>
      </div>

      {submit && (
        <div className="fixed flex items-center justify-center top-0 left-0 bottom-0 right-0 z-10 bg-[rgb(0,0,0,0.8)] overflow-y-auto pt-24 ">
          <div className="input-container flex flex-col gap-y-3 text-black bg-white p-10 rounded w-[600px] h-auto relative ">
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
              onChange={(e) => setValues({ category: e.target.value })}
            >
              <option value="Morrocan">Morrocan</option>
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
              cols="7"
              rows="4"
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
              cols="7"
              rows="4"
              className="textarea"
              value={values.instructions}
              onChange={(e) =>
                setValues({ ...values, instructions: e.target.value })
              }
            ></textarea>
            <label className="input-title">Choose image:</label>
            <input type="file" name="image" onChange={handleFile} />
            <img
              src={values.image}
              alt=""
              className="rounded w-full h-80 scale-100 hover:scale-[1.05] transition-all duration-300"
            />
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
