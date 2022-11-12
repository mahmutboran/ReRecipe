import React from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.styled";

const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData()
  }

  return (
    <HeaderContainer>
      <MainHeader>Boran APP</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, i) => {
            return (
              <option key={i} value={meal}>
                {meal}
              </option>
            );
          })}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
