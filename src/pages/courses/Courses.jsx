import React, { useState } from "react";
import { courses } from "../../helpers/coursesList";
import { CoursesWrap, Container, Input, InputWrap } from "./Courses.styled";
import Course from "../../components/course/Course";
import { motion } from "framer-motion";

function CoursesPage() {
  const [query, setQuery] = useState("");

  return (
    <Container>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <InputWrap>
          <Input
            type="text"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputWrap>
        <div>
          <CoursesWrap>
            {courses
              .filter(
                (course) =>
                  course.title.toLowerCase().includes(query) ||
                  course.skills.toLowerCase().includes(query)
              )
              .map((course, id) => {
                return (
                  <Course
                    key={id}
                    title={course.title}
                    skills={course.skills}
                    img={course.img}
                    id={id}
                  />
                );
              })}
          </CoursesWrap>
        </div>
      </motion.div>
    </Container>
  );
}

export default CoursesPage;
