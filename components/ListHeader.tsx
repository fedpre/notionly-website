import { Text } from './ChakraUIComponents'
import { ReactNode } from 'react';

export default function ListHeader ({ children }: { children: ReactNode }) {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};