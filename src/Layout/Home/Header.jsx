import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react';
import Hero from "../../assets/home/desktop/image-hero1.png"

const Header = () => {
  return (
    <Flex
      bg={"#000000"}
      alignItems="center"
      justifyContent="space-between"
      px={["12", "16"]}
    >
      <Box color="white">
        <Text>NEW PRODUCT</Text>
        <Heading w={"64"}>XX99 MARK II HEADPHONES</Heading>
        <Text w={"380px"}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </Text>
        <Button>SEE PRODUCT</Button>
      </Box>

      <Box>
        <Image src={Hero} alt="headphone" />
      </Box>
    </Flex>
  );
}

export default Header