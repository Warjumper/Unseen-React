import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Nightlife</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tages, source, visit }) =>(
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo style={{marginBottom: '20px'}} >{description}</CardInfo>
          <div>
{/* TITLE ABOVE CTA CARD BTNS */}
            {/* <TitleContent style={{marginBottom: '20px'}} >Website</TitleContent> */}
{/* TAG UNDEFINED */}
            {/* <TagList>
              {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
              ))}
            </TagList> */}
          </div>

{/* CODE LINKS */}
          <UtilityList>
            <ExternalLinks href={visit}>Website</ExternalLinks>
            <ExternalLinks href={source}>Purchase Tickets</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;