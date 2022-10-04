import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { GrAdd } from "react-icons/gr";
import { useCard } from "../../contexts/CardsContext";

function CreateCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const [_, dispatch] = useCard();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: firstField.current.value });
    onClose();
  };
  return (
    <>
      <Button leftIcon={<GrAdd />} colorScheme="orange" onClick={onOpen}>
        Create card
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new account
          </DrawerHeader>
          <form onSubmit={handleSubmit}>
            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    ref={firstField}
                    id="cardsname"
                    placeholder="Please enter name of the card"
                  />
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} colorScheme="blue">
                Submit
              </Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CreateCard;
