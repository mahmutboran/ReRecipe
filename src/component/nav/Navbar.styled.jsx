import { Link } from "react-router-dom";
import styled from "styled-components";
import Flex from "../globalstyles/Flex.styled";

const Nav = styled(Flex)`
  padding: 1rem 1.5rem;
  /* //! inline style da yapabilriz buradan tekrar yazabilriz  */
  /* justify-content: space-between;
flex-wrap: wrap; */
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
`;

// * Link react router domdan import edip style verebilriz Navbar.jsx de Link Kullandığımız için
export const Brand = styled(Link)`
  color: ${({ theme }) => theme.colors.logocolor};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;

export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;
    max-height: ${({isOpen})=>isOpen ? "400px": "0"};
    overflow: hidden;
  }
`;
export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
  }
`;
export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;

export default Nav;
