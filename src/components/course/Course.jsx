import React from "react";
import { CourseWrap, CourseImg, Section, Title, Text } from "./Course.styled";

const Course = ({ data, title, skills, img, id }) => {
  return (
    <Section>
      <CourseWrap>
        <CourseImg src={img} alt={title} />
        <Title>{title}</Title>
        <Text> {skills}</Text>
      </CourseWrap>
    </Section>
  );
};

export default Course;
