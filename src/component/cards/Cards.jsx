import React from "react";
import { Button, Card, Header, Image, MainContainer } from "./Card.styled";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";

const Cards = ({ recipes }) => {
  console.log(recipes);
  const navigate = useNavigate();
  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, i) => {
        return (
          <Card key={i}>
            <Header>{recipe.label}</Header>
            <Image src={recipe.image || defaultImage} />
            <Button
              onClick={() =>
                navigate("detail", { state: recipe, replace: false })
              }
            >
              View More
            </Button>
          </Card>
        );
      })}
    </MainContainer>
  );
};

export default Cards;
