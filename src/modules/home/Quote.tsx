import { ColorMode, Flex, Text } from '@chakra-ui/react'
import { LIGHT_BG, DARK_BG } from '../../utils/constants'

const Quote = ({ colorMode }: { colorMode: ColorMode }) => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      alignItems="center"
      minH={400}
      justifyContent="center"
      border="2px"
      borderColor={colorMode === 'light' ? LIGHT_BG : DARK_BG}
      borderRadius={20}
    >
      <Text>“Well done is better than well said”,</Text>
      <Text color="gray.500">said Benjamin Franklin. </Text>
    </Flex>
  )
}

export default Quote
