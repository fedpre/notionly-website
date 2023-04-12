'use client';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Text,
  Heading,
  Flex,
  HStack,
  VStack,
  Image,
  useBreakpointValue,
  Button,
  Link,
} from '@chakra-ui/react';

import NextLink from 'next/link';

export default function Hero() {
  return (
    <>
      <Flex
        maxW="full"
        alignItems="center"
        justifyContent="center"
        gap="10"
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <VStack
          alignItems={{
            base: 'center',
            md: 'flex-start',
          }}
        >
          <Heading
            as="h1"
            size="4xl"
            textAlign={{ base: 'center', md: 'left' }}
          >
            Hey!
          </Heading>
          <Heading
            as="h1"
            size="4xl"
            textAlign={{ base: 'center', md: 'left' }}
          >
            I am Federico.
          </Heading>
          <Text fontSize="2xl" py={5}>
            I&apos;m a software engineer, YouTuber, and Notion architect.
          </Text>
          <Text fontSize="2xl" py={5}>
            I help businesses create systems to increase productivity. Also, I
            create awesome templates in Notion!
          </Text>
          <HStack py={5}>
            <Link as={NextLink} href="/service">
              <Button
                colorScheme="purple"
                boxShadow='xl'
                size="lg"
                marginRight={5}
                rightIcon={<ChevronRightIcon boxSize={8} />}
              >
                Learn More
              </Button>
            </Link>
            <Link as={NextLink} href="/templates">
              <Button size="lg" boxShadow='xl' rightIcon={<ChevronRightIcon boxSize={8} />} >
                Notion Templates
              </Button>
            </Link>
          </HStack>
        </VStack>
        <Image
          src="smile_blueshirt.jpg"
          w={500}
          objectFit="cover"
          alt="federico picture"
          borderRadius={20}
        />
      </Flex>
    </>
  );
}
