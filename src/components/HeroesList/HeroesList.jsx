import { useSelector } from "react-redux";
import { selectHeroes } from "../../redux/heroes/selectors";
import { List, Notice } from "./HeroesList.styled";
import { Link, useLocation } from "react-router-dom";

const HeroesList = () => {
  const heroes = useSelector(selectHeroes);
  const location = useLocation();
  console.log(heroes);

  return (
    <List>
      {heroes.length === 0 ? (
        <Notice>list is empty!</Notice>
      ) : (
        heroes.map(({ _id, nickname }) => (
          <li key={_id}>
            <Link to={`/heroDetails/${_id}`} state={{ from: location }}>
              <p>{nickname}</p>
              <button>del</button>
            </Link>
          </li>
        ))
      )}
    </List>
  );
};

export default HeroesList;
