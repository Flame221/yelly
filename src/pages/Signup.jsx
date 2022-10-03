import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const { signup, currentUser } = useAuth();
  const onSubmit = (data) => {
    console.log(currentUser);
    if (data.password == data.confirmpassword) {
      signup(data.email, data.password).then(() => {
        navigate("/");
      });
    } else {
      console.log("passwords do not match");
    }
  };

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Create a new account</Heading>
          </Stack>
          <VStack
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            p={{ base: 5, sm: 10 }}
            spacing={5}
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
                </InputGroup>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    rounded="md"
                    {...register("confirmpassword", { required: true })}
                    type={show ? "text" : "password"}
                  />
                </InputGroup>
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Button type="submit" colorScheme="orange" rounded="md" w="100%">
                Sign up
              </Button>
            </VStack>
            <Link to="/login">Back</Link>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};

export default Signup;
