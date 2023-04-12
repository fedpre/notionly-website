'use client'
import { Box, Icon, SimpleGrid } from "@chakra-ui/react"
import { FcAssistant, FcDonate, FcInTransit, FcMoneyTransfer } from 'react-icons/fc';
import Feature from "./Features";

export default function RelevantTemplateFeatures() {
  return (
    <Box marginBottom={10}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
          title={'Cash Flow Monitoring'}
          text={
            'Get a clear view of your cash flow and forecast for the coming months.'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Budget Tracking'}
          text={
            'Set and track your budgets and goals to achieve fiancial freedom.'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Customizable dashboard'}
          text={
            "Create dashboards that display the info that's important to you."
          }
        />
      </SimpleGrid>
    </Box>
  )
}