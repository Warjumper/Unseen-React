// import React from 'react';
// import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
// import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

// const Technologies = () =>  (
//   <Section id="tech">
//     <SectionDivider />
//     <SectionTitle style={{marginTop: "40px"}}>Stampede</SectionTitle>
//     <SectionText>
//       A list of the hottest Stampede 2023 events!
//     </SectionText>

//     {/* LIST FOR ICON/PICS */}
//     {/* <List>
//       <ListItem>
//         <DiReact size="3rem" />
//         <ListContainer>
//           <ListTitle>Front-End</ListTitle>
//           <ListParagraph>
//             Experience with <br />
//             React.js
//           </ListParagraph>
//         </ListContainer>
//       </ListItem>
//       <ListItem>
//         <DiFirebase size="3rem" />
//         <ListContainer>
//           <ListTitle>Back-End</ListTitle>
//           <ListParagraph>
//             Experience with <br />
//             Node.js and Databases
//           </ListParagraph>
//         </ListContainer>
//       </ListItem>
//       <ListItem>
//         <DiZend size="3rem" />
//         <ListContainer>
//           <ListTitle>UI/UX</ListTitle>
//           <ListParagraph>
//             Experience with <br />
//             tools like Figma
//           </ListParagraph>
//         </ListContainer>
//       </ListItem>
//     </List> */}
//       </Section>
// );

// export default Technologies;

import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ConcertInfo,
} from "./TechStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
// import { projects } from '../../constants/constants';
import { stampede } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="stampede">
    <SectionDivider style={{ marginTop: "20px" }} />
    <SectionTitle main>Stampede</SectionTitle>
    <SectionText>
      A list of the hottest Calgary Stampede 2023 events!
    </SectionText>
    <GridContainer>
      {stampede.map(
        ({ id, image, title, description, concerts, source, visit, Thurs, Fri, Sat, Sun, Mon, Tues, Wed, Thurs2, Fri2, Sat2, Sun2 }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo style={{ marginBottom: "20px" }}>{description}</CardInfo>

            {/* CONCERT LISTINGS */}
            <ConcertInfo style={{ marginBottom: "20px" }}>
              {concerts}<br></br><br></br>
              {Thurs}<br></br>
              {Fri}<br></br>
              {Sat}<br></br>
              {Sun}<br></br>
              {Mon}<br></br>
              {Tues}<br></br>
              {Wed}<br></br>
              {Thurs2}<br></br>
              {Fri2}<br></br>
              {Sat2}<br></br>
              {Sun2}<br></br>
            </ConcertInfo>

            {/* TITLE ABOVE CTA CARD BTNS */}
            <div>
              <TitleContent style={{ marginBottom: "20px" }}>
                Check them out below!
              </TitleContent>
            </div>

            {/* CARD BUTTON LINKS */}
            <UtilityList>
              <ExternalLinks href={visit}>Website</ExternalLinks>
              {/* <ExternalLinks href={source}>Guestlist</ExternalLinks> */}
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
