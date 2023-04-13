import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  return (
    <Box>
      <Heading as="h3" size="xl" textAlign='center' py={10}>
        What People Are Saying
      </Heading>
      <SimpleGrid columns={3} gap={5} alignItems='center' py={5}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />

      </SimpleGrid>
    </Box>
  );
}
