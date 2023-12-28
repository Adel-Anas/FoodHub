import { useEffect } from "react";
import Navbar from "../Navbar/NavBar";
import MorrocanCard from "../Images/MorrocanCard.jpg";
import ItalianFood from "../Images/italian-food.webp";
import GermanFood from "../Images/Food-from-Germany.webp";
import JapaneseFood from "../Images/JapaneseFood.jpg";
import TurkishFood from "../Images/Traditional-Turkish-cuisine.jpg";
import AOS from "aos";

import "aos/dist/aos.css";
import "../Home/Home.css";
import { Link } from "react-router-dom";

function Home() {
  

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <>
      <div className="Landing-page-container">
        <Navbar />
        <div className="Home-Description">
          <div data-aos="fade-up">
            <h1>
              It is even better than <br /> an expensive cookery book
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="250">
            <p>Learn how to make your favorite restaurant’s dishes</p>
          </div>
          <div
            className="home-page-inputs"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <input type="text" placeholder="I Want to make ..." />
            <select name="" id="">
              <option value="">Morrocan</option>
              <option value="">Italien</option>
              <option value="">Japanese</option>
              <option value="">Turkish</option>
            </select>
          </div>
        </div>
      </div>
      <div className="Recipes-Container">
        <div className="recipes-title" data-aos="fade-up">
          <h1>Recipes By Country</h1>
        </div>
        <div
          className="recipes-description"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <p>
            Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui
            officia <br /> deserunmollit anim id est laborum.
          </p>
        </div>

        <div className="recipes-Cards">
          <Link
            to="/recipes/Moroccan"
            className="showoff-card"
            data-aos="fade-up"
          >
            <img src={MorrocanCard} alt="" />
            <p>Morrocan</p>
          </Link>
          <Link
            to="/recipes/Italian"
            className="showoff-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={ItalianFood} alt="" />
            <p>Italian</p>
          </Link>
          <Link
            to="/recipes/German"
            className="showoff-card"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img src={GermanFood} alt="" />
            <p>German</p>
          </Link>
          <Link
            to="/recipes/Japanese"
            className="showoff-card"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <img src={JapaneseFood} alt="" />
            <p>Japanese</p>
          </Link>
          <Link
            to="recipes/Turkish"
            className="showoff-card"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <img src={TurkishFood} alt="" />
            <p>Turkish</p>
          </Link>
        </div>

        <div className="NewsLetter" data-aos="fade-in">
          <div className="NewsLetter-Description">
            <h1>Subscribe to our newsLetter</h1>
            <p>
              Fusce id velit placerat, efficitur libero placerat, sodales ante.{" "}
              <br /> Curabitur sed erosat orci congue vestibulum.
            </p>
          </div>
          <div className="NewsLetter-Button">
            <button>Subscribe</button>
          </div>
        </div>
      </div>

    
    </>
  );
}

export default Home;
