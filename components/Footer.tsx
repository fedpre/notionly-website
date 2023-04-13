import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import SocialButton from './SocialButton';
import ListHeader from './ListHeader';

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Link href="/">Logo</Link>
            </Box>
            <Text fontSize={'sm'}>
              © 2023 Notionly. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'https://twitter.com/fed_pre'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'https://www.youtube.com/@fedpredev'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.linkedin.com/in/federicopregnolato/?locale=en_US'}>
                <FaLinkedin />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Notionly</ListHeader>
            <Link href={'#'}>About us</Link>
            <Link href={'/service'}>Service</Link>
            <Link href={'/contacts'}>Contact us</Link>
            <Link href={'#'}>Testimonials</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Receive the latest updates from Notionly!</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                colorScheme='purple'
                // _hover={{
                //   bg: 'green.600',
                // }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}