import { Center, ContainerProps, useColorModeValue } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { RoqueLogo } from 'public/svg/RoqueLogo'

const LogoFollowMouse = (containerProps:ContainerProps) => {
  const color = useColorModeValue('black', 'gray.100')
  const ref = useRef<HTMLHeadingElement>(null)

  const height = ref.current?.clientHeight ?? 0
  const width = ref.current?.clientWidth ?? 0

  function handleMove(e: any) {
    const xVal = e.layerX
    const yVal = e.layerY

    const yRotation = 20 * ((xVal - width / 2) / width)
    const xRotation = -20 * ((yVal - height / 2) / height)

    const string =
      'perspective(500px) scale(1.1) rotateX(' +
      xRotation +
      'deg) rotateY(' +
      yRotation +
      'deg)'

    if (ref.current) {
      ref.current.style.transform = string
    }
  }

  return (
    <Center
      ref={ref}
      id="roqueLogo"
      w="auto"
      dropShadow="2xl"
      h="100%"
      transition="all 0.25s ease"
      onMouseEnter={() =>
        ref.current?.addEventListener('mousemove', handleMove)
      }
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.transform = ''
          ref.current.removeEventListener('mousemove', handleMove)
        }
      }}
      {...containerProps}
    >
      <RoqueLogo fill={color} width="auto" />
    </Center>
  )
}

export default LogoFollowMouse
