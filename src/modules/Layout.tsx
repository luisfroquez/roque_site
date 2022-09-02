import { Flex, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import Navbar from './navbar/Navbar'

const Layout = ({ children }: any) => {
  const color = useColorModeValue('black', 'white')
  const bg = useColorModeValue('white', 'black')
  const [isLTmd] = useMediaQuery('(min-width: 48em)')

  return (
    <Flex
      flexDir="column"
      w="100vw"
      h="100vh"
      bg={bg}
      color={color}
      transition="all"
      transitionDuration="1s"
      overflow="auto"
      align="center"
      scrollBehavior="smooth"
    >
      <Navbar />
      {children}
    </Flex>
  )
}

export default Layout
