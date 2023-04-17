'use client'
import theme from "@/app/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript, Container } from "@chakra-ui/react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function App ({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Container maxW="6xl">
        <Nav />
        {children}
      </Container>
      <Footer />
    </ChakraProvider>
  </CacheProvider>
  )
}