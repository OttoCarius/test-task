import React from "react";
import { Container, Wrap } from "./ContactUs.styled";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <Container>
      <Wrap>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2>Phone</h2>
          <p>
            <a href="tel:+380660001212">+38(066)-000-12-12</a>
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.6 }}
        >
          <h2>Email</h2>
          <p>
            <a href="mailto:language@gmail.com">language@gmail.com</a>
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        >
          <h2>Location</h2>
          <p>Kyiv, Ukraine</p>
        </motion.div>
      </Wrap>
    </Container>
  );
}

export default ContactUs;
