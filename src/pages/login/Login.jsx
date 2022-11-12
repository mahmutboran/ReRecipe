import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.styled";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const userInfo = {
    username: "admin",
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<CW/>"} Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="Enter User Name" type="text" />
          <StyledInput placeholder="Enter Password" type="password" />
          <StyledButton type="submit">LOGİN</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
