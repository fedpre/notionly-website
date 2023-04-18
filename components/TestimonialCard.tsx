import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
  CardFooter,
  StarIcon,
} from './ChakraUIComponents';

type TestimonialCardProps = {
  name: string;
  jobTitle: string;
  reviewContent: string;
  avatarImgUrl: string;
  star: number;
};

export default function TestimonialCard({
  name,
  jobTitle,
  reviewContent,
  avatarImgUrl,
  star,
}: TestimonialCardProps) {
  const getStars = (): React.ReactNode[] => {
    const stars = [];
    for (let i = 0; i < star; i++) {
      stars.push(
        <StarIcon key={i} mx={1} color={i < 5 ? 'yellow.400' : 'gray.300'} />
      );
    }
    return stars;
  };

  return (
    <Card maxW="sm" boxShadow={'lg'}>
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={name} src={avatarImgUrl} />
            <Box>
              <Heading size="sm">{name}</Heading>
              <Text>{jobTitle}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{reviewContent}</Text>
      </CardBody>
      <CardFooter flexWrap="wrap">
        {getStars().map((star) => star)}
        <StarIcon color={'yellow.400'} />
      </CardFooter>
    </Card>
  );
}
