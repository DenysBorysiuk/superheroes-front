import * as yup from "yup";

const schema = yup.object().shape({
  nickname: yup.string().min(3).required("Nickname is required"),
  real_name: yup.string().min(3).required("Real name is required"),
  origin_description: yup
    .string()
    .min(3)
    .required("Origin description is required"),
  superpowers: yup.string().min(3).required("Superpowers is required"),
  catch_phrase: yup.string().min(3).required("Catch phrase is required"),
});

export default schema;
