import { Box, ColorMode, Grid, GridItem, Text } from '@chakra-ui/react'
import { DARK_BG, LIGHT_BG } from 'core/utils/constants'
import Image from 'next/image'

const works = [
  { name: 'Obsidian', image: '/images/home/Obsidian-web.png' },
  { name: 'SP Nutrition', image: '/images/home/SPNutrition-web.png' },
  { name: 'Eclipse', image: '/images/home/Eclipse-web.png' }
]

const WorkGrid = ({ colorMode }: { colorMode: ColorMode }) => {
  return (
    <Grid
      w="100%"
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={2}
    >
      {works.map((work, i) => (
        <GridItem
          key={i}
          h={{ base: 240, md: 350, lg: 500 }}
          p={4}
          display="flex"
          alignItems="stretch"
          justifyContent="center"
          transition="all 0.5s"
          cursor="pointer"
          overflow="hidden"
          pos="relative"
          borderRadius={20}

          // border="2px"
          // borderColor={colorMode === 'light' ? LIGHT_BG : DARK_BG}
        >
          <Text
            pos="relative"
            zIndex={3}
            alignSelf="flex-end"
            justifySelf="flex-start"
            w="100%"
            fontSize="xl"
            fontWeight="bold"
            lineHeight="none"
            color="white"
          >
            {work.name}
          </Text>

          <Box
            bg="linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)"
            height="100%"
            w="100%"
            pos="absolute"
            zIndex={2}
          />

          <Image
            src={work.image}
            alt="obsidian"
            fill
            style={{objectFit:"cover"}}
          />
        </GridItem>
      ))}
    </Grid>
  )
}

export default WorkGrid
