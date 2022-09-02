import Head from 'next/head'
import About from '../modules/home/About'
import Home from '../modules/home/Home'

const Index = () => {
  return (
    <>
      <Head>
        <title>{"Roque's site"}</title>
      </Head>
      <Home />
      <About />
    </>
  )
}

export default Index
