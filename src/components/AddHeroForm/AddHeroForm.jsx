import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/heroes/selectors";
import { addHero } from "../../redux/heroes/operations";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import schema from "../../helpers/schema";
import {
  FormWrapper,
  StyledForm,
  Label,
  Input,
  ImgWrap,
  BtnWrap,
  FileLabel,
  Message,
} from "./AddHeroForm.styled";

const initialValues = {
  nickname: "",
  real_name: "",
  origin_description: "",
  superpowers: "",
  catch_phrase: "",
};

const AddHeroForm = () => {
  const dispatch = useDispatch();
  const IsLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();
  const [files, setfiles] = useState([]);
  const urls = files.map((file) => URL.createObjectURL(file));

  const onSubmit = async (values, { resetForm }) => {
    const formData = new FormData();

    formData.append("nickname", values.nickname.trim());
    formData.append("real_name", values.real_name.trim());
    formData.append("origin_description", values.origin_description.trim());
    formData.append("superpowers", values.superpowers.trim());
    formData.append("catch_phrase", values.catch_phrase.trim());
    files.forEach((file) => formData.append("images", file));

    dispatch(addHero(formData))
      .then((response) => {
        if (!response.error) {
          navigate("/");
          resetForm();
          return;
        }
        return;
      })
      .catch((error) => console.log(error));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <FormWrapper>
        <h1>Add superhero</h1>
        <StyledForm>
          <Label>
            Nickname
            <Input type="text" name="nickname" />
            <Message name="nickname" component="div" />
          </Label>
          <Label>
            Real name
            <Input type="text" name="real_name" />
            <Message name="real_name" component="div" />
          </Label>
          <Label>
            Origin description
            <Input type="text" name="origin_description" />
            <Message name="origin_description" component="div" />
          </Label>
          <Label>
            Superpowers
            <Input type="text" name="superpowers" />
            <Message name="superpowers" component="div" />
          </Label>
          <Label>
            Catch phrase
            <Input type="text" name="catch_phrase" />
            <Message name="catch_phrase" component="div" />
          </Label>
          <FileLabel>
            <span>Upload images</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                const fileList = e.target.files;
                if (fileList.length > 5) {
                  alert(`Only 5 files are allowed to upload.`);
                  e.target.value = null;
                  return;
                }

                if (fileList) {
                  const files = [...fileList];
                  setfiles(files);
                }
              }}
            />
          </FileLabel>
          <ImgWrap>
            {urls.map((url, i) => {
              const filename = files[i].name;
              return <img key={i} src={url} alt={filename} />;
            })}
          </ImgWrap>
          <BtnWrap>
            <Link to="/">Cancel</Link>
            <button type="submit" disabled={IsLoading}>
              Submit
            </button>
          </BtnWrap>
        </StyledForm>
      </FormWrapper>
    </Formik>
  );
};

export default AddHeroForm;
