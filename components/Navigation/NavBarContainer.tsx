import { Flex, useColorModeValue } from "@chakra-ui/react"

const NavBarContainer = ({ children, ...extraStyles }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="left"
            wrap="wrap"
            w="100%"
            mb={8}
            p={2}
            bg={useColorModeValue('white', 'gray.900')}
            {...extraStyles}>
            {children}
        </Flex>
    );
}

export default NavBarContainer;