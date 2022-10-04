import { IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { HiOutlineSun } from "react-icons/hi";

function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === "light";
  return (
    <header>
      <IconButton onClick={toggleColorMode} colorScheme="orange">
        {isLight ? <FaRegMoon /> : <HiOutlineSun />}
      </IconButton>
    </header>
  );
}

export default ThemeButton;
