import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../../component/cards/Cards";
import Header from "../../component/header/Header";
import { HeaderText, HomeImg, ImgDiv } from "./Home.styled";
import homeSvg from "../../assets/home.svg";
const Home = () => {
  const APP_ID = process.env.REACT_APP_APP_ID
  const APP_KEY = process.env.REACT_APP_APP_KEY
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "TeaTime"];
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Fill the Form");
    }
  };
  console.log(recipes);

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}

      {recipes?.length === 0 && (
        <HeaderText>The Food can not be food</HeaderText>
      )}
      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;
