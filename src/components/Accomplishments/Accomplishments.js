import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  // { number: 20, text: 'Venues'},
  // { number: 100, text: 'Events', },
  // { number: 1900, text: 'Tickets sold', },
  // { number: 5000, text: 'Followers', }
];

const Accomplishments = () => (
  <Section>
    {/* <SectionTitle style={{marginTop: "20px"}}>Stats</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes> */}
  </Section>
);

export default Accomplishments;
