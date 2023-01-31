import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      {/* CALL INFORMATION */}
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:403-111-1111">403-111-1111</LinkItem>
        </LinkColumn> */}

        {/* EMAIL INFORMATION */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:unseenriches@gmail.com">unseenriches@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating one party at a time.
            <br />
            Copyright &copy; | 2022 Unseen Riches &trade;
            <br />
            Derrick L & Jesse H
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          {/* TWITTER */}
          <SocialIcons href="https://twitter.com/UnseeenRiches?t=TqAUMLuzOnkqRJODguNNCA&s=09&fbclid=IwAR2dIbbFgo5yuNzDBUdtqwcisOhOALyYkfsQ-1ifms-7lr6-tjEbhpe2is8">
            <AiFillTwitterSquare size="3rem" />
          </SocialIcons>
          {/* TIKTOK */}
          <SocialIcons href="https://www.tiktok.com/@unseenriches?_t=8ZMWdFsXnT3&_r=1&fbclid=IwAR3OuiXG6naxAQ-cZp5iC2kpm4-djWtlegwz6-HW_RvoB69zHa5jtA1JUSk">
            <FaTiktok size="2.5rem" />
          </SocialIcons>
          {/* INSTAGRAM */}
          <SocialIcons href="https://www.instagram.com/unseenriches/?igshid=Yzg5MTU1MDY%3D&fbclid=IwAR1J5Nh_Q8w5QalnhCnbuArfjsS9hwJN3Wa3sKsFVtEg5OC7FsS8M6hL0o4">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          {/* FACEBOOK */}
          <SocialIcons href="https://www.facebook.com/profile.php?id=100075624837352&mibextid=ZbWKwL">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
