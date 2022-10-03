import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const onSubmit = (data) => {
    resetPassword(data.email);
    navigate("/");
  };

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Reset your password</Heading>
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
            </VStack>
            <VStack w="100%">
              <Button type="submit" colorScheme="orange" rounded="md" w="100%">
                Reset
              </Button>
            </VStack>
            <Link to="/login">Back</Link>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};

export default ResetPassword;
