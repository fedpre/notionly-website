import { Box, Heading, SimpleGrid } from './ChakraUIComponents';
import TestimonialCard from './TestimonialCard';

type TestimonialCardProps = {
  name: string;
  jobTitle: string;
  reviewContent: string;
  avatarImgUrl: string;
  star: number;
};

const fetchTestimonials = async () => {
  const fetchData = await fetch(`${process.env.BASE_URL}api/testimonials`);
  return await fetchData.json();
};

export default async function Testimonials() {
  let testimonials: TestimonialCardProps[] = [];
  try {
    testimonials = await fetchTestimonials();
  } catch (e: unknown) {
    if (e instanceof Error) console.log(e.message);
  }

  return (
    <Box>
      <Heading as="h3" size="xl" textAlign="center" py={10}>
        What People Are Saying
      </Heading>
      <SimpleGrid columns={3} gap={5} alignItems="center" py={5}>
        {testimonials.map((data: TestimonialCardProps) => (
          <TestimonialCard
            key={data.name}
            name={data.name}
            jobTitle={data.jobTitle}
            reviewContent={data.reviewContent}
            avatarImgUrl={data.avatarImgUrl}
            star={data.star}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
