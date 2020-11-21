import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Heading>Hi people</Heading>
    <Text fontSize="xl" my={5}>
      Welcome to your new Gatsby site.
    </Text>
    <Text fontSize="xl" my={5}>
      Now go build something great.
    </Text>
    <Box as="div" maxWidth="300px" marginBottom="1.45rem">
      <Image />
    </Box>
    <Link
      as={GatsbyLink}
      textDecor="underline"
      color="purple.500"
      fontSize="xl"
      to="/page-2/"
    >
      Go to page 2
    </Link>
    <br />
    <Link
      as={GatsbyLink}
      textDecor="underline"
      color="purple.500"
      fontSize="xl"
      to="/using-typescript/"
    >
      Go to "Using TypeScript"
    </Link>
  </>
)

export default IndexPage
