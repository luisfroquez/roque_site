import { Flex, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import Navbar from './navbar/Navbar'

const Layout = ({ children }: any) => {
  const color = useColorModeValue('gray.900', 'gray.50')
  const bg = useColorModeValue('gray.50', 'black')

  return (
    <Flex
      id="main"
      flexDir="column"
      w="100vw"
      h="100vh"
      backgroundColor={bg}
      color={color}
      transition="all"
      transitionTimingFunction="ease-in-out"
      transitionDuration="1s"
      overflowY="auto"
      overflowX="hidden"
      align="center"
      scrollBehavior="smooth"
      p={2}
      gap={2}
    >
      <Navbar />
      {children}
    </Flex>
  )
}

export default Layout
