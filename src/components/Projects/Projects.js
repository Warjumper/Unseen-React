import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText, } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Nightlife</SectionTitle>
    <SectionText>
      A list of the hottest Calgary Nightlife 2023 venues!
    </SectionText>
    <GridContainer>
      {projects.map(({ id, image, title, description, tages, source, visit }) =>(
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo style={{marginBottom: '40px'}} >{description}</CardInfo>
          <div>
{/* TITLE ABOVE CTA CARD BTNS */}
            <TitleContent style={{marginBottom: '20px'}} >Check them out below!</TitleContent>

        
          </div>

{/* CODE LINKS */}
          <UtilityList>
            <ExternalLinks href={visit}>Website</ExternalLinks>
            <ExternalLinks href={source}>Guestlist</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>

  </Section>
);

export default Projects;