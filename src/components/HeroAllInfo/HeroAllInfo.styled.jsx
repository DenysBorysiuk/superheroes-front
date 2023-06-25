import styled from "@emotion/styled";
import { Form, Field, ErrorMessage } from "formik";

export const FormWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 700px;
  padding: 50px 20px 20px 20px;

  background-color: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  > h1 {
    margin-bottom: 20px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  > span {
    display: flex;
    justify-content: flex-start;
    width: 30%;
    font-weight: 500;
  }

  > input::file-selector-button {
    padding: 10px 20px;
    outline: none;
    border-radius: 10px;
    border: none;
    background-color: rgba(87, 53, 163, 0.7);
    color: #ebd8ff;
    cursor: pointer;
  }
`;

export const Input = styled(Field)`
  border: none;
  outline: none;
  border-bottom: 1px solid #5735a3;
  width: 50%;
  height: 40px;
`;

export const FileInput = styled.input`
  width: 50%;
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;

  > a {
    padding: 10px 20px;
    border-radius: 10px;
    text-decoration: none;
    color: #373737;
    font-weight: 500;
    font-size: 18px;
    line-height: calc(22 / 18);
    text-transform: uppercase;
    cursor: pointer;
    will-change: transform;
    transition: transform 300ms ease-in-out;

    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }

  > button {
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: calc(22 / 18);
    text-transform: uppercase;
    color: #ebd8ff;
    background-color: #5735a3;
    outline: none;
    border: none;
    cursor: pointer;
    will-change: transform;
    transition: transform 300ms ease-in-out;

    &:hover,
    &:focus {
      transform: scale(1.05);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const Message = styled(ErrorMessage)`
  position: absolute;
  bottom: -15px;
  right: 250px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(16 / 12);
  color: #f43f5e;
`;

export const DelBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
export const DelImgBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
