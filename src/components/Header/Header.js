import Link from "next/link";
import React from "react";
import {
  AiFillCrown,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
} from "react-icons/ai";
import {
  DiCssdeck,
  DiGithubAlt,
  DiOpenshift,
  DiOpensource,
  DiPerl,
  DiPhotoshop,
  DiPhp,
} from "react-icons/di";
import { FaTiktok } from "react-icons/fa";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <FaTiktok size="3rem" />{" "}
          <Span style={{ marginLeft: "10px" }}>Unseen Riches</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Events</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
