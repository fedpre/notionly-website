'use client'
import { Text, Heading, Flex, HStack, VStack, Image } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex 
      maxW='full'
      alignItems='center' 
      justifyContent='center' gap='10'
      direction={{
         base: 'column',
         md: 'row'
      }}
    >
      <VStack alignItems={{
        sm: 'center',
        md: 'flex-start'
      }}>
        <Heading as='h1' size='4xl'>Hey!</Heading>
        <Heading as='h1' size='4xl'>I am Federico.</Heading>
        <Text fontSize='3xl' py={5}> Your friendly Notion expert.</Text>
      </VStack>
      <Image 
        src="smile_blueshirt.jpg"
        w={500}
        objectFit='cover'
        alt='federico picture'
        borderRadius={20}
          />
    </Flex>
)}