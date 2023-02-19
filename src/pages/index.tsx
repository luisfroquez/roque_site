import { useColorMode } from '@chakra-ui/react'
import About from 'modules/home/About'
import Contact from 'modules/home/Contact'
import Home from 'modules/home/Home'
import Quote from 'modules/home/Quote'
import Work from 'modules/home/Work'
import ZacataStack from 'modules/home/ZacataStack'
import Head from 'next/head'

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
      <Contact colorMode={colorMode}/>
     
    </>
  )
}

export default Index
