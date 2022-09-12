import {
  Center,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import WorkGrid from './WorkGrid'

const Work = () => {
  const color = useColorModeValue('black', 'gray.100')
  const workColor = useColorModeValue('gray.50', 'gray.500')
  return (
    <Center
      as="div"
      id="work"
      minH="100vh"
      w="100%"
      flexDir="column"
      color={color}
      justifyContent="flex-start"
    >
      <VStack
        mt={{base:"16em", md:"8em"}}
        pos="relative"
        spacing={0}
        alignItems="center"
        justifyContent="center"
        h={{ base: '8rem', md: '10rem' }}
      >
        <Heading fontSize="2rem" lineHeight="2rem" zIndex={1}>
          Let me show you what I do
        </Heading>
        <Text
          fontSize={{ base: '8rem', md: '10rem' }}
          lineHeight={{ base: '8rem', md: '10rem' }}
          fontWeight="bold"
          color={workColor}
          pos="absolute"
        >
          WORK
        </Text>
      </VStack>

      <WorkGrid />
    </Center>
  )
}

export default Work
