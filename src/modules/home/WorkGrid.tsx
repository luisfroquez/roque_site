import { Box, ColorMode, Grid, GridItem, Text } from '@chakra-ui/react'
import { DARK_BG, LIGHT_BG } from 'core/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const works = [
  {
    name: 'SIIM',
    image: '/images/home/Siim-web.png',
    link: 'https://siim-cl.vercel.app/'
  },
  {
    name: 'Obsidian',
    image: '/images/home/Obsidian.png',
    link: 'https://dribbble.com/shots/19700113-Obsidian'
  },
  {
    name: 'SP Nutrition',
    image: '/images/home/SPNutrition.png',
    link: 'https://spnutrition.com.ar/'
  },
  {
    name: 'Eclipse',
    image: '/images/home/Eclipse.png',
    link: 'https://dribbble.com/shots/19700928-Eclipse'
  }
]

const WorkGrid = ({ colorMode }: { colorMode: ColorMode }) => {
  const [hover, setHover] = useState<number | undefined>()
  return (
    <Grid
      w="100%"
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={2}
    >
      {works.map((work, i) => (
        <Link href={work.link ?? ''} target="_blank">
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
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(undefined)}
            border="2px"
            borderColor={colorMode === 'light' ? LIGHT_BG : DARK_BG}
            _hover={{ borderColor: 'gray.500' }}
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
              transition="1.5s"
              bg={
                hover === i
                  ? ''
                  : {
                      base: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                      md: '#00000080'
                    }
              }
              height="100%"
              w="100%"
              top={0}
              pos="absolute"
              zIndex={2}
            />

            <Image
              src={work.image}
              alt="obsidian"
              fill
              style={{
                objectFit: 'cover',
                transition: '1s',
                transform: hover === i ? 'scale(1.125)' : ''
              }}
            />
          </GridItem>
        </Link>
      ))}
    </Grid>
  )
}

export default WorkGrid
