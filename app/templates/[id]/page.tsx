import { Box, Text } from "@/components/ChakraUIComponents"
import { Metadata } from "next";

interface TemplatePageProps {
  params: { id: string }
}

export async function generateMetadata(
  { params }: TemplatePageProps,
): Promise<Metadata> {
  console.log(params)
  // read route params
  const id = params.id;
  return {
    title: id,
  };
}

export default function TemplatePage({ params }: TemplatePageProps) {
  return (
    <Box>
      <Text>{ params.id }</Text>
    </Box>
  )
}