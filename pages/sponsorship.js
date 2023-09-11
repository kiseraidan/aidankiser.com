import {
  VStack,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Divider
} from '@chakra-ui/react';
import Image from 'next/image';

import { DocumentHead } from '../src/components';
import { MEDIUM, TWITTER } from '../src/data/socialLinks';
import { SponsorCard } from '../src/components/BlogPostPage';

const SPONSORS_LIST = [
  {
    name: 'Jscrambler',
    link: 'https://jscrambler.com/'
  },
  {
    name: 'Manning Publications',
    link: 'https://jscrambler.com/'
  },
  {
    name: 'Napkin',
    link: 'https://jscrambler.com/'
  },
  {
    name: 'NoCodeAPI',
    link: 'https://nocodeapi.com'
  }
];

const SponsorshipPage = () => {
  return (
    <>
      <DocumentHead
        pageTitle="Aman Mittal - Sponsor this blog"
        postPath="/uses"
      />
      <VStack spacing={3} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="lg" as="h2">
          Sponsor aidankiser.com
        </Heading>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          Since 2017, I have been publishing blog posts and tutorials on{' '}
          <Link isExternal href={MEDIUM} color="purple.500">
            Medium
          </Link>
          . I have worked with esteemed publications like freeCodeCamp,
          Hackernoon, Logrocket, Jscrambler, Digital Ocean, AppSignal, etc., and
          got{' '}
          <Link
            isExternal
            href="https://twitter.com/aidankiser/status/1285554115464982528"
            color="purple.500"
          >
            millions
          </Link>{' '}
          in views. I have published content on Node.js, React, and React Native
          specifically.
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          <strong>aidankiser.com</strong> did not start until 2019 when at a
          tech conference, a friend of mine suggested that I should create and
          host my own blog (and own the content). His suggestion opened the door
          of opportunities for me, a little wider.
        </Text>
        {/* <Text lineHeight="175%" as="h2" fontSize="lg">
          Along with the blog, I decided to{' '}
          <strong>
            start a{' '}
            <Link
              isExternal
              href="https://amanhimself.substack.com/"
              textDecoration="underline"
            >
              newsletter
            </Link>
          </strong>{' '}
          to share a summarized version of my writings and tutorials to a
          specific set of people who are curious and highly interested in
          learning more about the craft.
        </Text> */}
        {/* Every year change the link here */}
        <Text lineHeight="175%" as="h2" fontSize="lg">
          Since then, this blog has grown its own audience. Each new post is
          announced on my{' '}
          <Link isExternal href={TWITTER} color="purple.500">
            Twitter
          </Link>{' '}
          and included in my newsletter. This results in over{' '}
          <Link
            href="https://aidankiser.com/blog/year-in-review-2022/#my-blog-in-numbers"
            color="purple.500"
          >
            <strong>150k+</strong>
          </Link>{' '}
          views on this blog alone and <strong>1000+</strong> newsletter
          subscribers.
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg"></Text>
        {/* <Text lineHeight="175%" as="h2" fontSize="lg">
          I have had <strong>occasional sponsors</strong> on this blog and my
          newsletter. With the growth over a last couple of years and having a
          home to write and share my learnings, I decided to make things
          official and{' '}
          <strong>accepting sponsorships for the newsletter</strong>.
        </Text> */}
        {/* <Text lineHeight="175%" as="h2" fontSize="lg">
          Ideally, I would love to have a sponsor on this blog every week but I
          know that is a very long shot. <strong>However</strong>, if you would
          like to become one of the occasional sponsors, please find the details
          below. You can opt-in for a weekly or a monthly sponsor.
        </Text> */}
        <Heading size="lg" as="h2" pt={4}>
          Example of an advertisement
        </Heading>
        <SponsorCard />
        {/* <VStack alignItems="stetch" w="full" as="section">
          <Image
            src="https://i.imgur.com/OP5h0gQ.png"
            alt="newsletter sponsor example"
            width={1282}
            height={942}
          />
        </VStack> */}
        <Heading size="lg" as="h2" pt={4}>
          Sponsor packages and pricing
        </Heading>
        {/* <Text lineHeight="175%" as="h2" fontSize="lg">
          The newsletter is delivered when I have new content to offer.
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          The following sponsor packages are available for your product or
          service:
        </Text> */}
        {/* <Text lineHeight="175%" as="h2" fontWeight="700" fontSize="lg">
          4 newsletters - $600
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          This package includes:
          <UnorderedList spacing={2}>
            <ListItem fontSize="lg">
              Your advertisement visible for the next 4 newsletters
            </ListItem>
            <ListItem fontSize="lg">
              An advertisement appears on more than 150 blog posts
            </ListItem>
            <ListItem fontSize="lg">
              If a newsletter is sent out during this period, your advertisement
              will be included as the sponsor
            </ListItem>
          </UnorderedList>
        </Text> */}
        {/* <Text lineHeight="175%" as="h2" fontWeight="700" fontSize="lg">
          1 newsletter sponsorship - $200
        </Text> */}
        {/* <Text lineHeight="175%" as="h2" fontSize="lg">
          This package includes:
          <UnorderedList spacing={2}>
            <ListItem fontSize="lg">
              Your advertisement visible for one newsletter (next available)
            </ListItem>
          </UnorderedList>
        </Text> */}
        <Text lineHeight="175%" as="h2" fontSize="lg">
          Sponsoring aidankiser.com s excellent if you own a product or service
          attractive to React, React Native and Expo Developers.
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          The following sponsor packages are available for your product or
          service:
        </Text>
        <Text lineHeight="175%" as="h2" fontWeight="700" fontSize="lg">
          1 week of sponsorship - $250
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          This package includes:
          <UnorderedList spacing={2}>
            <ListItem fontSize="lg">
              Your advertisement visible for one week.
            </ListItem>
            <ListItem fontSize="lg">
              An advertisement appears on all ~170 blog posts.
            </ListItem>
          </UnorderedList>
        </Text>
        <Text lineHeight="175%" as="h2" fontWeight="700" fontSize="lg">
          4 weeks of sponsorship - $800
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          This package includes:
          <UnorderedList spacing={2}>
            <ListItem fontSize="lg">
              Your advertisement visible for four weeks.
            </ListItem>
            <ListItem fontSize="lg">
              An advertisement appears on all ~170 blog posts.
            </ListItem>
          </UnorderedList>
        </Text>
        <Heading size="lg" as="h2" pt={4}>
          Request a sponsor package
        </Heading>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          Contact me at{' '}
          <Link
            href="mailto:aidan@kiser.io"
            textDecoration="underline"
          >
            my email
          </Link>{' '}
          for more information. Feel free to ask any questions and I will try to
          get back to you as soon as possible.
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          Some of the previous sponsors include:{' '}
          {SPONSORS_LIST.map(sponsor => (
            <strong key={sponsor.name}>
              <Link
                isExternal
                href={sponsor.link}
                textDecoration="underline"
                marginRight="0.3rem"
              >
                {sponsor.name}
              </Link>{' '}
            </strong>
          ))}
        </Text>
        <Divider />
        <Heading size="lg" as="h2" pt={4}>
          Special shoutout to sponsors
        </Heading>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          I am truly grateful to all the people and companies that decided to
          support my blog through Patreon,{' '}
          <Link
            isExternal
            href="https://ko-fi.com/amanhimself"
            textDecoration="underline"
          >
            Ko-fi
          </Link>
          , and{' '}
          <Link
            isExternal
            href="https://github.com/sponsors/amandeepmittal"
            textDecoration="underline"
          >
            GitHub sponsors
          </Link>
          .
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          <span style={{ fontWeight: 'bold' }}>
            Long term and past supporters
          </span>
          <UnorderedList>
            <ListItem>
              <Link
                isExternal
                href="https://twitter.com/ccheever"
                textDecoration="underline"
              >
                Charlie Cheever
              </Link>{' '}
              - Co-founder of{' '}
              <Link
                isExternal
                href="https://expo.dev/"
                textDecoration="underline"
              >
                Expo
              </Link>
            </ListItem>
            <ListItem>
              <Link
                isExternal
                href="https://twitter.com/hirbod_dev"
                textDecoration="underline"
              >
                Hirbod Mirjavadi
              </Link>{' '}
            </ListItem>
            <ListItem>
              <Link
                isExternal
                href="https://twitter.com/Quantium"
                textDecoration="underline"
              >
                Andrés González Aragón
              </Link>{' '}
            </ListItem>
            <ListItem>
              <Link
                isExternal
                href="https://twitter.com/sergiosrtd"
                textDecoration="underline"
              >
                Sergio Sotelo
              </Link>{' '}
            </ListItem>
            <ListItem>
              <Link
                isExternal
                href="https://github.com/nmelo"
                textDecoration="underline"
              >
                Nelson Melo{' '}
              </Link>{' '}
            </ListItem>
            <ListItem>
              <Link
                isExternal
                href="https://github.com/github"
                textDecoration="underline"
              >
                GitHub
              </Link>{' '}
            </ListItem>
          </UnorderedList>
        </Text>
      </VStack>
    </>
  );
};

export default SponsorshipPage;
