import Head from 'next/head'
import About from '../modules/about/About'
import Home from '../modules/home/Home'
import Work from '../modules/home/Work'

const Index = () => {
  return (
    <>
      <Head>
        <title>{"Roque's site"}</title>
      </Head>
      <Home />
      <About />
      <Work />
    </>
  )
}

export default Index
