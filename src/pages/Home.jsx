import HeroesList from "../components/HeroesList/HeroesList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroes } from "../redux/heroes/operations";
import { selectTotalPages, selectIsLoading } from "../redux/heroes/selectors";
import Pagination from "@mui/material/Pagination";
import AddBtn from "../components/AddBtn/AddBtn";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchHeroes(page));
  }, [dispatch, page]);

  const handlePageChange = (e, page) => {
    //  scrollIntoView({
    //     block: "start",
    //     behavior: "smooth",
    //   });
    setPage(page);
  };

  return (
    <div>
      <AddBtn />
      {isLoading ? <Loader /> : <HeroesList />}
      {totalPages > 1 && (
        <Pagination
          page={page}
          onChange={handlePageChange}
          count={totalPages}
          size="large"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        />
      )}
    </div>
  );
};

export default Home;
