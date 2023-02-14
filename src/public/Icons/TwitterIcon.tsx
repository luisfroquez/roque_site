import { motion } from 'framer-motion'
import { transition } from '../../modules/navbar/ThemeToggle/constants'

export const TwitterIcon = () => {
  const variants = {
    initial: { scale: 0.6, rotate: 90 },
    animate: { scale: 1, rotate: 0, transition },
    whileTap: { scale: 0.95, rotate: 15 }
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      key="github"
      fill="none"
    >
      <motion.path
        d="M24 10.82a6.557 6.557 0 01-1.885.517 3.288 3.288 0 001.443-1.816 6.575 6.575 0 01-2.085.796 3.286 3.286 0 00-5.594 2.993 9.319 9.319 0 01-6.765-3.429 3.287 3.287 0 001.015 4.383 3.268 3.268 0 01-1.486-.41c-.036 1.52 1.054 2.943 2.633 3.26a3.289 3.289 0 01-1.483.055 3.285 3.285 0 003.067 2.28A6.6 6.6 0 018 20.809a9.293 9.293 0 005.032 1.474c6.095 0 9.538-5.147 9.33-9.764A6.683 6.683 0 0024 10.82z"
        fill="currentColor"
        initial="initial"
        animate="animate"
        whileTap="whileTap"
        variants={variants}
      />
    </motion.svg>
  )
}
