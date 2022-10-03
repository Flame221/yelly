import { Button, Heading, VStack } from "@chakra-ui/react";
import React, { useReducer } from "react";
import Card from "../components/Home/Card";
import Main from "../components/Home/Main";
import Navbar from "../components/Home/Navbar";
import ShowUser from "../components/ShowUser";
import { useAuth } from "../contexts/AuthContext";
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
