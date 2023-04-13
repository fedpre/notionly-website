'use client';
import Nav from '@/components/Nav';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ColorModeScript, Container } from '@chakra-ui/react';
import theme from './theme';
import Footer from '@/components/Footer';

// export const metadata = {
//   title: 'Notionly',
//   description: 'Unleash the power of Notion',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
