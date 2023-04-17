import { Box, Text } from "@/components/ChakraUIComponents"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Notionly | Contacts',
  description: 'Unleash the power of Notion',
};

export default function Contacts() {
  return <Box>
    <Text>Contacts</Text>
  </Box>
}