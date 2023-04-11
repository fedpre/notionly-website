import React from 'react';
import {
  Box,
  useColorMode,
  useColorModeValue,
  Text,
  HStack,
  Flex,
  Spacer,
  IconButton,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue('gray.200', 'blackalpha.50');
  const text = useColorModeValue('blackAlpha.700', '');

  return (
    <Box>
      <Flex>
        <HStack w="full" py={6}>
          <Box w="100%" py={4} color={text}>
            <Link href="/">Logo</Link>
          </Box>
          <Spacer />
          <HStack spacing={6}>
            <Box display={{ base: 'none', md: 'flex' }} gap={10}>
              <Box >
                <Link as={NextLink} href="/service">
                  Service
                </Link>
              </Box>
              <Box>
                <Link as={NextLink} href="/templates">
                  Templates
                </Link>
              </Box>
              <Box>
                <Link as={NextLink} href="/contacts">
                  Contacts
                </Link>
              </Box>
            </Box>
            <Box>
              <Flex
                  flex={{ base: 1, md: 'auto' }}
                  ml={{ base: -2 }}
                  display={{ base: 'flex', md: 'none' }}
                >
                  <IconButton
                    onClick={onToggle}
                    icon={
                      isOpen ? (
                        <CloseIcon w={3} h={3} />
                      ) : (
                        <HamburgerIcon w={5} h={5} />
                      )
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                  />
                </Flex>
            </Box>
            <Box>
              <IconButton
                colorScheme="teal"
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
