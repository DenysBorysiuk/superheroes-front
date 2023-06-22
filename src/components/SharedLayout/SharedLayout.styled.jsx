import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  text-align: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 0;
  margin-bottom: 26px;
  border-bottom: 2px solid #5735a3;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 10px;
  text-decoration: none;
  color: #373737;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;

  will-change: transform;
  transition: transform 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  &.active {
    color: #ebd8ff;
    background-color: #5735a3;
  }
`;
