import { HStack, Text } from '@chakra-ui/react';

import ExternalLink from './ExternalLink';

const ExternalLinksCloud = () => {
  return (
    <HStack>
      <Text>
        <ExternalLink href="https://aidankiser.com/about">
          🤙 More about me
        </ExternalLink>
      </Text>
      <Text>
        <ExternalLink href="https://github.com/kiseraidan">
          🐙 GitHub
        </ExternalLink>
      </Text>
      <Text>
        <ExternalLink href="https://instagram.com/aidankiser">
          📸 Instagram
        </ExternalLink>
      </Text>
      <Text>
        <ExternalLink href="https://twitter.com/aidankiser">
          🐦 Twitter
        </ExternalLink>
      </Text>
      <Text>
        <ExternalLink href="mailto:aidan@kiser.io">
          ✉️ Email
        </ExternalLink>
      </Text>
    </HStack>
  );
};

export default ExternalLinksCloud;
