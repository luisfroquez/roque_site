import {
  Box,
  ColorMode,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react'
import { DARK_BG, LIGHT_BG } from 'core/utils/constants'

const WorkGrid = ({ colorMode }: { colorMode: ColorMode }) => {
  return (
    <Grid
      w="100%"
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={2}
    >
      <GridItem
        h={{ base: 280, md: 350, lg: 500 }}
        p={4}
        display="flex"
        alignItems="stretch"
        justifyContent="center"
        transition="all 0.5s"
        cursor="pointer"
        overflow="hidden"
        pos="relative"
        borderRadius={20}
        border="2px"
        borderColor={colorMode === 'light' ? LIGHT_BG : DARK_BG}
      >
        <Text
          pos="relative"
          zIndex={3}
          alignSelf="flex-end"
          justifySelf="flex-start"
          w="100%"
          fontSize="3xl"
          fontWeight="bold"
          lineHeight="none"
          color="white"
        >
          Obsidian
        </Text>

        <Box
          bg="linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)"
          height="100%"
          w="100%"
          pos="absolute"
          zIndex={2}
        />

        <Image
          src="https://framerusercontent.com/images/whQe7FnpfaBboVEPd6VPBqjmpaw.jpg"
          transition="all 0.5s"
          top={0}
          pos="absolute"
          transform="auto"
          scale={1.1}
        />
      </GridItem>
    </Grid>
  )
}

export default WorkGrid
