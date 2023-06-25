import styled from "@emotion/styled";

export const Item = styled.li`
  width: 360px;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;

  transition: box-shadow 300ms ease-in-out;

  :hover,
  :focus {
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);
  }

  > a {
    text-decoration: none;
  }
`;

export const Image = styled.img`
  height: 400px;
`;

export const Title = styled.h2`
  color: #373737;
  font-weight: 500;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  padding: 10px 20px;
`;
