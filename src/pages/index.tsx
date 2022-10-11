import Head from 'next/head'
import Home from '../modules/home/Home'
import About from '../modules/home/about/About'
import Work from '../modules/home/work/Work'
import Contact from '../modules/home/contact/Contact'

const Index = () => {
  return (
    <>
      <Head>
        <title>{"Roque's site"}</title>
      </Head>
      <Home />
      <About />
      <Work />
      <Contact />
    </>
  )
}

export default Index
