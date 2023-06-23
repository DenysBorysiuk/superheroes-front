import { Link } from "react-router-dom";
import HeroesList from "../components/HeroesList/HeroesList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchHeroes } from "../redux/heroes/operations";
// import { selectError, selectIsLoading } from "redux/selectors";

const Home = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);

  return (
    <div>
      <Link to="/addHero">AddHero</Link>
      <HeroesList />
    </div>
  );
};

export default Home;
