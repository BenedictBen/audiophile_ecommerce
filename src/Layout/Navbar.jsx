import React from 'react'
import { Flex, Box, Text, Icon, Show, Center, Divider } from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      {/* // Desktop View */}
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        color="white"
        bg={"#000000"}
        py={"12"}
        px={["12", "16"]}
      >
        <Show above="md">
          <Box>
            <Link to="/">
              <Text
                style={{ fontFamily: "Manrope, sans-serif" }}
                fontSize={["xs", "md", "3xl"]}
              >
                audiophile
              </Text>
            </Link>
          </Box>
          <Flex gap={"12px"}>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/Headphones">HEADPHONES</NavLink>
            <NavLink to="/speakers">SPEAKERS</NavLink>
            <NavLink to="/Earphones">EARPHONES</NavLink>
          </Flex>
          <Box>
            <Icon as={BsCart3} boxSize={"6"} />
          </Box>
        </Show>
      </Flex>
      <Divider orientation="horizontal" colorScheme={"blue"}/>
    </>
  );
}

export default Navbar