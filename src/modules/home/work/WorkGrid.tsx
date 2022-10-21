import { Grid, GridItem, Image, useColorModeValue } from '@chakra-ui/react'
import React, { RefObject, useEffect, useRef, useState } from 'react'

const WorkGrid = () => {
  const image1 = useRef<HTMLImageElement>(null)
  const image2 = useRef<HTMLImageElement>(null)
  const image3 = useRef<HTMLImageElement>(null)
  const gridItem1 = useRef<HTMLDivElement>(null)
  const gridItem2 = useRef<HTMLDivElement>(null)
  const gridItem3 = useRef<HTMLDivElement>(null)

  const bg = useColorModeValue('#00000009', '#FFFFFF09')
  const color = useColorModeValue('#00000015', '#FFFFFF25')

  const [hover, setHover] = useState(0)

  const gridItemStyleProps = {
    h: { base: 280, md: 350, lg: 500 },
    bg: bg,
    borderRadius: '2.5em',
    p: '2.5em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s',
    cursor: 'pointer'
  }

  function handleMove(e: any, ref: RefObject<HTMLImageElement>) {
    const height = ref.current?.clientHeight ?? 0
    const width = ref.current?.clientWidth ?? 0
    const xVal = e.layerX
    const yVal = e.layerY

    const yRotation = 20 * ((xVal - width / 2) / width)
    const xRotation = -20 * ((yVal - height / 2) / height)

    const string =
      'perspective(500px) scale(1.2) rotateX(' +
      xRotation +
      'deg) rotateY(' +
      yRotation +
      'deg)'

    if (ref.current) {
      ref.current.style.transform = string
    }
  }

  useEffect(() => {
    applyOverflowVisible(hover)
  }, [hover])

  const applyOverflowVisible = (hover: number) => {
    if (gridItem1.current && gridItem2.current && gridItem3.current) {
      switch (hover) {
        case 1:
          setTimeout(
            () =>
              gridItem1.current &&
              (gridItem1.current.style.overflow = 'visible'),
            300
          )
          break
        case 2:
          setTimeout(
            () =>
              gridItem2.current &&
              (gridItem2.current.style.overflow = 'visible'),
            300
          )
          break
        case 3:
          setTimeout(
            () =>
              gridItem3.current &&
              (gridItem3.current.style.overflow = 'visible'),
            300
          )
          break

        default:
          gridItem1.current.style.overflow = 'hidden'
          gridItem2.current.style.overflow = 'hidden'
          gridItem3.current.style.overflow = 'hidden'
          break
      }
    }
  }

  return (
    <Grid
      w="100%"
      templateColumns="repeat(1, 1fr)"
      gap={{ base: 8, md: 40 }}
      py={4}
    >
      <GridItem
        ref={gridItem1}
        {...gridItemStyleProps}
        pos="relative"
        onMouseEnter={() => {
          if (image1.current) {
            image1.current.addEventListener('mousemove', e =>
              handleMove(e, image1)
            )
            image1.current.style.bottom = '7.5%'
            setHover(1)
          }
        }}
        onMouseLeave={() => {
          if (image1.current) {
            image1.current.style.transform = ''
            image1.current.style.bottom = '-40%'
            image1.current.removeEventListener('mousemove', e =>
              handleMove(e, image1)
            )
            setHover(0)
          }
        }}
        overflow="hidden"
        color="red"
      >
        <Image
          ref={image1}
          src="/images/home/obsidian-web.png"
          w={{ base: '95%', md: '70%' }}
          transition="all 0.5s"
          zIndex={2}
          bottom={'-40%'}
          pos="absolute"
        />
        <svg
          style={{ width: '95%', position: 'absolute', top: 0 }}
          viewBox="0 0 62 16"
          fill={color}
        >
          <text x="0" y="13" fontWeight={800}>
            OBSIDIAN
          </text>
        </svg>
      </GridItem>

      <GridItem
        ref={gridItem2}
        {...gridItemStyleProps}
        pos="relative"
        onMouseEnter={() => {
          if (image2.current) {
            image2.current.addEventListener('mousemove', e =>
              handleMove(e, image2)
            )
            image2.current.style.bottom = '7.5%'
            setHover(2)
          }
        }}
        onMouseLeave={() => {
          if (image2.current) {
            image2.current.style.transform = ''
            image2.current.style.bottom = '-40%'
            image2.current.removeEventListener('mousemove', e =>
              handleMove(e, image2)
            )
            setHover(0)
          }
        }}
        overflow="hidden"
      >
        <Image
          ref={image2}
          src="/images/home/eclipse-web.png"
          w={{ base: '95%', md: '70%' }}
          transition="all 0.5s"
          zIndex={2}
          bottom={'-40%'}
          pos="absolute"
        />
        <svg
          style={{ width: '95%', position: 'absolute', top: 0 }}
          viewBox="0 0 62 16"
          fill={color}
        >
          <text x="0" y="13" fontWeight={800}>
            ECLIPSE
          </text>
        </svg>
      </GridItem>
      <GridItem
        ref={gridItem3}
        {...gridItemStyleProps}
        pos="relative"
        onMouseEnter={() => {
          if (image3.current) {
            image3.current.addEventListener('mousemove', e =>
              handleMove(e, image3)
            )
            image3.current.style.bottom = '7.5%'
            setHover(3)
          }
        }}
        onMouseLeave={() => {
          if (image3.current) {
            image3.current.style.transform = ''
            image3.current.style.bottom = '-40%'
            image3.current.removeEventListener('mousemove', e =>
              handleMove(e, image3)
            )
            setHover(0)
          }
        }}
        overflow="hidden"
      >
        <Image
          ref={image3}
          src="/images/home/SPNutrition-web.png"
          w={{ base: '95%', md: '70%' }}
          transition="all 0.5s"
          zIndex={2}
          bottom={'-40%'}
          pos="absolute"
        />
        <svg
          style={{ width: '95%', position: 'absolute', top: 10 }}
          viewBox="0 0 88.25 16"
          fill={color}
        >
          <text x="0" y="13" fontWeight={800}>
            SP NUTRITION
          </text>
        </svg>
      </GridItem>
    </Grid>
  )
}

export default WorkGrid
