import { Box, Link } from "./ChakraUIComponents";
import NextLink from 'next/link'

interface Props {
  href: string,
  text: string
}

export default function NavElement({ href, text}: Props) {
  return (
    <Box>
      <Link as={NextLink} href={href}>
        { text }
      </Link>
    </Box>
  );
}
