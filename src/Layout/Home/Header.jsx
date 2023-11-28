import { Box, Button, Flex, Heading, Image, Text,Show } from '@chakra-ui/react'
import React from 'react';
import Hero from "../../assets/home/desktop/image-hero.jpg"
import Hero1 from "../../assets/home/tablet/image-header.jpg"
import Hero2 from "../../assets/home/mobile/image-header.jpg"

const Header = () => {
  return (
    //  DESKTOP VIEW
    <Box>
    
    <Flex
      alignItems="center"
      justifyContent="space-between"
      display={["none", "none", "none", "block"]}
    >
      {/* {//top={["20","80"]}//} */}
      <Box position={"absolute"}  zIndex={"12"} color={"white"} left={"20"} top="60">
        <Text mb="3">NEW PRODUCT</Text>
        <Heading  mb="5" fontSize={["64px"]} className="break">XX99 MARK II HEADPHONES</Heading>
        <Text w={"380px"} mb="5" fontSize={['lg']}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </Text>
        <Button variant="ghost" bg="#D87D4A" color="#fff" size="lg" borderRadius="0">SEE PRODUCT</Button>
      </Box>

      <Box position={"relative"} zIndex={"0"} >
        <Image src={Hero}  alt="headphone" height="100%"/>
      </Box>
    </Flex>
  
    {/* TABLET VIEW */}
    
        <Flex 
        display={["none", "none", "block", "none"]}
        >
        <Box position="absolute" color="white" zIndex={"12"} top="80" left="60">
          <Text mb="3" textAlign="center" color="grey" style={{
            letterSpacing: '12px'
          }}>NEW PRODUCT</Text>
        <Heading  mb="5" fontSize={["60px"]} textAlign="center" width="440px">XX99 MARK II HEADPHONES</Heading>
        <Text margin="0 auto" textAlign="center" width="380px" color="grey">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </Text>
        <Button 
        variant="ghost" 
        bg="#D87D4A" 
        color="#fff" 
        size="lg" 
        borderRadius="0" 
        mt="8" 
        >SEE PRODUCT</Button>
          </Box>
          <Box position="relative">
            <Image src={Hero1}  alt="headphone" />
          </Box>
        </Flex>
    
    {/* MOBILE VIEW */}
    <Flex display={["block", "block", "none", "none"]} alignItems="center">
          <Box position="absolute" color="white" zIndex={"12"} textAlign="center" top={["80"]}>
          <Text mb="3" textAlign="center" color="grey" style={{
            letterSpacing: '8px'
          }}>NEW PRODUCT</Text>
        <Heading  mb="5" fontSize={["40px"]} textAlign="center">XX99 MARK II HEADPHONES</Heading>
        <Text width="380px" textAlign="center" margin="0 margin">Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast</Text>
         <Button variant="ghost" bg="#D87D4A" color="#fff" size="lg" borderRadius="0" mt="5">SEE PRODUCT</Button>
          </Box>
          <Box position="relative">
            <Image src={Hero2} alt="hero"/>
          </Box>
    </Flex>

    
    </Box>
    
    
    
  );
}

export default Header