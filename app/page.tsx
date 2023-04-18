import { Box } from "@/components/ChakraUIComponents"
import Hero from "@/components/Hero"
import RelevantTemplate from "@/components/RelevantTemplate"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <Box>
      <Hero />
      <RelevantTemplate
        title="Notion Finance Tracker"
        description="The best way to keep track of your finances. All in Notion."
        imageUrl="/finance_1.jpg"
        templatePageLink="/templates/finance-tracker"
      />
      {/* @ts-expect-error */}
      <Testimonials />
    </Box>
  );
}
