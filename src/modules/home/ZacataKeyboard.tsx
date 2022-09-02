import { Center, Flex, Text } from '@chakra-ui/react'
import { RiDragMoveLine } from 'react-icons/ri'
import React, { Suspense, useRef, useState } from 'react'

const Spline = React.lazy(() => import('@splinetool/react-spline'))

const ZacataKeyboard = () => {
  const [isHover, setIsHover] = useState(false)


  return (
    <Center borderRadius="2em" h="30em" w="60em" pos="relative" p={0}>
      {/* <iframe
        src="https://my.spline.design/untitled-6af3e88c6cf44304bff274b9ba75447f/"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ borderRadius: '3em', padding: '1em' }}
      ></iframe> */}
      <div></div>
      <Suspense fallback={<div>Something nice is loading here...</div>}>
        <Spline scene="https://prod.spline.design/Qqprx1SAjggWZzgH/scene.splinecode" style={{borderRadius:"2.5em", margin:0}}/>
      </Suspense>

      <Center
        color="gray.200"
        pos="absolute"
        zIndex={5}
        bottom="1.75em"
        right="1.75em"
        bg="gray.500"
        p="0.75em"
        borderRadius="2em"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <RiDragMoveLine
          opacity={isHover ? 0 : 1}
          size={isHover ? '0px' : '1em'}
          style={{ transition: 'all 0.25s' }}
        />
        <Text
          opacity={isHover ? 1 : 0}
          fontSize={isHover ? '1em' : '0px'}
          transition="all 0.25s"
        >
          It's interactive! Drag to orbit and use the keys on your keyboard
          (0,1,2 & Enter) to navigate.
        </Text>
      </Center>

      <Flex
        // This is to hide spline logo
        pos="absolute"
        bottom="1.95em"
        right="1.95em"
        bg="gray.900"
        w="2.15em"
        h="2.15em"
        borderRadius="2em"
      />
    </Center>
  )
}

export default ZacataKeyboard
