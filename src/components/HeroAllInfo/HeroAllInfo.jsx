import { useState } from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteHero, updateHero } from "../../redux/heroes/operations";
import schema from "../../helpers/schema";
import {
  FormWrapper,
  StyledForm,
  Label,
  Input,
  BtnWrap,
  Message,
  FileInput,
  ImgWrap,
  DelBtn,
  DelImgBtn,
  Image,
} from "./HeroAllInfo.styled";
import { FaRegTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const HeroAllInfo = ({ hero }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [files, setfiles] = useState([]);
  const [images, setImages] = useState(hero.images);
  const urls = files.map((file) => URL.createObjectURL(file));

  const onDelete = () => {
    dispatch(deleteHero(hero._id))
      .then((response) => {
        if (!response.error) {
          navigate("/");
          return;
        }
        return;
      })
      .catch((error) => console.log(error));
  };

  const onSubmit = (values) => {
    const formData = new FormData();

    formData.append("nickname", values.nickname.trim());
    formData.append("real_name", values.real_name.trim());
    formData.append("origin_description", values.origin_description.trim());
    formData.append("superpowers", values.superpowers.trim());
    formData.append("catch_phrase", values.catch_phrase.trim());
    formData.append("images", JSON.stringify(images));
    files.forEach((file) => formData.append("files", file));

    dispatch(updateHero([hero._id, formData]))
      .then((response) => {
        if (!response.error) {
          toast.success("Hero updated");
          return;
        }
        return;
      })
      .catch((error) => toast.error(error));
  };

  const onDeleteImage = (image) => {
    setImages((prev) => prev.filter((img) => img !== image));
  };

  return (
    <Formik
      initialValues={{
        nickname: hero.nickname,
        real_name: hero.real_name,
        origin_description: hero.origin_description,
        superpowers: hero.superpowers,
        catch_phrase: hero.catch_phrase,
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <FormWrapper>
        <DelBtn type="button" onClick={onDelete}>
          <FaRegTrashAlt size={20} color="red" />
        </DelBtn>
        <StyledForm>
          <Label>
            <span>Nickname:</span>
            <Input type="text" name="nickname" />
            <Message name="nickname" component="div" />
          </Label>
          <Label>
            <span>Real name:</span>
            <Input type="text" name="real_name" />
            <Message name="real_name" component="div" />
          </Label>
          <Label>
            <span>Origin description:</span>
            <Input type="text" name="origin_description" />
            <Message name="origin_description" component="div" />
          </Label>
          <Label>
            <span>Superpowers:</span>
            <Input type="text" name="superpowers" />
            <Message name="superpowers" component="div" />
          </Label>
          <Label>
            <span>Catch phrase:</span>
            <Input type="text" name="catch_phrase" />
            <Message name="catch_phrase" component="div" />
          </Label>
          <Label>
            <span>Upload images</span>
            <FileInput
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
          </Label>
          <ImgWrap>
            {images.map((image) => {
              return (
                <div key={image}>
                  <Image
                    src={`https://superheroes-f2qf.onrender.com/${image}`}
                    alt={image}
                  />
                  <DelImgBtn type="button" onClick={() => onDeleteImage(image)}>
                    <FaRegTrashAlt color="red" />
                  </DelImgBtn>
                </div>
              );
            })}

            {urls.map((url, i) => {
              const filename = files[i].name;
              return <Image key={i} src={url} alt={filename} />;
            })}
          </ImgWrap>
          <BtnWrap>
            <Link to="/">Cancel</Link>
            <button type="submit">Save</button>
          </BtnWrap>
        </StyledForm>
      </FormWrapper>
    </Formik>
  );
};

export default HeroAllInfo;

HeroAllInfo.propTypes = {
  hero: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    real_name: PropTypes.string.isRequired,
    origin_description: PropTypes.string.isRequired,
    superpowers: PropTypes.string.isRequired,
    catch_phrase: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }),
};
