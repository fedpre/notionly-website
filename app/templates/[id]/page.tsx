'use client'

import { Box, Text } from "@chakra-ui/react";

interface TemplatePageProps {
  params: { id: string }
}

export default function TemplatePage({ params }: TemplatePageProps) {
  return (
    <Box>
      <Text>{ params.id }</Text>
    </Box>
  )
}