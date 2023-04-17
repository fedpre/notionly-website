import { DownloadIcon } from './ChakraUIComponents';
import {
  Heading,
  VStack,
  Text,
  Image,
  Button,
  Flex,
} from './ChakraUIComponents';
import NextLink from 'next/link';
import RelevantTemplateFeatures from './RelevantTemplateFeatures';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  templatePageLink: string;
}

export default function RelevantTemplate({
  title,
  description,
  imageUrl,
  templatePageLink,
}: Props) {
  return (
    <>
      <Flex
        maxW="full"
        py={20} 
        alignItems="center"
        justifyContent="center"
        gap="10"
        direction={{
          base: 'column',
          md: "row-reverse",
        }}
      >
        <VStack alignItems={{base: 'center', md: 'flex-end'}} spacing={10}>
          <VStack spacing={5}>
            <Heading as="h2" size="3xl" textAlign={{ base: 'center', md: 'right'}}>
              {title}
            </Heading>
            <Text fontSize="2xl" textAlign={{ base: 'center', md: 'right'}}>
              {description}
            </Text>
          </VStack>
          <NextLink href={templatePageLink}>
            <Button
              size="lg"
              colorScheme="purple"
              px={20}
              py={7}
              rightIcon={<DownloadIcon boxSize={5} />}
              boxShadow="xl"
            >
              Get it now!
            </Button>
          </NextLink>
        </VStack>
        <Image
          src={imageUrl}
          alt="ultimate finance tracker image 1"
          w={600}
          boxShadow="xl"
          borderRadius={10}
        />
      </Flex>
      <RelevantTemplateFeatures />
    </>
  );
}
