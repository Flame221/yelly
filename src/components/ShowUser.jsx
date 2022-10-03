import { Button } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const ShowUser = () => {
  const { currentUser } = useAuth();
  const showUser = () => {
    console.log(currentUser);
  };
  return <Button onClick={showUser}>Show user</Button>;
};

export default ShowUser;
