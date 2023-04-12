import { DownloadIcon } from '@chakra-ui/icons';
import { Flex, Heading, VStack, Text, Image, Box, Button } from '@chakra-ui/react';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
}

export default function RelevantTemplate({ title, description, imageUrl}: Props) {
  return (
    <>
        <VStack
          alignItems='center'
          py={20}
          spacing={10}
        >
          <VStack spacing={5}>
            <Heading
              as="h2"
              size="2xl"
              textAlign='center'
            >
              { title }
            </Heading>
            <Text
              fontSize="xl"
              textAlign='center'
            >
              { description }
            </Text>
          </VStack>
            <Image 
              src={imageUrl}
              alt='ultimate finance tracker image 1'
              w={900}
              boxShadow='xl'
              borderRadius={10}
            />
          <Button size='lg' colorScheme='purple' px={20} py={7} rightIcon={<DownloadIcon boxSize={5}/>} boxShadow='xl'>
            Get it now!
          </Button>
        </VStack>
    </>
  );
}
