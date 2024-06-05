import {
  Box,
  Text,
  VStack,
  Link,
  useColorModeValue,
  HStack
} from '@chakra-ui/react';

const AuthorCard = () => {
  const textMode = useColorModeValue('black', 'white');
  return (
    <Box
      borderRadius="md"
      padding="8px 12px"
      alignItems="center"
      border="1px solid #805AD5"
    >
      <HStack justifyContent="flex-start">
        <VStack alignItems="stretch" as="section" pt={2}>
          <HStack justifyContent="space-between">
            <Text fontSize="md" fontWeight="600" color={textMode}>
              <Link href="/about">Aidan Kiser</Link>{' '}
              <Text fontSize="sm" color="teal.500" as="i">
                author
              </Text>
            </Text>
            <HStack justifyContent="flex-end">
              {/* <Box
                borderRadius="md"
                padding="2px 2px"
                alignItems="center"
                border="1px solid #805AD5"
              > */}
              <Link
                isExternal
                href="https://github.com/sponsors/kiseraidan"
              >
                <Text fontSize="13px" color="teal.500" fontWeight="bold">
                  Buy me coffee
                </Text>
              </Link>
              {/* </Box> */}
              <Box>&nbsp;</Box>
              <Link isExternal href="https://instagram.com/aidankiser/">
                <Text fontSize="13px" color="teal.500" fontWeight="bold">
                  Instagram
                </Text>
              </Link>
              {/* </Box> */}
              <Box>&nbsp;</Box>
              {/* <Box
                borderRadius="md"
                padding="2px 2px"
                alignItems="center"
                border="1px solid #805AD5"
              > */}
              <Link isExternal href="https://x.com/aidankiser">
                <Text fontSize="13px" color="teal.500" fontWeight="bold">
                  X.com
                </Text>
              </Link>
              {/* </Box> */}
            </HStack>
          </HStack>
          <Text fontSize="md" color={textMode}>
          I&apos;m an undergraduate Software Engineer at Auburn University in Alabama.
            <br />
            <br />
            Currently, a Process Automation Engineer Intern with Nucor.
            Previously, I was a Software Developer Intern with Progressive Insurance Corporation.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default AuthorCard;
