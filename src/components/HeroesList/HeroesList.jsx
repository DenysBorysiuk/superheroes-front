import { useSelector } from "react-redux";
import { selectHeroes } from "../../redux/heroes/selectors";
import { List, Notice } from "./HeroesList.styled";
import HeroesItem from "../HeroesItem/HeroesItem";

const HeroesList = () => {
  const heroes = useSelector(selectHeroes);
  // console.log(heroes);

  return (
    <List>
      {heroes.length === 0 ? (
        <Notice>list is empty!</Notice>
      ) : (
        heroes.map(({ _id, nickname, images }) => (
          <HeroesItem key={_id} _id={_id} nickname={nickname} images={images} />
        ))
      )}
    </List>
  );
};

export default HeroesList;
