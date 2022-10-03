import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/");
    } catch (error) {
      console.log("login error: " + error);
    }

    console.log(data.email);
    console.log(data.password);
  };

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Sign in to Yelly</Heading>
          </Stack>
          <VStack
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            p={{ base: 5, sm: 10 }}
            spacing={8}
          >
            <VStack spacing={4} w="100%">
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  rounded="md"
                  type="email"
                  {...register("email", { required: true })}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    rounded="md"
                    {...register("password", { required: true })}
                    type={show ? "text" : "password"}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      rounded="md"
                      colorScheme="orange"
                      onClick={handleClick}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justify="space-between" w="100%">
                <Spacer />
                <Link to="/reset-password" fontSize={{ base: "md", sm: "md" }}>
                  Forget the password?
                </Link>
              </Stack>
              <Button type="submit" colorScheme="orange" rounded="md" w="100%">
                Sign in
              </Button>
            </VStack>
            <Link to="/signup">Create an account.</Link>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};

export default Login;
