import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Item, Image, Title } from "./HeroesItem.styled";

const HeroesItem = ({ nickname, _id, images }) => {
  const location = useLocation();

  return (
    <Item>
      <Link to={`/heroDetails/${_id}`} state={{ from: location }}>
        <Image
          src={
            images.length === 0
              ? "https://placehold.co/400?text=No+image"
              : `https://superheroes-f2qf.onrender.com/${images[0]}`
          }
          alt={nickname}
        />
        <Title>{nickname}</Title>
      </Link>
    </Item>
  );
};

export default HeroesItem;

HeroesItem.propTypes = {
  nickname: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
