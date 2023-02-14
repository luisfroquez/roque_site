import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import { SlideInProps } from './types'

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop)
})

const SlideIn = ({
  id,
  key,
  children,
  duration = 1,
  delay = 0,
  distance = 50,
  className,
  width = '100%',
  height = '100%',
  styles,
  direction = 'toRight',
  whileInView = true
}: SlideInProps) => {
  let initial, animate

  switch (direction) {
    case 'toLeft':
      initial = { x: distance, opacity: 0 }
      animate = { x: 0, opacity: 1 }
      break

    case 'toUp':
      initial = { y: distance, opacity: 0 }
      animate = { y: 0, opacity: 1 }
      break

    case 'toDown':
      initial = { y: -distance, opacity: 0 }
      animate = { y: 0, opacity: 1 }
      break

    default:
      initial = { x: -distance, opacity: 0 }
      animate = { x: 0, opacity: 1 }
      break
  }

  return (
    <ChakraBox
      id={id}
      key={key}
      // STYLES:
      className={className}
      w={width}
      h={height}
      {...styles}
      // MOTION:
      initial={initial}
      animate={whileInView ? {} : animate}
      whileInView={whileInView ? animate : {}}
      exit={initial}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{ duration: duration, delay: delay, ease: 'easeIn' }}
    >
      {children}
    </ChakraBox>
  )
}

export default SlideIn
