import {
  Grid,
  GridItem,
  GridItemProps,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'

const WorkGrid = () => {
  const bg = useColorModeValue('#00000009', '#FFFFFF09')
  const hoverBg = useColorModeValue('#00000020', '#FFFFFF20')
  const gridItemStyleProps = {
    h: 500,
    bg: bg,
    borderRadius: '2.5em',
    p: '2.5em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s',
    cursor: 'pointer',
    _hover: {
      bg: hoverBg
    }
  }

  return (
    <Grid
      w="100%"
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={4}
      py={4}
    >
      <GridItem colSpan={{ base: 0, md: 2 }} {...gridItemStyleProps}>
        <Text>Project #1: Coming soon...</Text>
      </GridItem>
      <GridItem {...gridItemStyleProps}>
        <Text>Project #2: Coming soon...</Text>
      </GridItem>
      <GridItem {...gridItemStyleProps}>
        <Text>Project #3: Coming soon...</Text>
      </GridItem>
    </Grid>
  )
}

export default WorkGrid
