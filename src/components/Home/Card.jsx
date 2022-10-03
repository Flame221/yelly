import { Box, Checkbox, Heading, HStack, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Card = ({ title = "Title" }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (c) => {
    c.preventDefault();
    if (newTask) {
      setTasks((e) => [...e, { name: newTask }]);
      setNewTask("");
    }
    console.log("works");
  };
  return (
    <Box
      w={300}
      textAlign="center"
      borderRadius={20}
      bg={"orange.200"}
      color="gray.800"
      p={7}
      m={10}
    >
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
