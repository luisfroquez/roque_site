import {
  Center,
  ColorMode,
  Heading,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import { DARK_BG, LIGHT_BG } from 'core/utils/constants'
import WorkGrid from './WorkGrid'

const Work = ({ colorMode }: { colorMode: ColorMode }) => {
  return (
    <Center
      as="div"
      id="work"
      w="100%"
      flexDir="column"
      justifyContent="flex-start"
      gap={2}
    >
      <VStack
        w="100%"
        p={8}
        pt={40}
        alignItems="flex-end"
        border="2px"
        borderColor={colorMode === 'light' ? LIGHT_BG : DARK_BG}
        borderRadius={20}
      >
        <Heading fontSize="4xl" lineHeight="none">
          Ready to see a cool portfolio?
        </Heading>
      </VStack>

      <WorkGrid colorMode={colorMode} />
    </Center>
  )
}

export default Work
