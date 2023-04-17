import React from 'react';
import {
  Box,
  useColorMode,
  useColorModeValue,
  HStack,
  Flex,
  Spacer,
  IconButton,
  Link,
  useDisclosure,
  MoonIcon
} from './ChakraUIComponents';
import HamburgerNav from './HamburgerNav';
import NavElement from './NavElement';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const text = useColorModeValue('blackAlpha.700', '');

  return (
    <Box>
      <Flex>
        <HStack w="full" py={6}>
          <Box w="100%" py={4} color={text}>
            <Link href="/">Logo</Link>
          </Box>
          <Spacer />
          <HStack>
            <Box display={{ base: 'none', md: 'flex' }} gap={10}>
              <NavElement href='/service' text='Service' />
              <NavElement href='/templates' text='Templates' />
              <NavElement href='/contacts' text='Contacts' />
            </Box>
            <Box>
              <Flex
                flex={{ base: 1, md: 'auto' }}
                display={{ base: 'flex', md: 'none' }}
              >
                <HamburgerNav />
              </Flex>
            </Box>
            <Box>
              <IconButton
                colorScheme="purple"
                variant="ghost"
                aria-label="toggle light and dark mode"
                size="md"
                icon={<MoonIcon />}
                onClick={() => toggleColorMode()}
              />
            </Box>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}
