import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const Home = lazy(() => import("./pages/Home"));
// const AddHero = lazy(() => import("./pages/AddHero"));
const HeroDetails = lazy(() => import("./pages/HeroDetails"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="/addHero" element={<AddHero />} /> */}
        <Route path="/heroDetails" element={<HeroDetails />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
