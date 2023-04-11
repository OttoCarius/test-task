import React from "react";
// import Nav from "../nav/Nav";
import { Container, Nav, Links, LinkItems } from "./Header.styled";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Container>
      <Nav>
        {/* <a href="#!">LanguageSchool</a> */}

        <Links>
          <LinkItems>
            <NavLink to="/">Home</NavLink>
          </LinkItems>
          <LinkItems>
            <NavLink to="/courses">Courses</NavLink>
          </LinkItems>
          <LinkItems>
            <NavLink to="/aboutUs">About Us</NavLink>
          </LinkItems>
          <LinkItems>
            <NavLink to="/contactUs">Contact Us</NavLink>
          </LinkItems>
        </Links>
      </Nav>
    </Container>
  );
}

export default Header;
