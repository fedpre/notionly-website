'use client'

import { Flex, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

export default function Feature({ title, text, icon }: FeatureProps) {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
        boxShadow='xl'
        >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.500'}>{text}</Text>
    </Stack>
  )
}