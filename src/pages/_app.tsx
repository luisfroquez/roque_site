import '../styles/globals.css'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Layout from '../modules/Layout'
import { theme } from '../theme/theme'

const LogoSpiner = dynamic(() => import('../components/Loader/LogoSpiner'))

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)

  const variants = {
    pageInitial: {
      opacity: 0
    },
    pageAnimate: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        key={router.route}
        variants={variants}
      >
        {isMounted ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <LogoSpiner />
        )}
      </motion.div>
    </ChakraProvider>
  )
}

export default MyApp
