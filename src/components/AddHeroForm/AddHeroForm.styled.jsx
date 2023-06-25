import styled from "@emotion/styled";
import { Form, Field, ErrorMessage } from "formik";

export const FormWrapper = styled.div`
  margin: 0 auto;
  max-width: 458px;
  padding: 20px;

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
  width: 100%;
  text-align: left;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 9px 15px;
  outline: none;
  border-radius: 40px;
  border: 1px solid #5735a3;
`;

export const FileLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

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

export const ImgWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  > img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  }
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
  left: 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(16 / 12);
  color: #f43f5e;
`;
