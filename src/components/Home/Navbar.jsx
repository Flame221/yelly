import {
  Container,
  Box,
  Avatar,
  Button,
  HStack,
  VStack,
  Image,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Link,
  MenuDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useCard } from "../../contexts/CardsContext";
import CreateCard from "./CreateCard";

const IconButton = ({ children }) => {
  return (
    <Button
      padding="0.4rem"
      width="auto"
      height="auto"
      borderRadius="100%"
      bg="transparent"
      _hover={{ bg: "#f6f6f6" }}
    >
      {children}
    </Button>
  );
};

const Navbar = () => {
  const { logout, currentUser } = useAuth();
  const [state, dispatch] = useCard();
  const handleSignOut = () => {
    console.log("handleSignOut");
    logout();
  };
  return (
    <Box
      py="2"
      boxShadow="sm"
      border="0 solid #e5e7eb"
      position="fixed"
      top="0"
      bg={useColorModeValue("gray.100", "gray.900")}
      width="100%"
      zIndex="1"
    >
      <Container maxW="1280px" px={4} mx="auto">
        <HStack spacing={4}>
          <Image
            alt="dev logo"
            w={"auto"}
            h={12}
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          />
          <Input
            maxW="26rem"
            placeholder="Search..."
            borderColor={useColorModeValue("gray.300", "white")}
            borderRadius="5px"
            d={{ base: "none", md: "block" }}
          />
          <Spacer />
          <HStack spacing={3}>
            <CreateCard />
            <Spacer />
            <Menu isLazy>
              <MenuButton as={Button} size="sm" px={0} py={0} rounded="full">
                <Avatar size="sm" />
              </MenuButton>
              <MenuList>
                <Link
                  href="https://github.com/Flame221"
                  _hover={{ textDecoration: "none" }}
                  isExternal
                >
                  <MenuItem>
                    <VStack justify="start" alignItems="left">
                      <Text fontWeight="500">{currentUser.email}</Text>
                    </VStack>
                  </MenuItem>
                </Link>
                <MenuDivider />
                <MenuItem>
                  <Text fontWeight="500">Dashboard</Text>
                </MenuItem>
                <MenuItem>
                  <Text fontWeight="500">Create Post</Text>
                </MenuItem>
                <MenuItem>
                  <Text fontWeight="500">Reading List</Text>
                </MenuItem>
                <MenuItem>
                  <Text fontWeight="500">Settings</Text>
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleSignOut}>
                  <Text fontWeight="500">Sign Out</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
