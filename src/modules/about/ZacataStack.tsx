import { Center, Flex, useColorModeValue } from '@chakra-ui/react'

const ZacataStack = () => {
  const color = useColorModeValue('black', 'gray.100')
  const grayBG = useColorModeValue('gray.50', 'gray.500')

  const items = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'REACT',
    'C#',
    'XAMARIN'
  ]
  return (
    <Flex
      w="90%"
      maxW="49.5em"
      m={{ base: '3em 0', md: '0 0 3em 0' }}
      color={color}
      scrollSnapType="x mandatory"
      gap="0.5em"
      minH="4em"
      pb="0.5em"
      overflowX="auto"
      overflowY="hidden"
    >
      {items.map(e => {
        return (
          <Center
            key={e}
            h="100%"
            minW="12em"
            bg={grayBG}
            borderRadius={8}
            scrollSnapAlign="start"
          >
            <p>{e}</p>
          </Center>
        )
      })}
    </Flex>
  )
}

export default ZacataStack
