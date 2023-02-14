import { BoxProps } from '@chakra-ui/react'
import { MotionStyle, TargetAndTransition, VariantLabels } from 'framer-motion'
import { Key, ReactNode } from 'react'

export interface AnimationBaseProps {
  id?: string
  key?: Key | null
  children: ReactNode
  duration?: number
  delay?: number
  distance?: number
  className?: string
  width?: number | string
  height?: number | string
  styles?: BoxProps
  exit?: VariantLabels | TargetAndTransition
  whileInView?: boolean
}

export interface SlideInProps extends AnimationBaseProps {
  direction?: 'toRight' | 'toLeft' | 'toUp' | 'toDown'
}
