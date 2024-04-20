import { Box, Stack, VStack, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';

import ExternalLink from './ExternalLink';
import ExternalLinksCloud from './ExternalLinksCloud';
import HeroImage from './HeroImage';

const RotateBox = styled.span`
  &:hover img {
    transform: rotate(20deg);
  }
`;

const Hero = () => {
  return (
    <Box pt={28}>
      <Stack
        alignItems="center"
        spacing={12}
        w="full"
        direction={{ base: 'column-reverse', md: 'row' }}
        as="section"
      >
        <VStack spacing={3} alignItems="flex-start" w="full">
          <Stack
            spacing={3}
            w="full"
            direction={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems="center"
          >
            <Heading size="lg" as="h1">
              <RotateBox>
                <Image
                  src="/handwave.png"
                  width={24}
                  height={24}
                  alt="Hand Wave Emoji"
                />
              </RotateBox>{' '}
              こんにちは, I&apos;m Aidan
            </Heading>
          </Stack>

          <Text lineHeight="175%" as="h2" fontSize="lg">
            I&apos;m an undergraduate Software Engineer at{' '} 
             <ExternalLink href="https://www.auburn.edu/">Auburn University</ExternalLink>
            {' '} in Alabama.
            
          </Text>
          <Text lineHeight="175%" as="h2" fontSize="lg">
            I&apos;m currently completing degrees in Computer Science and Asian 
            Studies (with Japanese concentration). My two favorite things on 
            the planet are software and Japan. I am passionate about expanding
            my already extensive skillset. Hence, I created this site to
            demonstrate my skills while also trying to communicate
            professionally with recruiters. 
          </Text>

          <Text lineHeight="175%" as="h2" fontSize="lg">
            I&apos;m currently an incoming Process Automation Intern with
            {' '} 
            <ExternalLink href="https://nucor.com/">Nucor Steel</ExternalLink>
            {' '} for the Summer of 2024. I was previously a Software Developer Intern with
            {' '}
            <ExternalLink href="https://www.progressive.com/">Progressive Insurance</ExternalLink>
            {' '} during the Summer of 2023.
          </Text>

          <Text lineHeight="175%" as="h2" fontSize="lg">
            Feel free to take a look around. I have all kinds of things to
            pique your interest.
          </Text>
          <ExternalLinksCloud />
        </VStack>
        <HeroImage />
      </Stack>
    </Box>
  );
};

export default Hero;
