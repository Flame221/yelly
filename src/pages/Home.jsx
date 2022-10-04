import React from "react";
import Main from "../components/Home/Main";
import Navbar from "../components/Home/Navbar";
import { CardProvider } from "../contexts/CardsContext";

const Home = () => {
  return (
    <CardProvider>
      <Navbar />
      <Main />
    </CardProvider>
  );
};

export default Home;
