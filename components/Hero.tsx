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
          maxW="full"
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
            It&apos;s Federico.
          </Heading>
          <Text
            fontSize="2xl"
            py={5}
            textAlign={{ base: 'center', md: 'left' }}
          >
            I&apos;m a software engineer, YouTuber, and Notion architect.
          </Text>
          <Text
            fontSize="2xl"
            py={5}
            textAlign={{ base: 'center', md: 'left' }}
          >
            I help businesses create systems to increase productivity. Also, I
            create awesome templates in Notion!
          </Text>
          <Flex
            py={5}
            direction={{
              base: 'column',
              md: 'row',
            }}
            justifyContent="center"
            alignItems={{
              base: 'flex-start',
              md: 'center',
            }}
            gap={{
              base: 6,
              md: 0,
            }}
          >
            <Link as={NextLink} href="/service">
              <Button
                colorScheme="purple"
                w={250}
                boxShadow="xl"
                size="lg"
                marginRight={5}
                rightIcon={<ChevronRightIcon boxSize={8} />}
              >
                Learn More
              </Button>
            </Link>
            <Link as={NextLink} href="/templates">
              <Button
                size="lg"
                w={250}
                boxShadow="xl"
                rightIcon={<ChevronRightIcon boxSize={8} />}
              >
                Notion Templates
              </Button>
            </Link>
          </Flex>
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
