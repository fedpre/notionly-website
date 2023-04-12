'use client';
import Nav from '@/components/Nav';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, Container } from '@chakra-ui/react';

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
            <Container maxW="6xl">
              <Nav />
              {children}
            </Container>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
