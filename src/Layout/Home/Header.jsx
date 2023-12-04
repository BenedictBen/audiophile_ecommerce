import { Box, Button, Flex, Heading, Hide, Show, Text } from '@chakra-ui/react'
import React from 'react'
import Hero from "../../assets/home/desktop/image-hero.jpg"
import '../../App.css'
import Navbar from '../Navbar'

const Header = () => {
  return (
    <>
      {/* DESKTOP VIEW */}
      <Show above="lg">
        <Flex className="desktop">
          <Box
            display={"flex"}
            alignItems="center"
            width="50%"
            justifyContent={"space-between"}
            pl="12"
          >
            <Flex flexDirection={"column"} color="white" gap="8">
              <Text
                style={{
                  letterSpacing: "12px",
                }}
                color="grey"
                fontSize={"20"}
              >
                NEW PRODUCT
              </Text>
              <Heading fontSize={"60"}>XX99 MARK II HEADPHONES</Heading>
              <Text fontSize={"24"} width="44vw">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast
              </Text>
              <Button
                variant="ghost"
                bg="#D87D4A"
                color="#fff"
                size="lg"
                width="20vw"
                height="8vh"
                borderRadius="0"
                // flexShrink={"0"}
              >
                SEE PRODUCT
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Show>

      {/* TABLET VIEW */}
      <Show below="lg">
        <Hide below="md">
          <Flex className="tablet">
            <Box
              display={"flex"}
              alignItems="center"
              width="100%"
              justifyContent={"space-between"}
              color="white"
            >
              <Flex
                flexDirection={"column"}
                //   width="50%"
                margin={"0 auto"}
                gap="7"
                textAlign={"center"}
              >
                <Text
                  fontSize={"16"}
                  color="grey"
                  style={{
                    letterSpacing: "12px",
                  }}
                >
                  NEW PRODUCT
                </Text>
                <Heading fontSize={"56"} width="96">
                  XX99 MARK II HEADPHONES
                </Heading>
                <Text textAlign={"center"} width="360px" margin={"0 auto"}>
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast
                </Text>
                <Button
                  variant="ghost"
                  bg="#D87D4A"
                  color="#fff"
                  size="lg"
                  width="30vw"
                  height="8vh"
                  borderRadius="0"
                  textAlign={"center"}
                  margin="0 auto"
                >
                  SEE PRODUCT
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Hide>
      </Show>
      {/* MOBILE VIEW */}
      <Show below="md">
        <Flex className="mobile">
          <Box
            display={"flex"}
            alignItems="center"
            width="100%"
            justifyContent={"space-between"}
            color="white"
          >
            <Flex
              flexDirection={"column"}
              //   width="50%"
              margin={"0 auto"}
              gap="7"
              textAlign={"center"}
            >
              <Text
                fontSize={"12"}
                color="grey"
                style={{
                  letterSpacing: "12px",
                }}
              >
                NEW PRODUCT
              </Text>
              <Heading fontSize={"44"} width="96">
                XX99 MARK II HEADPHONES
              </Heading>
              <Text textAlign={"center"} fontSize="12" width="320px" margin={"0 auto"}>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast
              </Text>
              <Button
                variant="ghost"
                bg="#D87D4A"
                color="#fff"
                size="lg"
                
                borderRadius="0"
                textAlign={"center"}
                margin="0 auto"
              >
                SEE PRODUCT
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Show>
    </>
  );
}

export default Header;