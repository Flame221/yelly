import {
  Box,
  Checkbox,
  Heading,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { useCard } from "../../contexts/CardsContext";

const Card = ({ title = "Title", id }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (c) => {
    c.preventDefault();
    if (newTask) {
      setTasks((e) => [...e, { name: newTask }]);
      setNewTask("");
    }
  };
  const [state, dispatch] = useCard();
  const deleteHandler = (id) => {
    dispatch({ type: "remove", payload: id });
  };
  const handleRename = (id) => {
    console.log("handleRename");
  };
  return (
    <Box
      w={300}
      position="relative"
      textAlign="center"
      borderRadius={20}
      bg={"orange.200"}
      color="gray.800"
      p={7}
      m={10}
    >
      <Menu>
        <MenuButton
          as={IconButton}
          isRound={true}
          icon={<FiMoreVertical size={"20px"} />}
          bg="transparent"
          position="absolute"
          color={"green.900"}
          top={2}
          right={2}
        />
        <MenuList color="white">
          <MenuItem onClick={() => handleRename(id)} icon={<AiOutlineEdit />}>
            Edit name
          </MenuItem>
          <MenuItem color="red" onClick={() => deleteHandler(id)}>
            Remove
          </MenuItem>
        </MenuList>
      </Menu>
      <Heading fontSize="3xl" letterSpacing={10} m={2}>
        {title}
      </Heading>
      {tasks.map((task) => {
        return (
          <HStack
            key={`${task.name}card`}
            h="40px"
            m={1}
            borderRadius={5}
            px={5}
            border={" 1px solid"}
          >
            <Checkbox
              colorScheme={"orange"}
              borderColor="gray.700"
              color="gray.900"
            >
              <Text fontSize="xl">{task.name}</Text>
            </Checkbox>
          </HStack>
        );
      })}
      <form onSubmit={handleSubmit}>
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          borderColor="gray.700"
        />
      </form>
    </Box>
  );
};

export default Card;
