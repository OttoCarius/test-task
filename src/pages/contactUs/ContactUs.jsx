import React from "react";
import { Container, Wrap } from "./ContactUs.styled";

function ContactUs() {
  return (
    <Container>
      <Wrap>
        <h2>Phone</h2>
        <p>
          <a href="tel:+380660001212">+38(066)-000-12-12</a>
        </p>
        <h2>Email</h2>
        <p>
          <a href="mailto:language@gmail.com">language@gmail.com</a>
        </p>
        <h2>Location</h2>
        <p>Kyiv, Ukraine</p>
      </Wrap>
    </Container>
  );
}

export default ContactUs;
