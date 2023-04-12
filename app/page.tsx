'use client'

import Hero from "@/components/Hero"
import RelevantTemplate from "@/components/RelevantTemplate"
import { Box } from "@chakra-ui/react"

export default function Home() {
  return (
    <Box>
      <Hero />
      <RelevantTemplate title="Notion Finance Tracker" description="The best way to keep track of your finances. All in Notion." imageUrl="/finance_1.jpg" />
    </Box>
  )
}
