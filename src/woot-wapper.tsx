import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import Layout from "./components/layout"

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
