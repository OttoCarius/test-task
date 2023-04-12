import React from "react";
import { useEffect, useRef } from "react";
import { Container, Title, Text, StyledLink } from "./HomePage.styled";
import Typed from "typed.js";
import { motion } from "framer-motion";

function HomePage() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Join us and start learning languages"],
      typeSpeed: 100,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container>
      <div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.7, delay: 0.5 }}
        >
          <Title>Welcome to language school</Title>
        </motion.div>
        <div>
          <Text ref={el}></Text>
        </div>
        <div>
          <StyledLink to="/courses">Get started now!</StyledLink>
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
