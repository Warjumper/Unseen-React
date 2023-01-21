import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Unseen Riches
      </SectionTitle>
      <SectionText>
        At Unseen Riches we believe there is a better way to connect you to some of the great events going on every single day. Our focus is to simplify the way you discover entertainment in your city.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'} >Explore</Button>
    </LeftSection>
  </Section>
);

export default Hero;