import React from "react";
import { Container, Title, Text, StyledLink } from "./HomePage.styled";

function HomePage() {
  return (
    <Container>
      <div>
        <Title>Welcome to language school</Title>
        <div>
          <Text>Join us and start learning languages</Text>
        </div>
        <div>
          <StyledLink to="/courses">Get started now!</StyledLink>
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
