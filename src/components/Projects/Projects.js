import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Events</SectionTitle>
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
            <TitleContent style={{marginBottom: '20px'}} >Stack</TitleContent>
{/* TAG UNDEFINED */}
            {/* <TagList>
              {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
              ))}
            </TagList> */}
          </div>

{/* CODE LINKS */}
          {/* <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList> */}
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;