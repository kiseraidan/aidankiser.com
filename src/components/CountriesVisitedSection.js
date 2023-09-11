import { VStack, Heading, Text } from '@chakra-ui/react';

const CountriesVisitedSection = () => {
  return (
    <VStack w="full" alignItems="flex-start" spacing={4} as="section" mt={16}>
      <Heading size="lg">Big Travel Guy</Heading>
      <Text spacing={6} fontSize="lg">
        Hopefully not forgetting any: 🇺🇸 🇯🇵 🇬🇧 🇮🇹 🇩🇪 🇫🇷 🇸🇮 🇦🇹
      </Text>
    </VStack>
  );
};

export default CountriesVisitedSection;
