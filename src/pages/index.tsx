import Head from 'next/head'
import Home from '../modules/home/Home'
import About from '../modules/home/About'
import Work from '../modules/home/Work'
import Contact from '../modules/home/Contact'
import { useColorMode } from '@chakra-ui/react'
import Quote from '../modules/home/Quote'
import ZacataStack from '../modules/home/ZacataStack'

const Index = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Head>
        <title>{"Roque's site"}</title>
      </Head>
      <Home colorMode={colorMode} />
      <About />
      <ZacataStack colorMode={colorMode} />
      <Quote colorMode={colorMode} />
      <Work colorMode={colorMode} />
      <Contact />
    </>
  )
}

export default Index
