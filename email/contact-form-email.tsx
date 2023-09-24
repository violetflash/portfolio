// @flow
import * as React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text, Tailwind
} from '@react-email/components'
type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};
export const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        New message from your portfolio website
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border-black-custom my-10 py-4 px-10 rounded-md">
              <Heading className="leading-tight">You received a new message from the contact form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is <a href={`mailto:${senderEmail}`}>{senderEmail}</a></Text>
            </Section>
          </Container>
        </Body>

      </Tailwind>
    </Html>
  );
}