import { GithubIcon } from '@/public/Icons/GithubIcon'
import { TwitterIcon } from '@/public/Icons/TwitterIcon'
import { Button, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'

const Socials = ({ isLarge }: { isLarge: boolean }) => {
  const { colorMode } = useColorMode()

  const display = isLarge ? 'flex' : 'flex'

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
