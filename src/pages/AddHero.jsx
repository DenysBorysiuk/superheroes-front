import { Link } from "react-router-dom";

const AddHero = () => {
  return (
    <div>
      <h1>Add Hero</h1>
      <button>Submit</button>
      <Link to="/">Cancel</Link>
    </div>
  );
};

export default AddHero;
