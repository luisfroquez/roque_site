import { Button, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import { GithubIcon } from '../../components/Icons/GithubIcon'
import { TwitterIcon } from '../../components/Icons/TwitterIcon'

const Socials = ({ isLarge }: { isLarge: boolean }) => {
  const { colorMode } = useColorMode()

  const display = isLarge ? 'flex' : 'none'

  return (
    <>
      <Link href="https://github.com/luisfroquez" target="_blank">
        <Button
          display={display}
          variant={colorMode === 'light' ? 'light' : 'dark'}
          fontSize="2xl"
        >
          <GithubIcon />
        </Button>
      </Link>
      <Link href="https://twitter.com/zacata_dev" target="_blank">
        <Button
          display={display}
          variant={colorMode === 'light' ? 'light' : 'dark'}
          fontSize="2xl"
        >
          <TwitterIcon />
        </Button>
      </Link>
    </>
  )
}

export default Socials
