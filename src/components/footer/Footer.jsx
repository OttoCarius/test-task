import React from "react";
import { Container, ListLinks, ListItems, FooterText } from "./Footer.styled";
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <Container>
      <ListLinks>
        <ListItems>
          <a href="#!">
            <AiOutlineTwitter />
          </a>
        </ListItems>
        <ListItems>
          <a href="#!">
            <BsInstagram />
          </a>
        </ListItems>
        <ListItems>
          <a href="#!">
            <AiFillFacebook />
          </a>
        </ListItems>
      </ListLinks>
      <FooterText>© 2023 andrew podlesnyi</FooterText>
    </Container>
  );
}

export default Footer;
