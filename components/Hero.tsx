import { ChevronRightIcon } from './ChakraUIComponents';
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
} from './ChakraUIComponents';

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
          <Flex
            direction={{
              base: 'column',
              md: 'row',
            }}
            gap={10}
          >
            <VStack
              alignItems={{
                base: 'center',
                md: 'flex-start',
              }}
              justifyContent="center"
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
            </VStack>
            <Image
              src="smile_blueshirt.jpg"
              boxShadow="xl"
              w={500}
              objectFit="cover"
              alt="federico picture"
              borderRadius={20}
            />
          </Flex>
          <Text fontSize="3xl" py={5} textAlign="center" w="100%">
            I run Notionly, a consulting agency to help people be more
            productive with Notion!
          </Text>
          <Text fontSize="2xl" textAlign="center" w="100%">
            Also, I create awesome templates in Notion!
          </Text>
          <Flex
            py={5}
            direction={{
              base: 'column',
              md: 'row',
            }}
            justifyContent="center"
            alignItems='center'
            gap={{
              base: 6,
              md: 0,
            }}
            w='100%'
          >
            <Link as={NextLink} href="/service">
              <Button
                colorScheme="purple"
                w={250}
                boxShadow="xl"
                size="lg"
                marginRight={{
                  base: 0,
                  md: 5
                }}
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
      </Flex>
    </>
  );
}
