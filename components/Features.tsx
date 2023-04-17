import { ReactElement } from "react";
import { Flex, Stack, Text } from "./ChakraUIComponents";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  bgColor: string;
  color: string;
}

export default function Feature({ title, text, icon, bgColor, color }: FeatureProps) {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={color}
        rounded={'2xl'}
        bg={bgColor}
        mb={1}
        boxShadow='xl'
        >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.400'}>{text}</Text>
    </Stack>
  )
}