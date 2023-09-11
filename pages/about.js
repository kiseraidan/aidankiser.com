import {
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

import { DocumentHead, ExternalLink } from '../src/components';

const AboutPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Aidan Kiser - About" postPath="/about" />
      <VStack spacing={3} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="lg" as="h1">
          Who Am I? 
        </Heading>
        <small>Last Update: September 10, 2023</small>
        <Text lineHeight="175%" as="h2" fontSize="lg" pt={2}>
          Hi! My name is Aidan Kiser. I&apos;m an undergraduate Software
          Engineer at Auburn University.
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg" pt={2}>
          I just completed my first software developer internship with 
          Progressive Insurance during the Summer of 2023. Now, I&apos;m
          spending this current recruiting season looking for the right company
          to demonstrate my skills for my second software internship for the
          Summer of 2024.
        </Text>
        <Heading size="lg" as="h1" pt={8}>
          About Me
        </Heading>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          I was born in Anchorage, Alaska in December of 2001. Naturally, that
          makes me 21 years old. I have lived all over the United States and
          even in Tokyo, Japan. Born in Anchorage, moved to Little Rock,
          Arkansas, to Vacaville, California, to La Plata, Maryland, to
          Fayetteville, North Carolina, to O&apos;Fallon, Illinois, to Tokyo,
          Japan, to where I am now, Auburn, Alabama! 💙🧡
          </Text>
          <Text lineHeight="175%" as="h2" fontSize="lg">
          Tennis is another large passion of mine outside of software and
          Japan, and I&apos;m a highly active member of the University Club
          Tennis team, competing at a high level against other top Universities
          in the nation. Other things I enjoy doing are snowboarding in the
          winter, working out, watching movies, and playing video games.
          </Text>
        <Heading size="lg" as="h1" pt={8}>
          School & Work Experience
        </Heading>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          I&apos;m a Computer Science and Asian Studies (with Japanese
          Concentration) student here at{' '} 
             <ExternalLink href="https://www.auburn.edu/">Auburn University</ExternalLink>
            {' '} in Alabama.
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          I am a Software Engineer first and foremost, with a genuine passion
          and obsession with Japan, hence the Asian Studies degree. I am
          technically a senior, and I plan to graduate after the Fall 2024
          semester. 
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg">
        I just completed my first Software Developer internship with
            {' '}
            <ExternalLink href="https://www.progressive.com/">Progressive Insurance</ExternalLink>
            {' '} during the Summer of 2023. I spent the summer becoming
            proficient in numerous different technologies and skills, such as:
            {' '}
            <ExternalLink href="https://www.splunk.com/">Splunk</ExternalLink>,
            {' '}
            <ExternalLink href="https://www.tableau.com/">
              Tableau
            </ExternalLink>
            ,
            {' '}
            <ExternalLink href="https://hadoop.apache.org/">
              Hadoop
            </ExternalLink>
            {' '} &
            {' '}
            <ExternalLink href="https://www.snowflake.com/en/">
              Snowflake
            </ExternalLink>
            , Artificial Intelligence, Linux Development, and Python Development.
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          At Progressive, I successfully completed and delivered four software
          projects, as well as gave a presentation about Japan to a group of
          over 100 people, one of which was the CIO, Steve Broz. Please see my
          blog post regarding my time at Progressive, you can find it here.
          (PUT THE LINK TO THE BLOG POST LATER)
        </Text>
        <Heading size="lg" as="h1" pt={8}>
          Skillset & Experience
        </Heading>
        <List spacing={4}>
          <ListItem fontSize="lg">
            <ListIcon as={MdCheckCircle} color="green.500" />
            English & Japanese Language Proficiency
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Python, Java, C++, Javascript, HTML, & Ruby Development
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Artificial Intelligence
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Linux Development
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Git
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Pandas
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Splunk
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Tableau
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Hadoop & Snowflake
          </ListItem>
          </List>
      </VStack>
    </>
  );
};

export default AboutPage;
