'use client'
import { Box, Icon, SimpleGrid, useColorModeValue } from "./ChakraUIComponents"
import { BsCashStack } from "react-icons/bs";
import { IoStatsChartOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import Feature from "./Features";

export default function RelevantTemplateFeatures() {
  return (
    <Box marginBottom={10}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={BsCashStack} w={8} h={8} />}
          title={'Cash Flow Monitoring'}
          text={
            'Get a clear view of your cash flow and forecast for the coming months.'
          }
          bgColor={useColorModeValue("pink.400", "pink.900")}
          color={useColorModeValue("pink.100", "pink.400")}
        />
        <Feature
          icon={<Icon as={IoStatsChartOutline} w={8} h={8} />}
          title={'Budget Tracking'}
          text={
            'Set and track your budgets and goals to achieve fiancial freedom.'
          }
          bgColor={useColorModeValue("teal.400", "teal.900")}
          color={useColorModeValue("teal.100", "teal.400")}
        />
        <Feature
          icon={<Icon as={MdOutlineDashboardCustomize} w={8} h={8} />}
          title={'Customizable dashboard'}
          text={
            "Create dashboards that display the info that's important to you."
          }
          bgColor={useColorModeValue("pink.400", "pink.900")}
          color={useColorModeValue("pink.100", "pink.400")}
        />
      </SimpleGrid>
    </Box>
  )
}