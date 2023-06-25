import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-bottom: 26px;
  width: 190px;
  height: 50px;
  border-radius: 10px;
  text-decoration: none;
  color: #ebd8ff;
  background-color: #5735a3;
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
`;
