import React from 'react'
import { Flex, Box, Text, Icon, Show, Center, Divider,Button,Drawer,DrawerOverlay,DrawerContent,DrawerBody,DrawerHeader,useDisclosure,IconButton } from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {/* // Desktop View */}
      <Show above="lg">
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        color="white"
        bg={"#171717"}
        py={"12"}
        px={"16"}
      >
          <Box>
            <Link to="/">
              <Text
                style={{ fontFamily: "Manrope, sans-serif" }}
                fontSize={["3xl"]}
              >
                audiophile
              </Text>
            </Link>
          </Box>
          <Flex gap={["12px","16px"]}>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/Headphones">HEADPHONES</NavLink>
            <NavLink to="/speakers">SPEAKERS</NavLink>
            <NavLink to="/Earphones">EARPHONES</NavLink>
          </Flex>
          <Box>
            <Icon as={BsCart3} boxSize={"8"} />
          </Box>
      </Flex>
      <Center>
          <Divider orientation="horizontal"/>
      </Center>
        </Show>

        {/* Tablet View */}
        <Show below="lg"> 
          <Flex 
          alignItems="center" 
          justifyContent="space-between" 
          bg="#171717" 
          color="white"
          py={"8"}
          px={"12"}>
          <Flex alignItems="center" justifyContent="center" gap={["4","6"]}>
          <Button variant="unstyled" onClick={onOpen}>
            <Icon as={AiOutlineMenu} boxSize={"6"}/>
          </Button>
          <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex
          justify={"flex-end"}
          mb="24"
          >
            <IconButton
              icon={<AiOutlineClose />}
              mt="2"
              mr="2"
              aria-label="Close Menu"
              size="lg"
              variant="unstyled"
              onClick={onClose}/>
          </Flex>
          <DrawerBody margin="0 auto ">
          <Flex gap={["16"]} flexDirection="column" onClick={onClose}>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/Headphones">HEADPHONES</NavLink>
            <NavLink to="/speakers">SPEAKERS</NavLink>
            <NavLink to="/Earphones">EARPHONES</NavLink>
          </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
           <Link to="/">
              <Text
                style={{ fontFamily: "Manrope, sans-serif" }}
                fontSize={["2xl"]}
              >
                audiophile
              </Text>
            </Link>
            </Flex>
          
          <Box>
            <Icon as={BsCart3} boxSize={"6"} />
          </Box>

          </Flex>
        </Show>
      
    </>
  );
}

export default Navbar