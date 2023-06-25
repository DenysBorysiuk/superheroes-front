import HeroAllInfo from "../components/HeroAllInfo/HeroAllInfo";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectHeroes } from "../redux/heroes/selectors";

const HeroDetails = () => {
  const { heroId } = useParams();
  const heroes = useSelector(selectHeroes);
  const hero = heroes.find((hero) => hero._id === heroId);

  return <HeroAllInfo hero={hero} />;
};

export default HeroDetails;
