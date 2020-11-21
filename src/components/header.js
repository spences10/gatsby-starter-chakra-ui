import { Box, Heading, Link } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import ThemeToggle from './theme-toggle'

const Header = ({ siteTitle }) => (
  <Box as="header" background="rebeccapurple" marginBottom="1.45rem">
    <Box as="div" m="0 auto" maxW="960px" p="1.45rem 1.0875rem">
      <Heading margin="0">
        <Link
          as={GatsbyLink}
          to="/"
          color="white"
          _hover={{ textDecor: 'none' }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </Box>
    <Box as="div" position="fixed" right="20px" top="20px">
      <ThemeToggle />
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
