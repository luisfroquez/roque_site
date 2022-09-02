import { Heading, Text, VStack } from '@chakra-ui/react'
import CoolFrontend from '../../components/Home/coolFrontend'
import ZacataKeyboard from './ZacataKeyboard'

const Home = () => {
  return (
    <VStack minH="100vh" maxH="100vh" w="100%" justify="space-around" id="home">
      <VStack mt={40} spacing={0}>
        <Heading fontSize="3rem" lineHeight="3rem">
          Hello, I'm Luis.
        </Heading>
        <Text fontSize="1rem">{CoolFrontend()}</Text>
      </VStack>
      <ZacataKeyboard />
    </VStack>
  )
}

export default Home
