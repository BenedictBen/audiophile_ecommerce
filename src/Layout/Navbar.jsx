import React from 'react'
import { Flex , Box} from '@chakra-ui/react'
// import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box>
            <Text>audiophile</Text>
        </Box>
        <Box>
            asjf
        </Box>
        <Box>
            {/* <Icon as={BsCart3}/> */}
        </Box>
    </Flex>
  )
}

export default Navbar