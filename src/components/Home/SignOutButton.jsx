import { Button } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const SignOutButton = () => {
  const { logout } = useAuth();

  const handleSignOut = () => {
    console.log("handleSignOut");
    logout();
  };
  return <Button onClick={handleSignOut}>Sign out</Button>;
};

export default SignOutButton;
