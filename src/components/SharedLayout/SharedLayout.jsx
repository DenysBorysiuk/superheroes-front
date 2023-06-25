import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <Container>
      <Toaster />
      <Header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </Header>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
