import {
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useCard } from "../../contexts/CardsContext";
import ShowUser from "../ShowUser";
import Card from "./Card";

const Main = () => {
  const [state, dispatch] = useCard();
  const handleClick = () => {
    console.log(state);
  };
  return (
    <>
      <VStack mt={20}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          placeItems="center"
          spacing={10}
          mb={4}
        >
          {state.cards.map((e) => (
            <Card key={e.title} title={e.title} />
          ))}
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default Main;
